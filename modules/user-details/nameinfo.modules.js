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
    fatherName: {
      type: String,
      required: true,
    },
    motherName: {
      type: String,
      required: true,
    },
    DOB: {
      type: String,
      required: true,
    },
    phoneNumber1: {
      type: Number,
      required: true,
    },
    phoneNumber2: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
      required: true,
      lowecase: true,
    },
    address1: {
      type: String,
      required: true,
    },
    address2: {
      type: String,
      required: true,
    },
    salaryMonth: {
      type: String,
      required: true,
    },
    salaryYearly: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const UserInfo = new mongoose.model("UserInfo", userInfoSchema);

module.exports = UserInfo;
