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

router.get('/id/:id',async(req,res)=>{
  var id = req.params.id;
  var data = await employee.findById(id);
  res.send(data);
})

router.put('/:id',async(req,res)=>{
  var id = req.params.id;
var data = {
  employeeName:req.body.employeeName,
  employeeId:req.body.employeeId
}

await employee.findByIdAndUpdate(id,data,(err,success)=>{
  if(err){
   res.json("Error in Updation");
  }
  else{
    res.json({'message':"Updated Successfully","data":success});
  }
})
 

})

router.delete('/:id',async(req,res)=>{
  var id = req.params.id;
  await employee.findByIdAndDelete(id, (err, success)=>{
    if(err){
    res.send(err);
    }else{
      res.send(success);
    }
  })
})

module.exports = router;
