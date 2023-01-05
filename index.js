var express = require('express');
var app = express();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
const port = 3000;

app.set('view engine', 'ejs');

io.on('connection', (socket)=>{
    socket.on('sendMsg', (res)=>{
        io.emit('showMsg', res);
    });
});

app.get('/', (req,res)=>{
    res.render('index');
});

http.listen(port, ()=>{
    console.log('Server is running in http://localhost:' + port);
});