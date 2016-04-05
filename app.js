//app.js
"use strict";

let express = require('express');
let controller = require('./controller.js');
let app = express();

app.all("*", controller.allInit);
app.all("/auth/*", controller.allAuth);
app.get("/", controller.getIndex);
app.get("/index", controller.getIndex);
app.get("/form", controller.getForm);
app.post("/form", controller.postForm);

app.listen(1337);