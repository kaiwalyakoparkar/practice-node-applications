const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const app = require(path.join(__dirname,'./index.js'));

const port = process.env.PORT;
const DB = process.env.DATABASE_CONNECTION_STRING.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);

mongoose.connect(DB, {
	useNewUrlParser: true,
	useCreateIndex: true,
	useFindAndModify: false,
	useUnifiedTopology: true,
}).then(() => {
	console.log('MongoDB connected Successfullly 🔗🔒');
});

app.listen(port, () => {
	console.log(`Server started on port ${port}`)
});