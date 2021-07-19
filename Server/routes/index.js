var express = require('express');
var employee = require('../models/employee')

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
/* Post employee details to the database...*/
router.post('/create',(req,res)=>{
  let empData = {
    employeeName:req.body.employeeName,
    employeeId:req.body.employeeId
  } 

  const Employee =  new employee(empData)

   Employee.save().then(response=>{
    res.status(200).json({ "success": true, "message": "Employee Created successfully", "data": response })
  }).catch((error)=>{
    res.json({ "failure": true, "message": "Error in creating employee",error})

  })
})

router.get('/all',async(req,res)=>{
  let data = await employee.find();
  res.send(data);
})

// router.delete('/:id',async(req,res)=>{
//   let id = req.params.id;

//   let data = await employee.find
// })

router.get('/:id',async(req,res)=>{
  let id = req.params.id;
  let data = await employee.findById(id,(err,success)=>{
    if(err){
      res.send(err);
     }
     else{
       res.send(success);
       
     }
  })

  res.send(data);
})

router.put('/:id',async(req,res)=>{
  let id = req.params.id;
let data = {
  employeeName:req.body.employeeName,
  employeeId:req.body.employeeId
}

let updatedData = await employee.findByIdAndUpdate(id,data,(err,success)=>{
  if(err){
   res.send("Error in Updation");
  }
  else{
    res.send({'message':"Updated Successfully","data":success});
  }
})

res.send(updatedData);
 

})

router.delete('/:id',async(req,res)=>{
  var id = req.params.id;
  let data = await employee.findByIdAndDelete(id, (err, success)=>{
    if(err){
    res.send(err);
    }else{
      res.send(success);
    }
  })
  res.send(data);
})

module.exports = router;
