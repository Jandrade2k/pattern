const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { Socket } = require('dgram');
const { json } = require('express');

const app = express();
app.use(cors());

const server = require('http').Server(app);
const io = require('socket.io')(server);

io.on('connection', box => {
    socket.join(box)
})

// TODO: Inserir endereço do banco de dados.

// mongoose.connect('');

app.use((req, res, next) => {
    req.io = io;

    return next();
})

app.use(express,json());
app.use(express.urlencoded({extend: true}));
app.use('/files', express.static(path.resolve(__dirname, '..', 'tmp')))

app.use(require('./routes'));

server.listen(3333);