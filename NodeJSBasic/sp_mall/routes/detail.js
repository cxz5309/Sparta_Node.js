var express = require('express');
var router = express.Router();
 

router.get('/', function(req, res, next) {
  let goodsId = req.query.goodsId;
  res.render('detail', {goodsId});
});
  
module.exports = router;