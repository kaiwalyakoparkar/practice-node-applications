const express = require('express');
const router = express.Router();
const env = require('dotenv').config();
const mongoose = require('mongoose');

const home = require('../views/home.hbs');
const signin = require('../views/signin.hbs');

router.get('/', (req, res) => {
    res.status(200).render('home');
});

router.get('/signin', (req, res) => {
    res.status(200).render('signin');
});

mongoose.connect(process.env.MONGOURI, {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error: '));

db.once('open', function(){
    console.log('Connection established with MongoDB successfully');
});

const subsSchema = new mongoose.Schema({
    email: String,
})

subsSchema.methods.isAdded = function(){
    const subAdded = this.email + ' added to the list of subscribers 🥳'
}

const subscriber = mongoose.model('subscribers', subsSchema);


router.post('/signin',(req, res)=>{
    // console.log(req.body.email);
    const addSub = new subscriber({
        email: req.body.email,
    });

    addSub.save(function(err, subscriberAdded){
        if(err){
            res.status(505).send('Oops! There was some problem adding you. Please try again later :(')
            return console.error(error);
        }

        subscriberAdded.isAdded();
    });

    res.status(200).send(`<h1>You are added to the list 🎉</h1>`);
});

module.exports = router;