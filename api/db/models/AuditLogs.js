const mongoose = require("mongoose"); 

//! Şema oluşturma alanı
const schema = mongoose.Schema({
  level: String,
  email: String,
  location: String,
  proc_type: String,
  log: String

},{
    versionKey: false, // her fieldın bir versionKey i vardır. Bunun oluşmasını istemediğimiz için ilk olarak false ile başlattık.
    timestamps:{// eğer tanımlamasaydık ilk değeri false olarak gelecekti.
        createdAt: "created_ad",
        updatedAt:  "updated_ad"
    }
});

class AuditLogs extends mongoose.Model{

}

schema.loadClass(AuditLogs);
module.exports = mongoose.model("audit_logs", schema);