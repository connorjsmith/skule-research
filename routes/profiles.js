var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:profileID', function(req, res, next) {
  res.send("You are looking at the profile of user " + req.params.profileID);
});

router.post('/:profileID/edit', function(req, res, next) {
  // we should really validate all of these
  res.send("You are editing the profile of user " + req.params.profileID);
});

module.exports = router;
