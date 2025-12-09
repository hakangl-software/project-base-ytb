const mongoose = require("mongoose"); 

//! Şema oluşturma alanı
const schema = mongoose.Schema({
   role_id : {type: mongoose.SchemaTypes.ObjectId, required: true},
   user_id : {type: mongoose.SchemaTypes.ObjectId, required: true},
},{
    versionKey: false, // her fieldın bir versionKey i vardır. Bunun oluşmasını istemediğimiz için ilk olarak false ile başlattık.
    timestamps:{// eğer tanımlamasaydık ilk değeri false olarak gelecekti.
        createdAt: "created_ad",
        updatedAt:  "updated_ad"
    }
});

class UserRoles extends mongoose.Model{

}

schema.loadClass(UserRoles);
module.exports = mongoose.model("user_roles", schema);