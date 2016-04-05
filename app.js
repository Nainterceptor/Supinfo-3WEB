"use strict";

let http = require('http');
let qs = require('querystring');
let fs = require('fs');

http.createServer(function(request, response) {
    if ('GET' === request.method && '/form' === request.url) {
        response.writeHead(200, {'Content-Type': 'text/html'});
        fs.readFile("form.html", function(err, data) {
            // Please considere moving this read outside of the createServer,
            // to improve perfs by decreasing number of i/o.
            // We are keeping this pattern here for readability.
            if (err) throw err;
            response.end(data.toString());
        });
        return;
    }

    if ('POST' === request.method && '/completed' === request.url) {
        let data = '';
        request.on('data', function(chunk) {data += chunk});
        request.on('end', function() {
            response.writeHead(200, {"content-type": "application/json"});
            let object = qs.parse(data);
            response.end(JSON.stringify(object));
        });
        return;
    }

    response.writeHead(404);
    response.end('Not Found');
}).listen(1337);