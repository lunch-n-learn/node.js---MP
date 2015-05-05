var express = require('express');
var router = express.Router();

/* GET users listing. */
/*router.post('/', function(req, res) {
	console.log('Employee ID:'+req.body.empID);
  res.send('respond with a resource to the submit button....');
});
*/


router.post('/', function(req, res) {
	console.log('Employee ID:'+req.body.empID);
   res.render('index', { title: 'Welcome', displayResults: 'You entered: '+ req.body.empID });
});


module.exports = router;
