var express = require('express');
var router = express.Router();
const Categories = require('../db/models/Categories'); //Burada Model içindeki Categories dosyasını import ettik.
const Response = require('../lib/Response');
const CustomError = require('../lib/Error');


 // GET Categories için
router.get('/', async (req, res, next) => {

     try { 
          let categories = await Categories.find({});
          res.json(Response.succesResponse(categories));

     } catch (err) {
          res.json(Response.errosResponse(err));
     }     
});


router.post('/add', async (req, res) =>{
     let body = req.body;
     try {
          if(!body.name) throw new CustomError;
     } catch (err) {
          
     }
})

module.exports = router;