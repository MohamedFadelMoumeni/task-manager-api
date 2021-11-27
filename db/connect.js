const mongoose = require('mongoose');

const connectDB = (url) => {
return mongoose.connect(url)
.then(() => console.log("Successed"))
.catch((e) => console.log(e.message));
}

module.exports = connectDB;