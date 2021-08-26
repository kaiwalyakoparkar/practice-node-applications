const path = require('path');
const Blog = require(path.join(__dirname, '../models/blogModel.js'));

//Getting all the blogs from the database
exports.getAllBlogs = async (req, res) => {
	try {
		const blogs = await Blog.find();

		res.status(200).json({
			status: 'success',
			data: {
				blogs,
			},
		});
	} catch (err) {
		res.status(400).json({
			status: 'fail',
			message: err,
		});
	}
};

//Creating a blog and adding it to the database
exports.createBlog = async (req, res) => {
	try {
		const createdBlog = await Blog.create(req.body);

		res.status(201).json({
			status: 'success',
			data: {
				createdBlog,
			},
		});
	} catch (err) {
		res.status(400).json({
			status: 'fail',
			message: err,
		});
	}
};

//Get single blog
exports.getSingleBlog = async (req, res) => {
	try {
		const blog = await Blog.findById(req.params.id);

		res.status(200).json({
			status: 'success',
			data: {
				blog,
			},
		});
	} catch (err) {
		res.status(400).json({
			status: 'fail',
			message: err,
		});
	}
};

//Update a blog
exports.updateBlog = async (req, res) => {
	try {
		const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
			runValidators: true,
		});

		res.status(201).json({
			status: 'success',
			data: {
				updatedBlog,
			},
		});
	} catch (err) {
		res.status(400).json({
			status: 'fail',
			message: err,
		});
	}
};

//Delete a blog
exports.deteleBlog = async (req, res) => {
	try {
		await Blog.findByIdAndDelete(req.params.id);

		res.status(204).json({
			status: 'success',
			data: null,
		});
	} catch (err) {
		res.status(400).json({
			status: 'fail',
			message: err,
		});
	}
};
