import { Router } from 'express';
import { createAppointment, deleteAppointmentById, updateAppointment, viewAppointmentsByIdDoctor } from '../controllers/doctor.controller';


export const doctorRouter = Router();



doctorRouter.post('/newAppointment', createAppointment );
doctorRouter.delete('/deleteAppointment', deleteAppointmentById );
doctorRouter.put('/updateAppointment', updateAppointment );
doctorRouter.get('/viewAppointmentsByIdDoctor', viewAppointmentsByIdDoctor );



