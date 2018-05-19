var express = require('express');
var router = express.Router();
var jwt = require("jsonwebtoken");

var relayHandler = function relayHandler(req, res) {
    var relayState = req.query && req.query.RelayState || req.body && req.body.RelayState; 
    var hashQuery = relayState && relayState.match(/^\#/) && ("/app"+relayState) || relayState  || "/"; 
    res.redirect(hashQuery);
};

module.exports = function(app, config, passport) {
    
    router.get("/", 
		function(req, res) {
			res.redirect('/home');
		}
    );
	
	router.get('/home', function(req, res){
		res.render('webapp', {
			user: 'Guest'
		});
    });

	return router;
};
