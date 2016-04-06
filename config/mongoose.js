"use strict";
let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let data = new Schema({
    _id: String,
    value: String
});

mongoose.model('Data', data);
//                  domain ----v         v--- dbname
mongoose.connect('mongodb://localhost/supinfo');