import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import userModel from "../models/user.js";

const secret = 'test';

export const signin = async (req, res) => {
  const { mobile, password } = req.body;

  try {
    const oldUser = await userModel.findOne({ mobile:mobile });

    if (!oldUser) return res.status(404).json({ message: "wrong mobile number or password" });

    const isPasswordCorrect = await bcrypt.compare(password, oldUser.password);

    if (!isPasswordCorrect) return res.status(400).json({ message: "wrong mobile number or password" });

    const token = jwt.sign({ mobile: oldUser.mobile, id: oldUser._id }, secret, { expiresIn: "1h" });

    res.status(200).json({ result: oldUser, token });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const signup = async (req, res) => {

  const { username, password, mobile} = req.body;

  try {
    const oldUser = await  userModel.findOne({ mobile });

    if (oldUser) return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 12);

    const result = await  userModel.create({  mobile:mobile,password: hashedPassword, username:username });

    const token = jwt.sign( { mobile: result.mobile, id: result._id }, secret, { expiresIn: "1h" } );

    res.status(201).json({ result, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
    
    console.log(error);
  }
};