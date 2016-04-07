"use strict";
//api/users.js

var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Users = mongoose.model('Users');
var ObjectID = mongoose.Types.ObjectId;

router.get('/users', function(req, res) {
    Users.find(function(err, users){
        res.json(err || users)
    });
});

router.post('/users', function(req, res) {
    var user = new Users(req.body);
    user.save(function(err, user) {
        res.json(err || user);
    });
});

router.delete('/users/:id', function(req, res) {
    Users.findOne({"_id": ObjectID(req.params.id)}, function(err, user) {
        user.remove(function(err, user) {
            res.json(err || user);
        });
    });
});

router.put('/users/:id', function(req, res) {
    Users.findOne({"_id": ObjectID(req.params.id)}, function(err, user) {
        delete req.body._id;
        delete req.body.createdAt;
        Object.keys(req.body).forEach(function(key) {
            user[key] = req.body[key];
        });
        user.save(function(err, user) {
            res.json(user);
        });
    });
});

router.get('/users/:id', function(req, res) {
    Users.findOne({"_id": ObjectID(req.params.id)}, function(err, user) {
        res.json(err || user);
    });
});

module.exports = router;
