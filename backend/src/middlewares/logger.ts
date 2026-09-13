import expressWinston from 'express-winston';
import winston from 'winston';
import path from 'path';

export const requestLogger = expressWinston.logger({
  transports: [
    new winston.transports.File({
      filename: path.join('logs', 'request.log'),
      level: 'info',
    }),
  ],
  format: winston.format.json(),
});

export const errorLogger = expressWinston.errorLogger({
  transports: [
    new winston.transports.File({
      filename: path.join('logs', 'error.log'),
      level: 'error',
    }),
  ],
  format: winston.format.json(),
});
