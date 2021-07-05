const express = require('express');
const path  = require('path');

const route = express.Router();

const data = require(path.join(__dirname, '../data/users'));

route.get('/', (req, res) => {
    res.render('home');
});

route.get('/login', (req, res) => {
    res.render('login');
});

route.post('/check', (req, res) => {

    res.render('success', {name: "Dummy User"});
    // usn = req.body.name;
    // pwd = req.body.age;

    // if(usn == data.userName && pwd == data.password){
    //     res.render('success', {
    //         name: data.name
    //     });
    // }else{
    //     res.render('failure');
    // }
})

module.exports = route;