import express from "express";
import dotenv from "dotenv";

dotenv.config();


const app = express();

// Middleware Set

app.use(express.json());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Credentials", true);
    next();
});


app.get("/", (req, res) => {
    res.status(200).json("---API Is Running-----");
});


const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is Running On ${port}`);
});