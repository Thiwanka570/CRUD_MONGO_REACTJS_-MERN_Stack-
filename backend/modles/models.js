const mongoose=require("mongoose")

const studentschema=new mongoose.Schema({
    stname:String,
    phonenumber:Number,
    email:String,
},{
    timestamps:true
})

module.exports=mongoose.model("student",studentschema)