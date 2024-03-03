const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  profileImage: {
    type: String,
    default: 'https://t3.ftcdn.net/jpg/03/64/62/36/360_F_364623623_ERzQYfO4HHHyawYkJ16tREsizLyvcaeg.jpg'
  },
  name: {type: String,required: true},
  email: {type: String,required: true},
  password: {type: String,required: true},
  isDeleted: {type: Boolean,default: false},
  validOTP: {type: Boolean, default: false},
  deviceType: {type: String, default: null},
  token: {type: String, default: null},
})

module.exports = mongoose.model("User", userSchema)



