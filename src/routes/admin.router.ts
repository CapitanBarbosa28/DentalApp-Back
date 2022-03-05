
import { Router } from 'express';
import { deleteDoctor, deleteSecretary, getDoctorsData, getSecretariesData } from '../controllers/admin.controller';


export const adminRouter = Router();



adminRouter.get('/getDoctors', getDoctorsData);


adminRouter.get('/getSecretaries', getSecretariesData);

adminRouter.post('/deleteDoctor', deleteDoctor);


adminRouter.post('/deleteSecretary', deleteSecretary);


