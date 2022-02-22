import { body } from 'express-validator';
import { Router } from 'express';

import { login } from '../controllers/auth.controller';

import { validateUser } from '../middlewares/validate-user';
import { ValidateErrors } from '../middlewares/validate-errors';

export const authRouter = Router();



authRouter.post('/login', 
    body('email').isEmail().withMessage('Parametro invalido'),
    body('password').isLength({min: 3, max :12}).withMessage('Parametro invalido'),
    ValidateErrors,
    validateUser,
    login);


