const axios = require('axios');


const health = (req, res) => {
    return res.json({ 'status': 'ok' })
}



// error handler
function errorHandler(error, res) {
    return res.status(500).json({
        title: 'server error',
        error: error.message
    })
}



module.exports = {
    health,
}