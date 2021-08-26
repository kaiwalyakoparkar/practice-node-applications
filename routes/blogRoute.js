const express = require('express');
const route = express.Router();
const path = require('path');
const blogsController = require(path.join(
	__dirname,
	'../controllers/blogController.js'
));

route
	.route('/')
	.get(blogsController.getAllBlogs)
	.post(blogsController.createBlog);

route
	.route('/:id')
	.get(blogsController.getSingleBlog)
	.patch(blogsController.updateBlog)
	.delete(blogsController.deteleBlog);

module.exports = route;
