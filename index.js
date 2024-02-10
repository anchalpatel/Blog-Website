const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require("dotenv").config();

const monggose = require('./db');
const app = express();
const PORT = process.env.PORT || 4000;
const router = require("./routers/routs");

app.use(bodyParser.json());

app.use(cors({
    origin : "http://localhost:4200"
}));

app.use("/api/v1/posts", router);
app.listen(PORT, ()=>{
    console.log("App is running on port no : ", PORT);
   
})

