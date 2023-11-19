var express = require('express');
var router = express.Router();

// Move the messages array outside the route handlers to be accessible by all of them
const messages = [
    {
        text: 'Hi there!',
        user: 'Amando',
        added: new Date(),
    },
    {
        text: 'Hello World!',
        user: 'Charles',
        added: new Date(),
    },
];

router.get('/', function (req, res, next) {
    const title = 'Mini Messageboard';
    res.render('index', { title, messages });
});

router.get('/new', function (req, res, next) {
    res.render('new', { title: 'Post Message' });
});

router.post('/new', function (req, res, next) {
    let userName = req.body.userName || 'Anonymous';
    const message = req.body.message;
    messages.push({
        text: message,
        user: userName,
        added: new Date(),
    });
    res.redirect('/');
});

module.exports = router;
