const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/studentsapi?directConnection=true", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to database💥");
  })
  .catch((err) => {
    console.log("Disconnected database 😥  " + err);
  });
