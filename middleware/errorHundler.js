const errorHundler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;
    res.json({title: "Not Found", message: err.message, stackTrace: err.stack});
    res.json({title: "Validation Faild", message: err.message, stackTrace: err.stack});


};

module.exports = errorHundler