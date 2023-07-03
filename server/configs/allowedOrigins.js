const allowedOrigins = [
    process.env.NODE_ENV === 'Production' ? process.env.FRONTEND_ORIGIN_PROD : process.env.FRONTEND_ORIGIN_DEV,
    process.env.NODE_ENV === 'Production' ? process.env.FRONTEND_ORIGIN_PROD : process.env.FRONTEND_ORIGIN_DEV2,
]

module.exports = allowedOrigins;