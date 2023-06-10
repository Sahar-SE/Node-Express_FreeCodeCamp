const mongoose = require("mongoose");

const  connectDb = async () => {
  try {
    const connect = await mongoose.connect();
  }catch(err) {
    console.log(err);
    process.exit(1);
  }
}

module.exports = connectionDb;