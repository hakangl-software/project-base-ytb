const mongoose = require("mongoose"); 

//! Şema oluşturma alanı
const schema = mongoose.Schema({
    email: { type: String, required: true},
    password: { type: String, required: true},
    is_active: { type: Boolean, default: true},
    fist_name: String,
    last_name: String,
    phone_number: String
},{
    timestamps:{
        createdAt: "created_at",
        updatedAt:  "updated_at"
    }
});

class Users extends mongoose.Model{

}

schema.loadClass(Users);
module.exports = mongoose.model("users", schema);