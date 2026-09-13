import { celebrate, Joi, Segments } from 'celebrate';

export const validateObjectId = celebrate({
  [Segments.PARAMS]: Joi.object({
    productId: Joi.string().length(24).hex().required(),
  }),
});

export const validateProductBody = celebrate({
  [Segments.BODY]: Joi.object({
    title: Joi.string().min(2).max(30).required(),
    image: Joi.object({
      fileName: Joi.string().required(),
      originalName: Joi.string().required(),
    }).required(),
    category: Joi.string().required(),
    description: Joi.string().optional(),
    price: Joi.number().allow(null),
  }),
});

export const validateProductUpdateBody = celebrate({
  [Segments.BODY]: Joi.object({
    title: Joi.string().min(2).max(30),
    image: Joi.object({
      fileName: Joi.string(),
      originalName: Joi.string(),
    }),
    category: Joi.string(),
    description: Joi.string(),
    price: Joi.number().allow(null),
  }).min(1),
});

export const validateOrderBody = celebrate({
  [Segments.BODY]: Joi.object({
    payment: Joi.string().valid('card', 'online').required(),
    email: Joi.string().email().required(),
    phone: Joi.string()
      .regex(/^((8|\+7)[- ]?)?(\(?\d{3}\)?[- ]?)?[\d\- ]{7,10}$/)
      .required(),
    address: Joi.string().required(),
    total: Joi.number().required(),
    items: Joi.array().items(Joi.string().length(24).hex()).min(1).required(),
  }),
});
