import mongoose from "mongoose"
import { DB_NAME } from "../constants.js"

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    )
    console.log(
      `mongodb connected!! DB HOST ${connectionInstance.connection.host}`
    )
  } catch (error) {
    console.log("mongodb connection error", error)
    throw error
  }
}

export default connectDB
