const mongoose = require('mongoose');
const schema = mongoose.Schema({
   role_name: {type: String, required: true},
   is_active: {type: Boolean, default: true},
   created_by:{
    // Burası önemli !! Bu olmadan dataya kaydetme demek.
    type: mongoose.SchemaTypes.ObjectId,
    required: true
   }
},{
    versionKey: false,
    timestamps:{
        createdAt: "created_at",
        updateAt: "update_at"
    }
});
// extends: bir sınıfın başka bir sınıfın özelliklerini kullanması
class Roles extends mongoose.Model {

}
schema.loadClass(Roles);
module.exports = mongoose.model("roles", schema);
