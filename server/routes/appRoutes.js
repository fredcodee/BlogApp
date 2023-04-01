const router = require('express').Router();
const Controller = require('../controllers/appController'); 

router.post('/all-blogs', Controller.getBlogs)
router.get('/single-blog/:id', Controller.getSingleBlog)
router.get('/random-pinned-blogs', Controller.getRandomPinnedBlogs)




//export router
module.exports = router;