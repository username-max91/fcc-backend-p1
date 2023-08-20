const dateMW = (req, res, next) => {
    req.time = new Date().toString();
    next();
}

module.exports = dateMW