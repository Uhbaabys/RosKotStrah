var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'RosKotStrah' });
});

router.post('/', (req, res, next) => {
  console.log('sdasdfas', req.body)
})

module.exports = router;
