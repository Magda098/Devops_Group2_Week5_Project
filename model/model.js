const mongoose = require('mongoose');


const employeeSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  ekNo: {
    type: String,
    required: true
  },
  email: {
    type: String,
    default: "----"
  }
});

const employeeModel = mongoose.model('employees', employeeSchema);

module.exports = employeeModel;