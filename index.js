var http = require('http');
var fs = require('fs');

var messages = [];

http.createServer(function (request, response) {

    if (request.url == '/messages') {
        response.end(JSON.stringify(messages));
    } else if (request.url == '/message') {
        var message = "";

        request.on('data', function (datas) {
            message += datas;
        });

        request.on('end', function () {
            try {
                newMessage = JSON.parse(message);
                messages.push(newMessage.message);
                response.end();
            }
            catch (e) {
                response.end();
            }
        });
    } else if (request.url == '/jquery-2.1.1.min.js') {
        fs.readFile('jquery-2.1.1.min.js', function (err, data) {
            response.end(data);
        })
    } else {
        fs.readFile('index.html', function (err, data) {
            response.end(data);
        })
    }

}).listen(1337);