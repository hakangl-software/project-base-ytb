const mongoose = require('mongoose');
const schema = mongoose.Schema({
  level: String,
  email: String,
  location: String,
  proc_type: String,
  log: String
},{
    versionKey: false,
    timestamps:{
        createdAt: "created_at",
        updateAt: "update_at"
    }
});
// extends: bir sınıfın başka bir sınıfın özelliklerini kullanması
class AuditLogs extends mongoose.Model {

}
schema.loadClass(AuditLogs);
module.exports = mongoose.model("auditlogs", schema);
