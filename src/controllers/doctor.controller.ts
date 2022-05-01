import { Response,Request } from "express";
import { Doctor } from "../database/doctor/Doctor";

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

// export const getPatientInfo  = async (req : Request, res : Response) => {

// }


// export const makeAppointment  = async (req : Request, res : Response) => {

// }

// export const getAllAppointmentsByDoctor  = async (req : Request, res : Response) => {

// }


// export const deleteAppointment  = async (req : Request, res : Response) => {

// }