const mongoose = require("mongoose");
const Posts = require("../Models/Post");



exports.getPosts = async (req, res) => {
    try {
        const posts = await Posts.find({}, { title: true, content: true });

        return res.status(200).json({
            success: true,
            message: "All the posts are fetched successfully",
            posts: posts
        });
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: "Error while fetching posts",
            error: error.message
        });
    }
};

exports.createPost = async(req, res) => {
    try{
        const {title, content, username} = req.body;
        const newPost = await Posts.create({
            title : title,
            content : content,
            userName : username
        });
        return res.status(200).json({
            success : true,
            message : "Post created successfully",
            data : newPost
        })
    }
    catch(error){
        return res.status(400).json({
            success : false,
            message : "Error while creating posts",
            error : error
        })
    }
}

exports.getDataById = async (req, res) => {
    try{
        const id = req.params.id;
        const data = await Posts.findById({
            _id : id
        });
        return res.status(200).json({
            success : true,
            message : "Post is fetched successfully",
            posts : data
        })

    }catch(error){
        return res.status(400).json({
            success : false,
            message : "Error while fetching post",
            error : error
        })
    }
}
exports.deletePost = async (req, res) => {
    try{
        const id = req.params.id;
        const data = await Posts.findByIdAndDelete({
            _id : id
        });
        if(!data){
            return res.status(200).json({
                success : false,
                message : "Data do not exist",
            })
        }
        return res.status(200).json({
            success : true,
            message : "Post deleted successfully",
        })

    }catch(error){
        return res.status(400).json({
            success : false,
            message : "Error while deleting posts",
            error : error
        })
    }
}

exports.updatePost = async(req, res) => {
    try{
        const {title, content, username} = req.body;
        const id = req.params.id;
        const updatedDta = await Posts.findByIdAndUpdate(id,
            {
                title : title,
                content : content,
                userName : username
            }, {
                new : true
            });
        return res.status(200).json({
            success : true,
            message : "Post updated successfully",
            post : updatedDta
        });
    }catch(error){
        return res.status(400).json({
            success : false,
            message : "Error while updating posts",
            error : error
        })
    }
}