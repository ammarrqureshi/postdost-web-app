import bcrypt from 'bcryptjs';
import User from '../models/User.js';
import CustomError from '../errors/CustomError.js';

const signUp = async (req, res) => {
  //Create User in MongoDb
  try {
    const user = await User.create({ ...req.body });
    //Creating Token
    const token = user.createJWT();
    res.status(201).json({ user: { name: user.firstName }, token });
  } catch (error) {
    console.log(error);
  }
};

const logIn = async (req, res) => {
  const { email, password } = req.body;
  try {
    //Finding User by Email
    const user = await User.findOne({ email });
    if (!user) {
      throw new CustomError(
        'Invalid Credentials,User not Found!',
        404,
        'Not Found'
      );
    }
    //Compare the password with hashed password
    const isPasswordCorrect = user.comparePassword(password);
    if (!isPasswordCorrect) {
      throw new CustomError('Invalid Password', 401, 'Unauthenticated Error');
    }
    //Creating Token and Comparing
    const token = user.createJWT();
    res.status(200).json({
      user: { firstName: user.firstName, secondName: user.secondName },
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(401).json({ err: 'Technical issue' });
  }
};

export { signUp, logIn };
