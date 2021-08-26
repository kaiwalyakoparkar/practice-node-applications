const path = require('path');
const mongoose = require('mongoose');
const app = require(path.join(__dirname, './index.js'));

const PORT = process.env.PORT || 3000;
const DB = process.env.DATABASE_CONNECTION_STRING.replace(
	'<PASSWORD>',
	process.env.DATABASE_PASSWORD
);

mongoose
	.connect(DB, {
		useNewUrlParser: true,
		useCreateIndex: true,
		useFindAndModify: false,
		useUnifiedTopology: true,
	})
	.then(() => console.log('MongoDB connected Successfullly 🔗🔒'))
	.then(() =>
		app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
	);
