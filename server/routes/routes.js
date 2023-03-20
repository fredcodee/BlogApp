const router = require('express').Router();
const Controller = require('../controllers/Controller'); 



// router.post('/register', Controller.createUser)
// router.post('/login', Controller.loginUser)
// router.post('/logout', Controller.logoutUser)
router.get('/health-check', Controller.health)


//export router
module.exports = router;