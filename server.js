// -- Packages -- \\
var express= require("express")
var path = require("path")

var app = express();
var port = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());