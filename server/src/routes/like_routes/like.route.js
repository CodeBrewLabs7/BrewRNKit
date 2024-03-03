const express = require('express');
const router = express.Router();

const like_controller = require('./like.controller')
const auth = require('../../middleware/auth');

router.post('/likeDislike',auth, like_controller.likeDislike)
router.get('/postLikes', auth, like_controller.postLikes)


module.exports = router