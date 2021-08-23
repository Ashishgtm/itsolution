var express = require('express');
var router = express.Router();

/* GET membership listing. */
router.get('', function(req, res, next) {
  res.render('membership');
});

module.exports = router;
