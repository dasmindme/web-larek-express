import { Router } from 'express';
import { validateProductBody } from '../middlewares/validations';
import { getProducts, createProduct } from '../controllers/product';

const router = Router();
router.get('/', getProducts);
router.post('/', validateProductBody, createProduct);

export default router;
