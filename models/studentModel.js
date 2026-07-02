

import mongoose from "mongoose";
import { Model,Schema } from "mongoose";



const studentSchema = new Schema({
    studentName: String,
    course: String,
    age: Number,
    city: String,
    email: String,
    password : String

})

const Student = mongoose.model("students",studentSchema)

export default Student