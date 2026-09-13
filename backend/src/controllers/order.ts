import { Request, Response, NextFunction } from 'express';
import { faker } from '@faker-js/faker';
import mongoose from 'mongoose';
import Product from '../models/product';
import BadRequestError from '../errors/bad-request-error';

const createOrder = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { total, items } = req.body;

    const isValidIds = items.every((id: string) => mongoose.Types.ObjectId.isValid(id));
    if (!isValidIds) {
      return next(new BadRequestError('Один или несколько ID товаров некорректны'));
    }

    const products = await Product.find({ _id: { $in: items } });

    if (products.length !== items.length) {
      return next(new BadRequestError('Один или несколько товаров не найдены'));
    }

    const unavailable = products.find((p) => p.price === null);
    if (unavailable) {
      return next(new BadRequestError(`Товар "${unavailable.title}" не продаётся`));
    }

    const calculatedTotal = products.reduce((sum, p) => sum + (p.price || 0), 0);
    if (calculatedTotal !== total) {
      return next(new BadRequestError(`Неверная сумма заказа. Ожидалось: ${calculatedTotal}`));
    }

    const orderId = faker.string.uuid();

    return res.status(200).json({
      id: orderId,
      total: calculatedTotal,
    });
  } catch (err) {
    return next(err);
  }
};

export default createOrder;
