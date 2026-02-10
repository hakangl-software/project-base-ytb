var express = require('express');
var router = express.Router();

const fs = require("fs"); // node.js te gelen kütüphane

let routes = fs.readdirSync(__dirname); // Senk olarak routes klasörünü oku demek.

// Burada dinamik router yolu oluşturma kuruyoruz. Yani ben routes içinde klasör oluşturduğumda app.js te router alanına yolunu olştursun.
for(let route of routes){           
  if(route.includes(".js") & route != "index.js"){  // Burada farklı klasör olmasına karşı kontrol kod oluşturuyoruz.
    router.use("/"+route.replace(".js", ""), require('./'+route));
  }
}

module.exports = router;
