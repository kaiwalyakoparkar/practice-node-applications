const express = require('express');
const route = express.Router();
require('dotenv').config();
const mongoose = require('mongoose');

const home = require('../views/home.hbs');
const signin = require('../views/signin.hbs');
const update = require('../views/update.hbs');
const unsub = require('../views/unsub.hbs');
const status = require('../views/status.hbs');

//Mongoose connections and configs
//Connecting to mongo db
const mongoConnection = process.env.MONGOURL;

mongoose.connect(mongoConnection || 'mongodb://localhost:27017/Newsletter', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//Taking in connection string
const db = mongoose.connection;

//Handling errors and connection success events
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('MongoDB connection establish successfully');
});

//Creating schema of the mongoose
const subSchema = new mongoose.Schema({
  name: String,
  email: String,
  about: String,
});

subSchema.methods.isAdded = function () {
  const subAdded = this.email + ' added to the list of subscribers 🥳';
};

subSchema.methods.isUpdated = function () {
  const subUpdated = this.email + ' updated!'
}

//Modeling the schema to be used earlier.
//Operation                     collection name, schema name
const subscriber = mongoose.model('subscribers', subSchema);

route.get('/home', (req, res) => {
  res.status(200).render('home');
});

route.get('/signin', (req, res) => {
  res.status(200).render('signin');
});

route.post('/signin', (req, res) => {
  console.log(req.body.email + ' has been added to the list');
  const addSub = new subscriber({
    name: req.body.fullname,
    email: req.body.email,
    about: req.body.about,
  });

  // console.log(req.body.fullname);
  // console.log(req.body.about);

  addSub.save(function (err, subAdded) {
    if (err) {
      res
        .status(500)
        .send(
          `<h1>Oops! Some problem has occured try again after some time :( </h1>`
        );
    } else {
      subAdded.isUpdated();
      res.status(200).send(`<h1>Hurrey!! You are in the list 🎉</h1>`);
    }
  });
});

route.get('/update', (req, res) => {
  res.status(200).render('update');
});

route.post('/update', (req, res) => {
  const olde = req.body.oldemail;
  const newe = req.body.newemail;

  subscriber.findOneAndUpdate({email: olde}, {$set : {email: newe}}, {upsert: true}, function(err, doc){
    if (err) {
      res
        .status(500)
        .send(
          `<h1>Oops! Some problem has occured try again after some time :( </h1>`
        );
    } else {
      subAdded.isAdded();
      res.status(200).send(`<h1>Hurrey!! You are in the list 🎉</h1>`);
    }
  });
});

route.get('/unsub', (req, res) => {
  res.status(200).render('unsub');
});

route.get('/status', (req, res) => {
  res.status(200).render('status');
});

module.exports = route;
