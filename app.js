"use strict";
var mongo = require("mongodb").MongoClient;
var express = require('express');
var bodyParser = require('body-parser');
var mongoose  = require("mongoose");
var Book = require("./book.model.js");
var port  =3000;
var t = 60;
var y= 98;

let MONGO_URL = "mongodb://ankur1163:lightbulb1@ds013946.mlab.com:13946/ank1163";


var app = express();
//app.listen(5000);
app.listen(process.env.PORT || 5000);

app.get('/', function (req, res) {
  res.send('Hello World!');
});
mongoose.connect(MONGO_URL);
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function callback () {

  // Create song schema
  var songSchema = mongoose.Schema({
    decade: String,
    artist: String,
    song: String,
    weeksAtOne: Number
  });

   var Song = mongoose.model('songs', songSchema);
   var seventies = new Song({
   decade: '1970s',
   artist: 'Debby Boone',
   song: 'You Light Up My Life',
   weeksAtOne: 10
 });
 var ninenine = new Song({
   decade:"1800s",
   artist:"adnan sami",
   song:"its awesome",
   weeksAtOne:50

 }



 );

 var eighties = new Song({
   decade: '1980s',
   artist: 'Olivia Newton-John',
   song: 'Physical',
   weeksAtOne: 10
 });


 seventies.save();
 eighties.save();
 ninenine.save();
});
