"use strict";
//entities/user.js

function User(firstname, lastname, website) {
    Object.defineProperty(this, 'id', {
        get: function() {return this._id || null }
    });
    Object.defineProperty(this, 'fullname', {
        get: function() {return this.getFullname() }
    });
    this.firstname = firstname;
    this.lastname = lastname;
    this.website = website;
    //this.createdAt
}

User.prototype.getFullname = function() {
    return this.firstname + ' ' + this.lastname;
};

User.fromDatabase = function(litteral) {
    let user = new User();
    Object.keys(litteral).forEach(function(key) {
        user[key] = litteral[key];
    });
    return user;
};