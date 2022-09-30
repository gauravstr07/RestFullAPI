const express = require('express');
const router = new express.Router();
const Student = require("../models/students");
router.get("/", (req, res) => {
    res.send('Hello Gaurav💖');
})

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
router.post("/students", async (req, res) => {
    try {
      const user = new Student(req.body);
      const createUser = await user.save();
      res.status(201).send(createUser);
      console.log(createUser);
    } catch (error) {
      res.send("Something went wrong on create student " + error);
    }
  });
  
  //Getting Data from MongoDB
  router.get("/students", async (req, res) => {
    try {
      const studentsData = await Student.find();
      res.send(studentsData);
    } catch (err) {
      res.send("Something went wrong in studentsData " + err);
    }
  });
  
  //Getting the indivisible student data using id
  router.get("/students/:id", async (req, res) => {
    try {
      const _id = req.params.id;
      const studentData = await Student.findById(_id);
      if (!studentData) {
        return res.status(404).send("Student Data Not Found 🙌");
      } else {
        res.send(studentData);
      }
    } catch (err) {
      res.send("Something went wrong in _id " + err);
    }
  });
  
  //Update Student by using Id
  router.patch("/students/:id", async (req, res) => {
    try {
      const _id = req.params.id;
      const updateStudent = await Student.findByIdAndUpdate(_id, req.body);
      res.send(updateStudent);
    } catch (err) {
      res.send("Something went wrong in updateStudent " + err);
    }
  });
  
  //Delete a Student by Id
  router.delete("/students/:id", async (req, res) => {
    try {
      const deleteStudent = await Student.findByIdAndDelete(req.params.id);
      if (!req.params.id) {
        return res.status(404).send("Id Not Found");
      }
  
      res.send(deleteStudent);
    } catch (err) {
      res.send("Something went wrong in deleteStudent " + err);
    }
  });

module.exports = router;