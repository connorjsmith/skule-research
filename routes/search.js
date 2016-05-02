var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/:query', function(req, res, next) {
  res.send("These are search results for the query " + req.params.query);
  // filtering of these responses (sorting etc.) will be done client side
  // TODO: should we paginate these results? We wont be able to sort on the client side if they are paginated.
  //       we could set a flag in the response that it is paginated, we wont client-side sort in this case?
  // TODO: take in how many results to display
});

router.get('/:query/:page', function(req, res, next) {
  res.send("Page " + req.params.page + " of the results of query " + req.params.query);
  // TODO: check if the page is out of bounds.
  // TODO: respond with the total number of results/pages
  // TODO: take in how many results to display
});

module.exports = router;
