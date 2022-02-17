const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

app.listen("3005", ()=>{
    console.log("Server is runing on port 3005...")
});