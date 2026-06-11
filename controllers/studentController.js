import Student from "../models/studentModel.js"
import chalk from "chalk";

export const getHome = (req, res) => {
  res.status(200).json({
    success: true,
    message: "ok",
  });
}

export const getAllStudents = (req, res) => {
  res.status(200).json({
    success: true,
    message: "ok",
    data: studentNames,
  });
}

export const addStudent = async (req, res) => {
  console.log(req.body);

  try {
    const result = await Student.create(req.body)
    res.status(201).json({
      success: true,
      message: "data added successfully",
    
    });
  }
  catch (error) {
    console.log(chalk.red(error.message))
  }



}

export const updateStudent = (req, res) => {

  console.log(req.params.indexNo)
  console.log(req.body.studentName3)

  studentNames[req.params.indexNo] = req.body.studentName3

  res.status(200).json({
    success: true,
    message: "data updated successfully",
    data: studentNames,
  });
}

export const deleteStudent = (req, res) => {

  console.log(req.params.indexNo)
  studentNames.splice(req.params.indexNo, 1)
  res.status(200).json({
    success: true,
    message: "data deleted successfully",
    data: studentNames,
  });
}