const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
	title: {
		type: String,
		required: [true, 'The blog title cannot be empty'],
	},
	content: {
		type: String,
		required: [true, 'The blog content cannot be empty'],
	},
	slug: {
		type: String,
		required: [true, 'The blog should have a unique slug'],
		unique: true,
	},
	author: {
		type: String,
		default: 'Anonymus',
	},
});

const Blog = mongoose.model('Blog', BlogSchema);

module.exports = Blog;
