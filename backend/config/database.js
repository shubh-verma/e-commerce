const mongoose = require("mongoose");
const connectDatabase = () => {
  mongoose
    .connect("mongodb://127.0.0.1:27017/ecommerce")
    .then((data) => {
      console.log(`Mongodb connected with server: ${data.connection.host}`);
    })
    .catch((err) => {
      console.log(err);
    });
  // const db = mongoose.connection;
  // return db;
};
module.exports = connectDatabase;
