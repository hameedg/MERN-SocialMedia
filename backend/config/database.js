const mongoose = require("mongoose");

exports.connectionReq = () => {
  mongoose
    .connect("mongodb://127.0.0.1:27017/socialmedia")
    .then((con) => {
      console.log(`Database connected ${con.connection.host}`);
    })
    .catch((err) => {
      console.log(err);
    });
};

1;
