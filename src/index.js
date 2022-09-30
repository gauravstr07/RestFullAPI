const express = require("express");
require("./db/conn");
const studentRouter = require("./routers/student");

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(studentRouter);

app.listen(port, () => {
  console.log(`Your server running on port: ${port} 🎉`);
});
