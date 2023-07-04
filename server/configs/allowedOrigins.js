const allowedOrigins = [
    process.env.FRONTEND_ORIGIN_DEV,
    process.env.FRONTEND_ORIGIN_DEV2,
    process.env.FRONTEND_ORIGIN_PROD,
    process.env.FRONTEND_ORIGIN_PROD2,
]

module.exports = allowedOrigins;