const express = require("express")
const cors = require("cors")
const path = require("path")
const mongoose = require("mongoose")
app = express()

mongoose.connect("mongodb://localhost:27017",{dbName:"ClickMe"})

const textSchema = new mongoose.Schema({
    text: String
})

const Text = mongoose.model("text", textSchema)

app.use(express.json())
app.use(cors())
app.use(express.static(path.join(__dirname,'../')));

app.post("/api", async(req,res)=>{
    try {
        await Text.create(req.body)
        res.status(200).json("Good!")
    } catch (error) {
        res.status(500).json("Error!")
    }
})

app.listen(8000,()=>{
    console.log("server is running on port 8000")
})