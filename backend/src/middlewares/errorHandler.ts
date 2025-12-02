import {
  Request, Response, NextFunction, ErrorRequestHandler,
} from 'express';

const errorHandler: ErrorRequestHandler = (
  err,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  const statusCode = err.statusCode || 500;
  const message = statusCode === 500 ? 'На сервере произошла ошибка' : err.message;

  res.status(statusCode).json({ message });
};

export default errorHandler;
