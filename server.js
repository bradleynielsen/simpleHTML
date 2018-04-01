const express = require('express')
const app = express()
const path = require('path');
var prompt = require('prompt');



app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(8080, () => console.log('Server listening on port 8080'))


/////////////////////////////////////////////////////////////////////////

var person = prompt("Please enter your name", "Harry Potter");

if (person != null) {
    document.getElementById("demo").innerHTML =
    "Hello " + person + "! How are you today?";
}
