var express = require('express');
var router = express.Router();
var jwt = require("jsonwebtoken");
const request = require('request');

var relayHandler = function relayHandler(req, res) {
    var relayState = req.query && req.query.RelayState || req.body && req.body.RelayState; 
    var hashQuery = relayState && relayState.match(/^\#/) && ("/app"+relayState) || relayState  || "/"; 
    res.redirect(hashQuery);
};

module.exports = function(app) {
    
	router.get('/', function(req, res){
		res.render('index');
    });
	
	var url = require('url');
	var cfenv = require("cfenv");
	var db;
	
	var fs = require('fs');
	var path = require('path');
	var nodeExcel=require('excel-export');

	router.get('/getgraph', function(req, res) {
		var url = 'http://localhost:8301/rest/landscapev2/applications';
		//var url = 'http://scrbiasdkcph786.crb.apmoller.net:8080/LandScape-V2/landscapev2/applications';
		request(url, { json: true }, (err, ret, body) => {
		  if (err) { return console.log(err); }
		  var data = body.response;
		  var DIR = 'img/';
		  for(var node in data.nodes){
			  var currnode = data.nodes[node];
			  if(currnode.group == 'server') {
				currnode.image = DIR + 'Hardware-My-Computer-3-icon.png';
				currnode.shape = 'image';
			  }
			//data.nodes[node].label = data.nodes[node].Name;
		  }
		  res.send(data);
		});
	});
	
	
	
	return router;
};
