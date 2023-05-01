const router = require('express').Router();
const Controller = require('../controllers/adminController'); 
const {auth} = require('../middleware/auth');


router.get('/health-check', Controller.health)
router.post('/check-passcode', Controller.checkPasscode)
router.post('/register', Controller.registerUser)
router.post('/login', Controller.loginUser)
router.get('/me',auth, Controller.getMe)
router.get('/all-blogs',auth, Controller.getBlogs)
router.post('/add-blog',auth, Controller.addBlog)
router.post('/filter-blogs',auth, Controller.filterBlogs)
router.post('/delete-blog',auth, Controller.deleteBlog)
router.post('/edit-blog',auth, Controller.updateBlog)
router.get("/pin-blog", auth, Controller.pinBlog)

module.exports = router;