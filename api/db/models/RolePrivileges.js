const mongoose = require('mongoose');
const schema = mongoose.Schema({
    role_id: {type: mongoose.SchemaTypes.ObjectId, required: true},
    permission: {type: String, required: true},
    created_by: {type: mongoose.SchemaTypes.ObjectId, required: true}
},{
    versionKey: false,
    timestamps:{
        createdAt: "created_at",
        updateAt: "update_at"
    }
});
// extends: bir sınıfın başka bir sınıfın özelliklerini kullanması
class RolePrivileges extends mongoose.Model {

}
schema.loadClass(RolePrivileges);
module.exports = mongoose.model("role_privileges", schema);
