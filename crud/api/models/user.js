const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    
  },
  lastName: {
    type: String,
    
  },
  email:{
    type:String,
    
  }
});

module.exports = mongoose.model("User", userSchema);

// const User = new mongoose.model('User',UserSchema);
// module.exports = user;
