const express = require('express');
const router = express.Router();
const videoController = require('../Controllers/video');
const auth = require('../middleware/authenticaion');

router.post('/video',auth,videoController.uploadVideo);



module.exports = router;