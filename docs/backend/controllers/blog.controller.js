const Blog = require("../models/blog.model")

exports.createBlog = async ( req,res)=>{
    try{
        const {title,image,content} = req.body;

        const slug = title.toLowerCase().replace(/ /g,"-")

        const blog = await Blog.create({
            title,
            slug,
            content,
            image
        })
        res.status(200).json(blog);


    }
    catch(err){
            res.status(500).json({ error: err.message });
    }
};

// all blogs
exports.getBlogs =  async (req,res)=>{
    const blogs = await Blog.find().sort({createdAt:-1});
    res.json(blogs)
}

//single blog
exports.getBlog = async (req,res)=>{
    const blog = await Blog.findOne({ slug:req.params.slug});
    res.json(blog)
}