"use strict";

let http = require('http');

http.createServer(function(request, response) {
    if ('GET' === request.method && '/form' === request.url) {
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.write('<!doctype html>');
        response.write('<html><body>');
        response.write('<form method="POST" action="/completed">');
        response.write('<input type="text" name="data1"/>');
        response.write('<input type="text" name="data2"/>');
        response.write('<input type="text" name="data3"/>');
        response.write('<input type="text" name="data4"/>');
        response.write('<input type="submit" value="Send"/>');
        response.end('</form></body></html>');
        return;
    }

    if ('POST' === request.method && '/completed' === request.url) {
        response.writeHead(200);
        request.on("data", function(chunk) {response.write(chunk)});
        request.on("end", function() {response.end();});
        return;
    }

    response.writeHead(404);
    response.end('Not Found');
}).listen(1337);