// Dependencies

var express = require("express");
var bodyParser = require("body-parser");


// Express Configuration

var app = express();
var PORT = 3600

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
 app.use(express.static(__dirname + '/app/public'));


require('./app/routing/apiRoutes')(app);
require('./app/routing/htmlRoutes')(app);

app.listen(PORT,function(){
    console.log("App listening on PORT: " + PORT)
})