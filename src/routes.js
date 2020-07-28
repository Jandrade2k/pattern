const express = require('express');
const multer = require ('multer');
const multerConfig = require('./config/multer');

const router = express.Router();

// const exController = require('./controllers/exController')

// routes.post('/rota', exController.metodo);

routes.get('/teste', (req, res) => {
    return res.send('Ta funcionando. =D');
})

module.exports = routes;