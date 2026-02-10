const express = require("express"); // NE YAPARSAN YAP İLK OLARAK EXPRESS KÜTÜPHANESİNİ EKLE !!!!!!
const router = express.Router(); // ROUTERı projemize ekliyoruz.
/**
    req : bize gelen isteğin içinde bulunan body, header ve min. bigileri barındıryor.
    res : req e cevap için kullanacağımız fonk. barındırıyor.
    next: eğer routerı middleware olarak kullanacaksak başka bir router çalışacaksa kullanılır.
 */
router.get("/", (req, res, next) =>{
    res.json({
        body: req.body,
        params: req.params,
        query: req.query,
        headers: req.headers
    });
})


module.exports = router;