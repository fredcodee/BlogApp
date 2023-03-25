const router = require('express').Router();
const Controller = require('../controllers/adminController'); 


router.get('/health-check', Controller.health)
router.post('/190023/register', Controller.registerUser)
router.post('/login', Controller.loginUser)
router.get('/me', Controller.getMe)



module.exports = router;