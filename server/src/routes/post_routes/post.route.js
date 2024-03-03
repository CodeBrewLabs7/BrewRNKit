const express = require('express');
const router = express.Router();

const post_controller = require('./post.controller')
const auth = require('../../middleware/auth');

router.post('/createPost',auth, post_controller.createPost);
router.get('/allPost', auth, post_controller.allPosts);
router.get('/myPosts', auth, post_controller.myPosts);

module.exports = router