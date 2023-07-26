const studentmodel=require("../modles/models")


module.exports.getstudent=async(req,res)=>{
    const student=await studentmodel.find()
    res.send(student)
};

module.exports.savestudent = (req, res) => {
    console.log(req.body);
    // Make sure to properly parse the JSON data from the request body
    const data = req.body;
    studentmodel.create(data)
      .then((students) => {
        res.send(students); // Sending the saved student as the response if needed
      })
      .catch((error) => {
        res.status(500).send("Error saving student data"); // Sending an error response in case of failure
      });
  };

  module.exports.updatestudent = (req, res) => {
    const {id}=req.params;
    const updata=req.body;
    console.log(req.body)
    studentmodel.updateOne({_id:id},{stname:updata.stname,phonenumber:updata.phonenumber,email:updata.email})
    .then((student)=>{
        res.send({success:true,message:"data update successfully"});
    }).catch((error)=>{
        res.status(201).send("error update data");
    });
  };

  module.exports.deletestudent=(req,res)=>{
    const {id}=req.params;
    console.log(res.body)
    studentmodel.deleteOne({_id:id})
    .then((student)=>{
        res.send("Delete successfully ...")
    }).catch((error)=>{
        res.send("Delete unsuccessfully !")
    })
    
  }



