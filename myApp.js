let express = require('express');
let app = express();
require("dotenv").config();

// #1
// console.log("Hello World");

// #2
// app.get("/", (req, res) => {
//   res.send("Hello Express");
// })

// #3
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

// #4
app.use("/public", express.static(__dirname + "/public"));

// #5
// app.get("/json", (req, res) => {
//   res.json({"message": "Hello json"});
// });

// #6
const mySecret = process.env["MESSAGE_STYLE"]
app.get("/json", (req, res) => {
  if ( mySecret == "uppercase" ) {
    res.json({ "message": "HELLO JSON" });
  }
  else {
    res.json({ "message": "Hello json" });
  }
});

module.exports = app;