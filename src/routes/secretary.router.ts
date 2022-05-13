import { Router } from 'express';
import { getAppointments, createPatient, createExpense, getExpenses, updateAppointmentById, deleteAppointmentById, createAppointment, updateExpenseById, deletePatientById, getAllPatients, updatePatientById } from '../controllers/secretary.controller';


export const secretaryRouter = Router();



secretaryRouter.get('/getAppointments', getAppointments );
secretaryRouter.put('/updateAppointmentById', updateAppointmentById );
secretaryRouter.delete('/deleteAppointmentById', deleteAppointmentById );
secretaryRouter.post('/createAppointment', createAppointment );


secretaryRouter.post('/newPatient', createPatient );
secretaryRouter.delete('/deletePatientById', deletePatientById );
secretaryRouter.get('/getPatients', getAllPatients );
// TODO:
secretaryRouter.put('/updatePatientById', updatePatientById );


secretaryRouter.get('/getExpenses', getExpenses );
secretaryRouter.post('/newExpense', createExpense );
secretaryRouter.post('/updateExpenseById', updateExpenseById );

