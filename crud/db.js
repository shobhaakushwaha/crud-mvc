const mongoose = require("mongoose");

let db = () => {
  mongoose
    .connect("mongodb://localhost:27017/mydb", {
      useNewUrlparser: true,
      useUnifiedTopology: false,
    })
    .then(() => {
      console.log("connected  with mongodb");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = db;
