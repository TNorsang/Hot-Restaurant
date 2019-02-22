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

  // Create New Characters - takes in JSON input
app.post("/api/characters", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newcharacter = req.body;
  
    console.log(newcharacter);
  
    // We then add the json the user sent to the character array
    characters.push(newcharacter);
  
    // We then display the JSON to the users
    res.json(newcharacter);
  });
  
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });