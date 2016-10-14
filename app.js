
"use strict";
var mongo = require("mongodb").MongoClient;
var express = require('express');
var bodyParser = require('body-parser');
var mongoose  = require("mongoose");
var Book = require("./book.model.js");
var port  =3000;
var t = 10;

let MONGO_URL = "mongodb://ankur1163:lightbulb1@ds013946.mlab.com:13946/ank1163";


var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});
//app.listen(3000);
/*
mongo.connect(MONGO_URL, function (error, db) {
    if (error) {
    throw new Error('Database failed to connect!');
    } else {
    console.log('MongoDB successfully connected on port 27017.');
    }

    // start the server

    app.listen(3000, function() {
        console.log('Express server listening on port 3000');
    });

});

MONGO_URL.Book.insert({
 title:"refactor the dom",
 author:"ty he",
 category:"tech"

})
MONGO_URL.Book.insert({
 title:"1",
 author:"2e",
 category:"3"

})
*/
