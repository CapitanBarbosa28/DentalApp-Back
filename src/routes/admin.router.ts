
import { Router } from 'express';
import { activeDoctor, deleteDoctor, deleteSecretary, 
    getDoctorsData, getSecretariesData, createDoctor, createSecretary } from '../controllers/admin.controller';

import { AdminDB } from '../database/admin/adminDB';
export const adminRouter = Router();


const adminDB = new AdminDB();

// DOCTORES

adminRouter.get('/getDoctors', getDoctorsData);
adminRouter.post('/createDoctor', createDoctor );
adminRouter.post('/updateDoctor', () => {} );
adminRouter.post('/deleteDoctor', deleteDoctor);
adminRouter.post('/activeDoctor', activeDoctor);

//SECRETARIAS
adminRouter.get('/getSecretaries', getSecretariesData);
adminRouter.post('/createSecretary', createSecretary );
adminRouter.post('/updateSecretary', () => {} );
adminRouter.post('/deleteSecretary', deleteSecretary);



