import { Error } from 'mongoose';

class BadRequestError extends Error {
  statusCode: number;

  constructor(message = 'Некорректные данные') {
    super(message);
    this.statusCode = 400;
  }
}

export default BadRequestError;
