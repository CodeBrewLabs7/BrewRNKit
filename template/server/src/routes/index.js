const express = require('express');
const rootRouter = express.Router();

const users = require('./users_routes/user.route');
const posts = require('./post_routes/post.route');
const likes = require('./like_routes/like.route');
const comments = require('./comment_routes/comment.route');

rootRouter.use('/', users)
rootRouter.use('/', posts)
rootRouter.use('/', likes)
rootRouter.use('/', comments)

module.exports = rootRouter