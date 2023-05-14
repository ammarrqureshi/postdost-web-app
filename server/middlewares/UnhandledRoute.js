import CustomError from '../errors/CustomError.js';

export default function unhandledRoutes(req, res, next) {
  next(
    new CustomError(`Cannot ${req.method} ${req.url}`, 404, 'Not Found Error')
  );
}
