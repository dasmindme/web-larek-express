import { Error } from 'mongoose';

class ServerError extends Error {
  public statusCode: number;

  constructor(message: string) {
    super(message);
    this.statusCode = 500;
  }
}

export default ServerError;
