import Student from "../models/studentModel.js"
import chalk from "chalk";

export const getHome = (req, res) => {
  res.status(200).json({
    success: true,
    message: "ok",
  });
}

export const getAllStudents = async(req, res) => {

 const studentNames =  await Student.collection.find()
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

export const updateStudent = async(req, res) => {
 const updated =await Student.updateOne({studentName:"Nayab"},{studentName:"Tayyaba"})

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