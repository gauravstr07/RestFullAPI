const express = require("express");
require("./db/conn");
const Student = require("./models/students");

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

//Creating a new student
// app.post("/students", (req, res) => {
//   const user = new Student(req.body);
//   user
//     .save()
//     .then(() => {
//       res.status(201).send(user);
//     })
//     .catch((err) => {
//       res.send("Something went wrong on create student " + err);
//     });
// });

//Adding student using AsyncAwait
app.post("/students", async (req, res) => {
  try {
    const user = new Student(req.body);
    const createUser = await user.save();
    res.status(201).send(createUser);
    console.log(createUser);
  } catch (error) {
    res.send("Something went wrong on create student " + error);
  }
});

app.get("/students", async (req, res) => {
  try {
    const studentsData = await Student.find();
    res.send(studentsData);
  } catch (err) {
    res.send("Something went wrong in studentsData " + err);
  }
});

app.get("/", (req, res) => {
  res.send("Hello from expressjs server ");
});

app.listen(port, () => {
  console.log(`Your server running on port: ${port} 🎉`);
});
