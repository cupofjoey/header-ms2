var express = require('express');
var app = express();
var useragent = require('express-useragent');


app.get('/', function (req, res) {
  var source = req.headers["user-agent"]
  var ua = useragent.parse(source);	

	var metaData = {
		"ipaddress" : req.ip,
		"language" : req.acceptsLanguages()[0],
		"software" : ua.os
	};

	//req.ip
	//req.acceptsLanguages()[0]
	//req.headers["operating system"]
  //res.send(req.headers["os"]);

  //res.writeHead(200, {'Content-Type': 'application/json'});
  res.send(metaData);
});

app.listen(process.env.PORT || 5000);

