import { Router } from 'express';
import { getAppointments, createPatient,createExpense, getExpenses } from '../controllers/secretary.controller';


export const secretaryRouter = Router();



secretaryRouter.get('/getAppointments', getAppointments );
secretaryRouter.get('/getExpenses', getExpenses );
secretaryRouter.post('/newPatient', createPatient );
secretaryRouter.post('/newExpense', createExpense );

