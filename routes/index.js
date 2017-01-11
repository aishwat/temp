var express = require('express');
var router = express.Router();
var request = require('request');
// https://blog.xervo.io/node.js-tutorial-how-to-use-request-module

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/test_post', function(req, res, next) {

		request({
		    url: 'http://127.0.0.1:3000/receive_post', //URL to hit
		    // qs: {from: 'blog example', time: +new Date()}, //Query string data
		    method: 'POST',
		    headers: {
		        // 'Content-Type': 'MyContentType',
		        // 'Custom-Header': 'Custom Value'
		    },
		    json: {
		        field1: 'data1',
		        field2: 'data2'
		    }
		}, function(error, response, body){
		    if(error) {
		        console.log(error);
		    } else {
		    	res.render('index', { title: 'post done successfully'+response.body });
		        console.log(response.statusCode, body);
		    }
		});

});
router.post('/receive_post', function(req, res, next) {
	console.log(req.body.field1)
	
});

module.exports = router;
