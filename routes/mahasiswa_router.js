var express = require('express');
var router = express.Router();

router.get("/mahasiswa", function (req, res, next) {
    res.render("mahasiswa_view", {
        nama: "risya",
        kelas: "mi 03",
        alamat: "bernuen"
    });
 });

 module.exports = router;