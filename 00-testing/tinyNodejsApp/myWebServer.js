//---------------------------------------------------------------
// This application uses express as its web server
// for more info, see: http://expressjs.com
// --------------------------------------------------------------
// Here we define all the required modules and services
// load Spiele Set..
var bodyParser = require('body-parser'); // helper routines to parse data JSON in request body
var cookieParser = require('cookie-parser'); // module for parsing cookies
var cfenv = require("cfenv")      // Cloud Foundry Environment to estimate the port
var d = new Date();
var footprint = d.getTime()%10000;
//----------------------------------------------------------------------------
// create a new express server
// ---------------------------------------------------------------------------
var express = require('express');
var app = express();
app.use(cookieParser());  // Apply the cookie parser
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use('/static', express.static('/views/HTML'))
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json({ strict:false}));
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb',parameterLimit: 1000000 }));
//
// Enable CORS
//
/*app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
}); */
//
//
// ---------------------------------------------------------------------------
// Start listening
// ---------------------------------------------------------------------------
var appEnv = cfenv.getAppEnv();
if (appEnv.isLocal) {var port = 6002} else {var port=appEnv.port;}
//
app.listen(port, function() {
  console.log('***********************************');
  console.log('listening:', port);
  console.log('***********************************');
 });
// -------------------------------------------------------------------------
// Access the single page
// -------------------------------------------------------------------------
  app.get('/home', function(req, res){
  res.render('tiny',{host : req.headers.host,environment: appEnv.isLocal, running: "user",footprint: footprint});
});
