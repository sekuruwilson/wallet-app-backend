import express from 'express';
import validate from '../middlewares/validate';
import authValidation from '../validations/auth.validation';
import { authController } from '../controllers';
import auth from '../middlewares/auth';

const router = express.Router();

router.post('/', validate(authValidation.login), authController.login);
router.patch(
  '/',
  auth(),
  validate(authValidation.resetPassword),
  authController.resetPassword
);

export default router;
