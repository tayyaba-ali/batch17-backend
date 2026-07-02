import Student from "../models/studentModel.js"
import chalk from "chalk";
import bcrypt from "bcrypt"

export const getHome = (req, res) => {
  res.status(200).json({
    success: true,
    message: "ok",
  });
}

export const getAllStudents = async (req, res) => {

  const studentNames = await Student.find()
  res.status(200).json({
    success: true,
    message: "ok",
    data: studentNames,
  });
}

export const addStudent = async (req, res) => {
  console.log(req.body);

  try {

    const hasedPassword = await bcrypt.hash(req.body.password, 10)
    const result = await Student.create({ ...req.body, password: hasedPassword })
    res.status(201).json({
      success: true,
      message: "data added successfully",
      data: result

    });
  }
  catch (error) {
    console.log(chalk.red(error.message))
  }



}




export const updateStudent = async (req, res) => {
  const updated = await Student.updateOne(req.body, { $set: { city: "karachi" } })

  res.status(200).json({
    success: true,
    message: "data updated successfully",
    data: updated,
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