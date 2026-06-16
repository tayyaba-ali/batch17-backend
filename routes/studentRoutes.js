import express from "express"

import { getHome,getAllStudents,addStudent,updateStudent,deleteStudent } from "../controllers/studentController.js"

import { middleMan } from "../middlewares/middleMan.js"

import { Router } from "express"

const router = Router()
router.get("/",middleMan,getHome)
router.get("/studentNames",middleMan,getAllStudents)
router.post("/studentNames",middleMan,addStudent)
router.put("/studentNames",middleMan,updateStudent)

router.delete("/studentNames",middleMan,deleteStudent)

export default router 