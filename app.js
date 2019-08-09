var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

var mongodb = require("mongodb");
var express = require("express");
var path = require("path");
var bodyParser = require('body-parser');
var app = express();
app.set('view engine', 'ejs');
app.use('/NodeFiles', express.static('NodeFiles'));

var mongoose = require("mongoose");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/Data",{ useNewUrlParser: true });
var nameSchema = new mongoose.Schema({
    invcode: Number,
    brand: String,
    Hylly: String,
    Kunto: String,
    Laite : String,
    kpl : Number,
    price: Number,
    Total: Number  
});
var Add = mongoose.model("items", nameSchema);

app.post("/addData", (req, res) => {
    var myData = new Add(req.body);
    myData.save()
        .then(item => {
            res.send("Lisätty!");
        })
        .catch(err => {
            res.status(400).send("Unable to save to database");
        });
});

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

app.get('/Taulukko', function(req, res){
  res.render('Taulukko');
});
app.listen(3000);
