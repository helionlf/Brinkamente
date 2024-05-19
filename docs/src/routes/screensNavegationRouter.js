const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/home', function(req, res) {
    res.sendFile(path.join(__dirname, '../../index.html'));
});
router.get('/cart', function(req, res) {
    res.sendFile(path.join(__dirname, '../views/cartPage.html'));
});

//place holder do form do produt
// router.get("/productPage", (req, res) => {
//     res.sendFile(path.join(__dirname,'../views/productpage.html'));
//     console.log("productpage");
// });

module.exports = router;