// -- Packages -- \\
var express= require("express")
var path = require("path")

var app = express();
var PORT = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var table = [
    {
      id: "22",
      name: "Customer 1",
      email: "customer@gmail.com",
      phone: 1112223333
    }
  ];

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
  });

  app.get("/add", function(req, res) {
      res.sendFile(path.join(__dirname, "add.html"));
  });

  app.get("/tables", function(req, res) {
      res.sendFile(path.join(__dirname, "tables.html"));
  });

  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });