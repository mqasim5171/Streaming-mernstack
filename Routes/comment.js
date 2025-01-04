const express = require('express');
const router = express.Router();
const CommentController = require('../Controllers/comment');

router.post('/addcomment',CommentController.addComment);
router.get('/comment/:VideoId',CommentController.getCommentByVideoId);



module.exports = router;