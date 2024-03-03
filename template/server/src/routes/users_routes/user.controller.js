const UserModel = require("../../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const createUser = async (req, res) => {
  const { email, userName, password } = req.body;
  try {
    let checkUser = await UserModel.findOne({ email: email });

    if (checkUser) {
      throw new Error("User already exists");
    }

    const salt = await bcrypt.genSalt();
    const passowrdHash = await bcrypt.hash(password, salt);

    let result = await UserModel.create({
      ...req.body,
      password: passowrdHash,
    });

    const token = jwt.sign(
      { user_id: result?._id, email },
      process.env.TOKEN_KEY
    );
    result.token = token;

    res.send({
      data: result,
      message: "User created Succesfully...!!!",
      status: true,
    });
  } catch (error) {
    console.log("error raised", error);
    res.status(400).json({ status: false, error: error.message });
  }
};

const loginUser = async (req, res) => {
  const { email, password, fcmToken, deviceType } = req.body;

  try {
    const result = await UserModel.findOne({ email: email });
    if (!!result) {
      let isPasswordValid = await bcrypt.compare(password, result.password);
      console.log("isPasswordValid", isPasswordValid);
      if (!!isPasswordValid) {
        const token = jwt.sign(
          { user_id: result?._id, email },
          process.env.TOKEN_KEY
        );
        if (!!fcmToken) {
          result.fcmToken = fcmToken;
          result.save();
        }
        if (!!deviceType) {
          result.deviceType = deviceType;
          result.save();
        }
        const deepCopy = JSON.parse(JSON.stringify(result));
        deepCopy.token = token;
        delete deepCopy.password;

        console.log("deepCopy", deepCopy);

        res.send({
          data: deepCopy,
          status: true,
        });
      } else {
        throw new Error("Incorrect email or password");
      }
    } else {
      throw new Error("Incorrect email or password");
    }
  } catch (error) {
    res.status(403).json({ status: false, error: error.message });
  }
};

const otpVerify = async (req, res) => {
  const { email, otp } = req.body;
  if (otp === "1234") {
    try {
      const result = await UserModel.findOneAndUpdate(
        { email: email },
        { $set: { validOTP: true } },
        { new: true }
      ).select("-password");
      if (!!result) {
        res.send({
          data: result,
          status: true,
        });
      } else {
        res.status(403).json({ status: false, error: "User not found" });
      }
    } catch (error) {
      res.status(403).json({ status: false, error: error });
    }
  } else {
    res.status(403).json({ status: false, error: "Otp not valid" });
  }
};

const fetchAllUsers = async (req, res) => {
  try {
    let data = await UserModel.find({});
    res.send({
      data: data,
      status: true,
    });
  } catch (error) {
    res.status(403).json({ status: false, error: error });
  }
};

const fetchUserDetails = async (req, res) => {
  const { userId } = req.query;
  try {
    let data = await UserModel.findOne({ _id: userId }).select("-password");
    res.send({
      data: data,
      status: true,
    });
  } catch (error) {
    res.status(403).json({ status: false, error: error });
  }
};

const fetchUsersByIds = async (req, res) => {
  const userIds = req.query.userIds.split(","); // Convert the string to an array
  console.log("userIdsuserIds", userIds);
  try {
    let data = await UserModel.find({ _id: { $in: userIds } }).select(
      "-password"
    );
    res.send({
      data: data,
      status: true,
    });
  } catch (error) {
    console.log("error raised", error);
    res.status(403).json({ status: false, error: error });
  }
};

module.exports = {
  createUser,
  loginUser,
  otpVerify,
  fetchAllUsers,
  fetchUserDetails,
  fetchUsersByIds,
};
