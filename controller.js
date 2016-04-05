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
        fs.readFile("index.html", function(err, data) {
            if (err) throw err;
            response.writeHead(200);
            response.end(data.toString());
        });
    },
    getForm: function(request, response) {
        fs.readFile("form.html", function(err, data) {
            if (err) throw err;
            response.writeHead(200);
            response.end(data.toString());
        });
    },
    postForm: function(request, response) {
        response.writeHead(200);
        response.json({result: "Success"});
    }
 };