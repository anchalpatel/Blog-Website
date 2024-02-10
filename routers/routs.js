const app = require("express");
const router = app.Router();

const {getPosts, createPost, getDataById, deletePost, updatePost} = require("../Conterolers/Posts");
const { get } = require("../db");

router.get("/", getPosts);
router.post("/", createPost);
router.get("/:id", getDataById);
router.delete("/:id", deletePost);
router.put("/:id", updatePost);


module.exports = router;