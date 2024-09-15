const mongoose = require("mongoose");

const userInfoSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    middleName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    DOB: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
      required: true,
      lowecase: true,
    },
    address: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const UserInfo = new mongoose.model("UserInfo", userInfoSchema);

module.exports = UserInfo;
