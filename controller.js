//controller.js
"use strict";
let fs = require('fs');
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
        response.render('formReturn.jade', {data: request.body});
    }
 };