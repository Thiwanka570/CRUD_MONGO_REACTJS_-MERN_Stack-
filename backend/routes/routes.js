const {Router} = require('express')
const {getstudent,savestudent,updatestudent,deletestudent}=require("../controlers/controler")


const router=Router()
router.get("/get",getstudent);
router.post("/save",savestudent);
router.put("/update/:id",updatestudent);
router.delete("/delete/:id",deletestudent)
module.exports=router;