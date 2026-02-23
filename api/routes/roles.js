const express = require("express");
const router = express.Router();
/** @type {import("mongoose").Model} */
const Roles = require("../db/models/Roles");
const RolePrivieges = require("../db/models/RolePrivileges");
const Response = require("../lib/Response");
const CustomError = require("../lib/Error");
const Enum = require("../config/Enum");
const role_privileges = require("../config/role_prirvileges");

// GET Role List için
router.get("/", async (req, res) => {
  try {
    let roles = await Roles.find({});
    res.json(Response.successResponse(roles));
  } catch (err) {
    let errorsResponse = Response.errorsResponse(err);
    res.status(errorsResponse.code).json(errorsResponse);
  }
});

// POST add Role için
router.post("/add", async (req, res) => {
  let body = req.body;
  try {
    if (!body.role_name)throw new CustomError(Enum.HTTP_CODES.BAD_REQUEST,"Validation Error!","role_name fields must be filled");
    if(!body.permissions || !Array.isArray(body.permissions) || body.permissions.length==0) {
      throw new CustomError(Enum.HTTP_CODES.BAD_REQUEST,"Validation Error!","permissions fields must be an Array");
    }
    let role = new Roles({
      role_name: body.role_name,
      is_active: true,
      created_by: req.user?.id,
    });
    await role.save();
    res.json(Response.successResponse({ success: true }));
  } catch (err) {
    let errorsResponse = Response.errorsResponse(err);
    res.status(errorsResponse.code).json(Response.errorsResponse(err));
  }
});

// POST update Role için
router.post("/update", async (req, res) => {
  let body = req.body;
  try {
    if (!body._id)
      throw new CustomError(
        Enum.HTTP_CODES.BAD_REQUEST,
        "Validation Error!",
        "_id fields must be filled",
      );
    let updates = {};
    if (body.role_name) updates.role_name = body.role_name;
    if (typeof body.is_active === "boolean") updates.is_active = body.is_active;

    await Roles.updateOne({ _id: body._id }, updates);

    res.json(Response.successResponse({ success: true }));
  } catch (err) {
    let errorsResponse = Response.errorsResponse(err);
    res.status(errorsResponse.code).json(errorsResponse);
  }
});

// POST delete Role için
router.post("/delete", async (req, res) => {
  let body = req.body;
  try {
    if (!body._id)
      throw new CustomError(
        Enum.HTTP_CODES.BAD_REQUEST,
        "Validation Error!",
        "_id fields must be filled",
      );
    await Roles.deleteOne({ _id: body._id });
    res.json(Response.successResponse({ success: true }));
  } catch (err) {
    let errorsResponse = Response.errorsResponse(err);
    res.status(errorsResponse.code).json(errorsResponse);
  }
});

router.get("/role_privileges", async (req,res) => {
  res.json(role_privileges);
});

module.exports = router;
