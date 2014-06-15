/**
 * Created by Dieter Beelaert on 22/04/2014.
 */

/*--- Server setup ---*/
var express = require('express');
var server = express();
var request = require('request');
var sass = require('node-sass');
var bodyParser = require('body-parser');
var Context = require('./Context.js');
var port = 3000;
server.use('/wwwroot',express.static(__dirname + '/wwwroot'));
server.use(bodyParser());
server.listen(port);
console.log('listening for requests on port ' + port);


server.get('/',function(req,res){
   res.render('../Views/index.ejs'); 
});

server.post('/sass',function(req,res){
	var ctx = new Context(req);
	var scss = ctx.getParam('sass');
	var style = ctx.getParam('minify') ? 'compressed' : 'normal';

	 sass.render({
	   data: scss,
		success:function(css){
			res.write(css);
			res.end();
		},
	   	error: function(error){console.log(error);},
	   	outputStyle: style
   });
});


//sass compilation by server: https://github.com/andrew/node-sass
