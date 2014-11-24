var app = require('http').createServer(handler)
    , io = require('socket.io').listen(app)
    , fs = require('fs');

app.listen(1337);

function handler(req, res) {
    if (req.url == '/jquery-2.1.1.min.js') {
        fs.readFile(__dirname + '/jquery-2.1.1.min.js',
            function (err, data) {
                res.writeHead(200);
                res.end(data);
            });
    }
    else {
        fs.readFile(__dirname + '/index.html',
            function (err, data) {
                res.writeHead(200);
                res.end(data);
            });
    }
}

io.sockets.on('connection', function (socket) {
    socket.on('join', function (data) {
        io.sockets.emit('join', data);
    });
    socket.on('message', function (data) {
        io.sockets.emit('message', data);
    });
    socket.on('idle', function (data) {
        io.sockets.emit('idle', data);
    });
});