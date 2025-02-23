const express = require("express");
const router = express.Router();
const { checkAuth } = require("../middleware/middleares");
const PostsControllers = require("../controllers/PostsControllers");
const controller = new PostsControllers();

//POSTS ROUTER
router.get("/posts", controller.getAllPosts);
router.post("/post", checkAuth, controller.createPost);
router.get("/post/:id", controller.getPost);
router.post("/post/:id/like", checkAuth, controller.likePost);
router.delete("/post/:id", checkAuth, controller.deletePost);

module.exports = router;
