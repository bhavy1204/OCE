import express from "express"
import cookieParser from "cookie-parser"
import cors from "cors"

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"]
}));


app.use(express.json({ limit: "5mb", }))
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cookieParser());

export { app }