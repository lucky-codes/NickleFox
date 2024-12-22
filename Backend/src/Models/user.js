const mongoose = require("mongoose");
const validator = require("validator");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const userScheme = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      minLength: 3,
      maxLength: 50,
      lowercase: true,
    },
    lastName: {
      type: String,
      lowercase: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error("Email address is not validate");
        }
      },
    },
    password: {
      type: String,
      required: true,
    },

    address: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },

    phone: {
      type: Number,
    },
  },
  { timestamps: true }
);
userScheme.methods.getJWT = async function () {
  const user = this;
  const secret = process.env.SECRET_KEY;
  const token = jwt.sign({ _id: user._id }, secret, {
    expiresIn: "1d",
  });
  return token;
};
userScheme.methods.validatePassword = async function (passwordInputByUser) {
  const passwordHash = this.password;
  const verifyUSer = await bcrypt.compare(passwordInputByUser, passwordHash);
  return verifyUSer;
};
const user = mongoose.model("user", userScheme);
module.exports = user;
