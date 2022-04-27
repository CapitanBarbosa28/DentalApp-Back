import { Router } from 'express';
import { createAppointment } from '../controllers/doctor.controller';


export const doctorRouter = Router();



doctorRouter.post('/newAppoinment', createAppointment );

