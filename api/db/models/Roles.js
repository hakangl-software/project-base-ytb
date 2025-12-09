const mongoose = require("mongoose"); 

//! Şema oluşturma alanı
const schema = mongoose.Schema({
   role_name : {type: String, required: true},
   is_active : {type:Boolean, default: true},
   created_by: {type: mongoose.SchemaTypes.ObjectId, required: true} // bu şekilde yazdığımda created_by alanı dolu olmadan bu şemaya kayıt olmayacak.

},{
    versionKey: false, // her fieldın bir versionKey i vardır. Bunun oluşmasını istemediğimiz için ilk olarak false ile başlattık.
    timestamps:{                    // eğer tanımlamasaydık ilk değeri false olarak gelecekti.
        createdAt: "created_ad",
        updatedAt:  "updated_ad"
    }
});

class Roles extends mongoose.Model{

}

schema.loadClass(Roles);
module.exports = mongoose.model("roles", schema);