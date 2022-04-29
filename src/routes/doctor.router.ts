import { Router } from 'express';
import { createAppointment, deleteAppointmentById } from '../controllers/doctor.controller';


export const doctorRouter = Router();



doctorRouter.post('/newAppointment', createAppointment );
doctorRouter.delete('/deleteAppointment', deleteAppointmentById );

