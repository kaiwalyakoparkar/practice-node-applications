const path = require('path');
const Blog = require(path.join(__dirname,'../models/blogModel.js'));

//Getting all the blogs from the database
exports.getAllBlogs = async (req, res) => {
	try {
		const blogs = await Blog.find();

		res.status(200).json({
			status: "success",
			data : {
				blogs
			}
		});
	} catch(err) {
		res.status(400). json({
			status: "fail",
			message: err
		});
	}
}

//Creating a blog and adding it to the database
exports.createBlog = async (req, res) => {
	try {
		const createdBlog = await Blog.create(req.body);

		res.status(201).json({
			status: "success",
			data: {
				createdBlog
			}
		});
	} catch(err) {
		res.status(400). json({
			status: "fail",
			message: err
		});
	}
}