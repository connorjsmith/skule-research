var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/:postingID', function(req, res, next) {
  res.send("You are looking at posting #" + req.params.postingID);
  // respond with JSON, which will be rendered by react
  // res.render('index', { title: 'Express' });
});

router.post('/:postingID/edit', function(req, res, next) {
  // need to authenticate this request.
  // respond with an error if not authenticated, react will display a "not allowed" message
  res.send("You are editing posting #" + req.params.postingID);
});

module.exports = router;
