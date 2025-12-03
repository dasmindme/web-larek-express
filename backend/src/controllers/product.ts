import { Request, Response, NextFunction } from 'express';
import Product from '../models/product';
import BadRequestError from '../errors/bad-request-error';
import ConflictError from '../errors/conflict-error';

export const getProducts = (_req: Request, res: Response, next: NextFunction) => {
  Product.find({})
    .then((products) => res.send({
      items: products,
      total: products.length,
    }))
    .catch((err) => next(err));
};

export const createProduct = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const product = await Product.create(req.body);
    return res.status(201).json(product);
  } catch (error: any) {
    if (error.name === 'ValidationError') {
      return next(new BadRequestError('Ошибка валидации данных при создании товара'));
    }

    if (error.message.includes('E11000')) {
      return next(new ConflictError('Товар с таким названием уже существует'));
    }

    return next(error);
  }
};
