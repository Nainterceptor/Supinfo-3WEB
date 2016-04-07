"use strict";
let mongoose = require('mongoose');
let Schema = mongoose.Schema;

mongoose.model('Users', new Schema({
    firstname: String,
    lastname: String,
    website: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
}));