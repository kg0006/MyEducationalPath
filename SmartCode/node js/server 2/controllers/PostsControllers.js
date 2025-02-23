const { Errors } = require("./Errors");

class PostsControllers {
  async getAllPosts(req, res) {
    try {
      const posts = await req.app.locals.services.posts.getAllPosts(
        req.query.page
      );
      res.json(posts);
    } catch (error) {
      Errors.serverError(res, error.message);
    }
  }
  async getPost(req, res) {
    try {
      const { id } = req.params;
      const post = await req.app.locals.services.posts.getPost(id);
      res.json(post);
    } catch (error) {
      Errors.badRequestError(res, error.message);
    }
  }
  async createPost(req, res) {
    try {
      const body = req.body;
      const id = req.userId;
      const post = await req.app.locals.services.posts.createPost({
        ...body,
        user: id,
      });
      res.json(post);
    } catch (error) {
      Errors.badRequestError(res, error.message);
    }
  }
  async likePost(req, res) {
    try {
      const { userId } = req;
      const postId = req.params.id;
      const like = await req.app.locals.services.posts.likePost(userId, postId);
      res.json(like);
    } catch (error) {
      Errors.badRequestError(res, error.message);
    }
  }

  async deletePost(req, res) {
    const deleted = await req.app.locals.services.posts.deletePost(
      req.params.id
    );
    return deleted;
  }
}

module.exports = PostsControllers;
