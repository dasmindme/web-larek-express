import { isCelebrateError } from 'celebrate';
import {
  Request, Response, NextFunction, ErrorRequestHandler,
} from 'express';

const errorHandler: ErrorRequestHandler = (
  err,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  if (isCelebrateError(err)) {
    const bodyError = err.details.get('body');
    const message = bodyError?.details[0].message || 'Ошибка валидации данных';
    return res.status(400).json({ message });
  }

  const statusCode = err.statusCode || 500;
  const message = statusCode === 500
    ? 'На сервере произошла ошибка'
    : err.message;

  return res.status(statusCode).json({ message });
};

export default errorHandler;
