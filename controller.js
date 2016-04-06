//controller.js
"use strict";
let fs = require('fs');
let mongoose = require('mongoose');
let Data = mongoose.model('Data');

var exports = module.exports = {
    allInit: function(request, response, next) {
        console.log('all init');
        next();
    },
    allAuth: function (request, response, next) {
        console.log('all auth');
        next();
    },
    getIndex: function(request, response) {
        response.render('index.jade');
    },
    getForm: function(request, response) {
        response.render('form.jade');
    },
    postForm: function(request, response) {
        Object.keys(request.body).forEach(function(key) {
            let data = new Data({
                "_id": key,
                "value": request.body[key]
            });
            data.save();
        });
        response.render('formReturn.jade', {data: request.body});
    },
    deleteEntry: function(request, response) {
        Data.findOne({"_id": request.params.entry}).exec(function(err, data){
            if (err) throw err;
            response.json(data.remove());
        });
    }
 };