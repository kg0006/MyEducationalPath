class PostsServices {
  constructor(models) {
    this.models = models;
  }
  async getAllPosts(page) {
    let actualPage = 1;

    const totalPostCount = await this.models.users.countDocuments();

    const pageSize = 3;
    const pages = Math.ceil(totalPostCount / pageSize);

    if (page && !isNaN(page) && page > 0) {
      actualPage = Number(page);
    }

    const posts = await this.models.posts
      .find()
      .skip((actualPage - 1) * pageSize)
      .limit(pageSize)
      .populate({ path: "user", select: "-password" })
      .exec();

    const res = {
      page: actualPage,
      posts,
      totalPostCount,
      pages,
    };

    return res;
  }

  async getPost(id) {
    const post = await this.models.posts.findByIdAndUpdate(
      { _id: id },
      { $inc: { views: 1 } },
      { new: true }
    );
    return post;
  }

  async createPost(body) {
    const doc = await this.models.posts(body);
    const post = await doc.save();
    return post;
  }

  async likePost(userId, postId) {
    const post = await this.models.posts.findOne({
      _id: postId,
      likedBy: userId,
    });
    if (post) {
      throw new Error("User has already liked this post");
    }
    const updatedPost = await this.models.posts.findByIdAndUpdate(
      { _id: postId },
      {
        $inc: { likes: 1 },
        $push: { likedBy: userId },
      },
      { new: true }
    );
    return updatedPost;
  }

  async deletePost(id) {
    const deleted = await this.models.posts.findByIdAndDelete(id);
    return deleted;
  }
}

module.exports = PostsServices;
