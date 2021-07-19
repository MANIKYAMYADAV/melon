const mongoose = require('mongoose');

var employeeSchema = new mongoose.Schema({
   employeeName: { type: String },
   employeeId: { type: String }
  
})

module.exports = mongoose.model("Employees", employeeSchema)

