const multer = require('multer');

//set up multer
const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, '../client/public/uploads/')
    },
    filename: function(req, file, cb){
        cb(null, file.originalname)
    }
})
const upload = multer({storage: storage})

module.exports = upload;