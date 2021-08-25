const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
	title: {
		type: String,
		require: [true, 'The blog title cannot be empty']
	},
	content: {
		type: String,
		require: [true, 'The blog content cannot be empty']
	},
	slug: {
		type: String,
		require: [true, 'The blog should have a unique slug'],
		unique: true
	},
	author: {
		type: String,
		default: 'Anonymus'
	}
});

const Blog = mongoose.model('Blog', BlogSchema);

module.exports = Blog;