// All the dependencies
var express = require("express");
var mongoose = require("mongoose");
var expressHandlebars = require("express-handlebars");
var bodyParser = require("body-parser");

// My Port
var PORT = process.env.PORT || 3000;

// Express instantiation
var app = express();

// Router Instantiation
var router = express.Router();

// Import the routes so router can use it.
require("./config/routes")(router);

// Using express.static to use all the public assets by express
app.use(express.static(__dirname + "/public"));

// Connect Handlebars to our Express app
app.engine("handlebars", expressHandlebars({
  defaultLayout: "main"
}));
app.set("view engine", "handlebars");

// Use bodyParser in our app
app.use(bodyParser.urlencoded({
  extended: false
}));

// Router middleware
app.use(router);

// mongoose db 
var db = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

// Connect mongoose to our database
mongoose.connect(db, function(error) {
  // Log any errors connecting with mongoose
  if (error) {
    console.log(error);
  }
  // Or log a success message
  else {
    console.log("mongoose connection is successful");
  }
});

// Listen on the port
app.listen(PORT, function() {
  console.log("Listening on port:" + PORT);
});