const mongoose = require("mongoose"); 

//! Şema oluşturma alanı
const schema = mongoose.Schema({
  is_active: {type: Boolean, default: true},
  created_by: {type: mongoose.SchemaTypes.ObjectId, required: true}
},{
    versionKey: false, // her fieldın bir versionKey i vardır. Bunun oluşmasını istemediğimiz için ilk olarak false ile başlattık.
    timestamps:{// eğer tanımlamasaydık ilk değeri false olarak gelecekti.
        createdAt: "created_ad",
        updatedAt:  "updated_ad"
    }
});

class Categories extends mongoose.Model{

}

schema.loadClass(Categories);
module.exports = mongoose.model("categories", schema);