import express from 'express';
import validate from '../middlewares/validate';

import auth from '../middlewares/auth';
import categoriesValidation from '../validations/categories.validation';
import categoriesController from '../controllers/categories.controller';

const router = express.Router();

router.post('/', validate(categoriesValidation.createCategory), categoriesController.createCategory);
router.get('/', categoriesController.getCategories);
router.get('/:id', auth(), categoriesController.getCategory);
router.put('/:id', validate(categoriesValidation.updateCategory), categoriesController.updateCategory);
router.delete('/:id', categoriesController.deleteCategory);


export default router;
