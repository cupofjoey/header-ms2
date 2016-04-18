var express = require('express');
var app = express();
var useragent = require('express-useragent');


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', function (req, res) {
  try{
  	var source = req.headers["user-agent"]
  	var ua = useragent.parse(source);	

	var metaData = {
		"ipaddress" : req.ip,
		"language" : req.acceptsLanguages()[0],
		"software" : ua.os
	};
  	res.send(metaData);
	}catch(err){
		res.status(400).send(err);
	}
});

app.listen(process.env.PORT || 5000);

