const router = require('express').Router();
const Controller = require('../controllers/appController'); 

router.post('/all-blogs', Controller.getBlogs)
router.get('/single-blog/:title', Controller.getSingleBlog)
router.get('/random-pinned-blogs', Controller.getRandomPinnedBlogs)
router.post('/send-email', Controller.sendEmail)




//export router
module.exports = router;