import { Router } from 'express';
import { createAppointment, deleteAppointmentById, updateAppointment, viewAllPatients, viewAppointmentsByIdDoctor, viewExpensesByIdDoctor, viewPatientById } from '../controllers/doctor.controller';


export const doctorRouter = Router();



doctorRouter.post('/newAppointment', createAppointment );
doctorRouter.delete('/deleteAppointment', deleteAppointmentById );
doctorRouter.put('/updateAppointment', updateAppointment );
doctorRouter.get('/viewAppointmentsByIdDoctor', viewAppointmentsByIdDoctor );


doctorRouter.get('/viewAllPatients', viewAllPatients );
doctorRouter.get('/viewPatientById', viewPatientById );

doctorRouter.get('/viewExpensesByIdDoctor', viewExpensesByIdDoctor );




