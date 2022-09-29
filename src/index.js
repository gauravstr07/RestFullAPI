const express = require("express");
require("./db/conn");
const Student = require("./models/students");

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

//Creating a new student
app.post("/students", (req, res) => {
  const user = new Student(req.body);
  user
    .save()
    .then(() => {
      res.status(201).send(user);
    })
    .catch((err) => {
      res.send("Something went wrong on create student " + err);
    });
});

app.get("/", (req, res) => {
  res.send("Hello from expressjs server ");
});

app.listen(port, () => {
  console.log(`Your server running on port: ${port} 🎉`);
});
