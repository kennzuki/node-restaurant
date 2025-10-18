import express from "express";
import dotenv from "dotenv";
dotenv.config();

import cors from "cors";


const PORT=process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({message:"hello docker is easy"});
});

app.listen(PORT, () => {
    console.log(`running on port ${PORT}`);
});