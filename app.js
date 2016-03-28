var http = require('http');
var fs = require('fs');
var qs = require('querystring');
fs.readFile('./form.html', function(err, file) {
    http.createServer(function (req, res) {
        if ('GET' === req.method && '/form' === req.url) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(file);
        } else if ('POST' === req.method && '/completed' === req.url) {
            parseBody(req, function(){
                res.writeHead(200, {'Content-Type': 'text/json'});
                res.end(JSON.stringify(req.body));
            });
        } else {
            res.writeHead(404, {});
            res.end('Not found');
        }
    }).listen(1337);
});

function parseBody(req, cb) {
    var body = "";
    req.on("data", function(chunk) {
        body += chunk;
    });
    req.on("end", function() {
        req.body = qs.parse(body);
        cb();
    });
}