var express = require('express')
var app = express();
var auth = require('http-auth');
var basic = auth.basic({
  realm: "SD Information Coordinators"
}, function (username, password, callback) { // Custom authentication method.
  callback(username === "DataSD" && password === "Inventory2015");
});

app.set('port', (process.env.PORT || 5000))
app.use(auth.connect(basic));
app.use(express.static(__dirname + '/public'))
app.use('/dash32', express.static(__dirname + '/invdash'))

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
