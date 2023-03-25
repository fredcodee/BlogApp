const router = require('express').Router();
const Controller = require('../controllers/Controller'); 


router.get('/health-check', Controller.health)
router.post('/admin-register', Controller.registerUser)
router.post('/admin-login', Controller.loginUser)
router.get('/admin-me', Controller.getMe)

//export router
module.exports = router;