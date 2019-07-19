var express = require("express");
var bodyParser = require('body-parser');
var app = express();

app.set('view engine', 'ejs');
app.use('/NodeFiles', express.static('NodeFiles'));

app.get('/', function(req, res){
  res.render('index');
});

app.get('/Tietokoneen-kunnostus', function(req, res){
  res.render('Tietokoneen-kunnostus');
});

app.get('/Keittion-toimintaa', function(req, res){
  res.render('Keittion-toimintaa');
});

app.get('/Tietix-pajalaisten_toita', function(req, res){
  res.render('Tietix-pajalaisten_toita');
});

app.get('/Yhteystiedot', function(req, res){
  res.render('Yhteystiedot');
});
app.listen(3000);
/*
app.get('/profile/:name', function(req, res){
  var data = {age: 29, job: 'Ninja', hobbies: ['eating', 'fighting', 'fishing']};
  res.render('profile', {person: req.params.name, data: data});
});
*/
