var express = require('express');
var path = require('path');
var app = express();
app.use(express.static(path.join(__dirname, '../public')));

app.get('/', 
function(req, res) {
  console.log('GET request');
  res.send();
});

var port = 4000;
console.log('soulBay is listening on ', port);
app.listen(port);