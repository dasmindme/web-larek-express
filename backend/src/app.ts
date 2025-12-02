import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';
import { errors } from 'celebrate';
import routers from './routers';
import errorHandler from './middlewares/errorHandler';
import { requestLogger, errorLogger } from './middlewares/logger';

dotenv.config();
const { PORT = 3000, DB_ADDRESS = 'mongodb://localhost:27017/weblarek' } = process.env;
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect(DB_ADDRESS);

app.use(requestLogger);

app.use('/', routers);

app.use(errorLogger);

app.use(errors());
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
