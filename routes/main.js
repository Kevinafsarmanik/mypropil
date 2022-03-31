__path = process.cwd()

var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.sendFile(__path + '/views/home.html')
})

router.get('/login', (req, res) => {
    res.sendFile(__path + '/views/form-login.html')
})

router.get('/about', (req, res) => {
    res.sendFile(__path + '/views/about.html')
})

router.get('/game', (req, res) => {
    res.sendFile(__path + '/views/game.html')
})

router.get('/config', (req, res) => {
    config = {
        status: true,
        result: {
            prefix : '/',
            namabot: 'XHIVIER',
            namaowner: 'Kevin',
            instagram: 'Kevinafsar_.id',
            youtube : 'GAK PUNYA 🙂'
        }
    }
    res.json(config)
})

module.exports = router
