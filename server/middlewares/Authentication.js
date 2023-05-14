import jwt from 'jsonwebtoken';
import CustomError from '../errors/CustomError.js';

const authentication = async (req, res, next) => {
  //check header
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startWith('Bearer')) {
    throw new CustomError(
      'Authentication Invalid!',
      401,
      'Authentication Error'
    );
  }
  const token = authHeader.split(' ')[1];
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    //ATTACH THE USER TO THE POST ROUTE
    req.user = { userId: payload.userId, firstName: payload.firstName };
    next();
  } catch (error) {
    throw new CustomError(
      'Authentication Invalid!',
      404,
      'Authentication Error'
    );
  }
};

export default authentication;
