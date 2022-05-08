import { Response,Request } from "express";
import { Doctor } from "../database/doctor/Doctor";
const path          = require('path');
const { unlink }    = require('fs-extra');
import { FileWithPath } from "file-selector";


const cloudinary    = require('cloudinary');

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key:    process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

interface MulterRequest extends Request {
    file: FileWithPath;
}



//TODO: 
//


export const createAppointment  = async (req : Request, res : Response) => {
    
    const { docEmail, date, status, patient_id, doctor_id, treatment_id, radiography_id} = req.body;
    let doc = new Doctor(docEmail);

    console.log(doc)
    let result = await doc.createAppointment(date, status, patient_id, doctor_id, treatment_id, radiography_id)
    
    if(result){
        console.log(result)
        res.status(200).json({
            ok: true,
            msg : result
        })  
    }


}



export const deleteAppointmentById  = async (req : Request, res : Response) => {
    
    const { docEmail, id_appointment} = req.body;
    let doc = new Doctor(docEmail);

    console.log(doc)
    let result = await doc.deleteAppointmentById(id_appointment)
    
    if(result){
        console.log(result)
        res.status(200).json({
            ok: true,
            msg : result
        })  
    }


}


export const updateAppointment  = async (req : Request, res : Response) => {
    
    const { docEmail, id_appointment, date, status, patient_id, doctor_id, treatment_id, radiography_id} = req.body;
    let doc = new Doctor(docEmail);

    console.log(doc)
    let result = await doc.updateAppointment(id_appointment, date, status, patient_id, doctor_id, treatment_id, radiography_id)
    
    if(result){
        console.log(result)
        res.status(200).json({
            ok: true,
            msg : result
        })  
    }


}


export const viewAppointmentsByIdDoctor  = async (req : Request, res : Response) => {
    
    const { docEmail, doctor_id } = req.body;
    let doc = new Doctor(docEmail);

    console.log(doc)
    let result = await doc.viewAppointmentsByIdDoctor(doctor_id)
    
    if(result){
        console.log(result)
        res.status(200).json({
            ok: true,
            msg : result
        })  
    }


}


export const viewAllPatients  = async (req : Request, res : Response) => {
    
    const { docEmail } = req.body;
    let doc = new Doctor(docEmail);

    console.log(doc)
    let result = await doc.viewAllPatients()
    
    if(result){
        console.log(result)
        res.status(200).json({
            ok: true,
            msg : result
        })  
    }


}


export const viewPatientById  = async (req : Request, res : Response) => {
    
    const { docEmail, patient_id } = req.body;
    let doc = new Doctor(docEmail);

    console.log(doc)
    let result = await doc.viewPatientById(patient_id)
    
    if(result){
        console.log(result)
        res.status(200).json({
            ok: true,
            msg : result
        })  
    }


}


export const viewExpensesByIdDoctor  = async (req : Request, res : Response) => {
    
    const { docEmail, doctor_id } = req.body;
    let doc = new Doctor(docEmail);

    console.log(doc)
    let result = await doc.viewExpensesByIdDoctor(doctor_id)
    
    if(result){
        console.log(result)
        res.status(200).json({
            ok: true,
            msg : result
        })  
    }


}

export const newRadiography  = async (req : Request, res : Response) => {

    const { docEmail, image_name, patient_id } = req.body;
    let doc = new Doctor(docEmail);

    
    const path = await cloudinary.v2.uploader.upload((req as MulterRequest).file.path)
    let result = await doc.newRadiography(image_name, path.url, patient_id)
    console.log(result)
    res.send(result)
}
// public document = async (req: Request, res: Response): Promise<any> => {
//     const documentFile  = (req as MulterRequest).file;
//   }