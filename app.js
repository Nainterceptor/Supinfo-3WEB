//app.js
"use strict";
let path = require('path');
let express = require('express');
let morgan = require('morgan');
let bodyParser = require('body-parser');
let cookieSession = require('cookie-session');
let controller = require('./controller.js');
let app = express();

app.use(morgan("combined"));
app.use(cookieSession({
    name: 'session',
    keys: ['key']
}));

app.set('view engine', 'jade');
app.set('views', path.join(__dirname, 'templates'));

app.all("*", controller.allInit);
app.all("/auth/*", controller.allAuth);
app.get("/", controller.getIndex);
app.get("/index", controller.getIndex);
app.get("/form", controller.getForm);
app.post("/form", bodyParser.urlencoded(), controller.postForm);

app.listen(1337);