import mongoose from "mongoose"
import {DB_NAME} from "../constant.js"

const connectDB = async () =>{
    try {
        const connectionStatus = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}?retryWrites=true&w=majority`);
        console.log("MongoDB connection success ," + connectionStatus.connection.host);
    } catch (error) {
        console.error("MongoDB connection error =>" , error)
        process.exit(1);
    }
}

export default connectDB