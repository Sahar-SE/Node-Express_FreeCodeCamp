const errorHundler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;

};

module.exports = errorHundler