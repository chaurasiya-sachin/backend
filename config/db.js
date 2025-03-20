import mongoose from "mongoose";
import dotenv from "dotenv";

// Load environment variables from .env
dotenv.config();
export const  connectDB = async () =>{

    await mongoose.connect(`${process.env.DB_CONNECTION_STRING}/foodies`).then(()=>console.log("DB Connected"));
   
}


// add your mongoDB connection string above.
// Do not use '@' symbol in your databse user's password else it will show an error.