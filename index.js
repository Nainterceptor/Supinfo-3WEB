var http = require('http');
var fs = require('fs');
var WebSocketServer = require('websocket').server;

var messages = [];

var responses = [];

var webServer = http.createServer(function (request, response) {

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
                var newMessage = JSON.parse(message);
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

});
webServer.listen(1337);

var wsServer = new WebSocketServer({
    httpServer: webServer,
    autoAcceptConnections: false
});
var connections = [];
wsServer.on('request', function (req) {
    var connection = req.accept('echo-protocol', req.origin);
    console.log(new Date() + ' Peer ' + connection.remoteAddress + ' connected.');

    connections.push(connection);
    console.log(new Date() + ' ' + connections.length + ' peers connected.');

    connection.on('message', function (message) {
        var msg = message.utf8Data;
        console.log(new Date() + ' Received message: ' + msg);
        messages.push(msg);

        connections.forEach(function (destination) {
            destination.sendUTF(msg);
        });
    });
});