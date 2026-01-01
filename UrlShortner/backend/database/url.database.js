import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config()
const connectDB=async()=>{
  try {
    await mongoose.connect(process.env.DATABASE);
    console.log("database connected sucessfully")
  } catch (error) {
    console.log("error found in database",error.message)
  }

}
export default connectDB
