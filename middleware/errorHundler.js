const { constants } = require("../constants");

const errorHundler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;
    switch (statusCode) {
      case constants.VALIDATION_ERROR:
        res.json({title: "Validation Faild", message: err.message, stackTrace: err.stack});
      break;
      case constants.NOT_FOUND:
        res.json({title: "Not Found", message: err.message, stackTrace: err.stack});
      break;   
        default:
            break;
    }


};

module.exports = errorHundler