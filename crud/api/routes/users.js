const express = require("express");
const router = express.Router();
// const userModels = require('./api/models/user');
// const user = require('./api/models/user')

const User = require("../models/user");

//create  user route
router.post("/user", async (req, res, next) => {
  const user = await User.create(req.body);
  // console.log(req.body);
  res.status(200).json({
    msg: "user data create successsfully",
    success: true,
    user,
  });
});

//  read user / (get)route
router.get("/user", async (req, res, next) => {
  const users = await User.find();

  //
  res.status(200).json({
    success: true,
    msg: "successfully",
    users,
  });
});

//update  route
router.put("/user/:id", async (req, res, next) => {
  let user = await User.findById(req.params.id);
  user = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    useFindAndModify: false,
    runValidators: true,
  });

  if (!user) {
    return res.status(500).json({
      success: false,
      msg: "user not  not updated",
    });
  }

  res.status(200).json({
    success: true,
    msg: "user updated success",
    user,
  });
});

//delete route
router.delete("/user/:id", async (req, res, next) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    return res.status(500).json({
      success: false,
      msg: "user not found",
    });
  }
  await user.remove();
  res.status(200).json({
    msg: "user deleted successfully",
    user,
  });
});

module.exports = router;
