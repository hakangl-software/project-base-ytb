const mongoose = require('mongoose');
const schema = mongoose.Schema({
    email: String,
    password: String,
    is_active: Boolean,
    first_name: String,
    last_name: String,
    phone_number: String 
},{
    timestamps:{
        createdAt: "created_at",
        updateAt: "update_at"
    }
});
// extends: bir sınıfın başka bir sınıfın özelliklerini kullanması
class Users extends mongoose.Model {

}
schema.loadClass(Users);
module.exports = mongoose.model("users", schema);
