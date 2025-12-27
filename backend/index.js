import dotenv from "dotenv"
import connectDB from "./src/db/index.js"
import { app } from "./app.js";


dotenv.config({path : './.env'});

connectDB()
    .then(()=>{
        app.on("error", (err)=>{
            console.error("Express Error, "+ err);
        })
        app.listen(process.env.PORT || 3000 , () =>{
            console.log(`Server up at running at port ${process.env.PORT}`)
        })
    })
    .catch((err)=>{
        console.error(err);
    })