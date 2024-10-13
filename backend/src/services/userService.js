import userModel from '../models/userModel.js';
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


export const register = async ({ userName, email, password }) => {
  const findUser = await userModel.findOne({ email });

  if (findUser) {
    return { data: "User already exists!", statusCode: 400 };
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new userModel({
    email,
    password: hashedPassword,
    userName,
  });
  await newUser.save();

  return { data: generateJWT({ userName, email }), statusCode: 200 };
};

export const login = async ({ email, password }) => {
  const findUser = await userModel.findOne({ email });

  if (!findUser) {
    return { data: "Incorrect email or password!", statusCode: 400 };
  }

  const passwordMatch = await bcrypt.compare(password, findUser.password);
  if (passwordMatch) {
    return {
      data: generateJWT({
        email,
        userName: findUser.userName,
      }),
      statusCode: 200,
    };
  }

  return { data: "Incorrect email or password!", statusCode: 400 };
};

const generateJWT = (data) => {
  return jwt.sign(data, process.env.JWT_SECRET || '');
};