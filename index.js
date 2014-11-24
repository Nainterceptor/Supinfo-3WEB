var http = require('http');
var fs = require('fs');

var messages = [];

var responses = [];

http.createServer(function (request, response) {

    if (request.url == '/messages') {
        response.end(JSON.stringify(messages));
    }

    else if (request.url == '/message') {
        var message = "";

        request.on('data', function (datas) {
            message += datas;
        });

        request.on('end', function () {
            try {
                newMessage = JSON.parse(message);
                messages.push(newMessage.message);
                response.end();

                responses.forEach(function (aReponse) {
                    aReponse.write('data: ' + newMessage.message + '\n\n');
                });
            }
            catch (e) {
                response.end();
            }
        });
    }

    else if (request.url == '/stream') {
        response.writeHead(200, {
            'Content-Type': 'text/event-stream',
            'Cache-Control': 'no-cache',
            'Connection': 'keep-alive'
        });
        response.write("retry: 10000\n");

        responses.push(response);
    }

    else if (request.url == '/jquery-2.1.1.min.js') {
        fs.readFile('jquery-2.1.1.min.js', function (err, data) {
            response.end(data);
        })
    }
    else {
        fs.readFile('index.html', function (err, data) {
            response.end(data);
        })
    }

}).listen(1337);