const express = require('express');
const router = express.Router();

const home = require('../views/home.hbs');
const signin = require('../views/signin.hbs');

router.get('/', (req, res) => {
    res.status(200).render('home');
});

router.get('/signin', (req, res) => {
    res.status(200).render('signin');
});

router.post('/signin',(req, res)=>{
    console.log(req.body.email);
    res.status(200).send(`<h1>Got the request thanks</h1>`);
});

module.exports = router;