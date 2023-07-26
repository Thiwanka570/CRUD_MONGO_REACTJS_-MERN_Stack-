const express=require("express")
const mangoose=require("mongoose")
require("dotenv").config()
const cors=require("cors")
const { default: mongoose } = require("mongoose")
const app=express()
const routs=require("./routes/routes")

const PORT= process.env.PORT | 5000
app.use(express.json())
app.use(cors())


mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("Mongo DB Connected..."))
.catch((err)=>console.log(err))

app.use("/api",routs);

app.listen(PORT,()=>{
    console.log(`Listning at PORT : ${PORT}`)
})