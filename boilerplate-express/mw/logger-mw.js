const logger = (req, res, next) => {
    console.log(`${req.method} ${req.path} ${req.time} - ${req.ip} `)
    next()
}

module.exports = logger;