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


// export const getPatientInfo  = async (req : Request, res : Response) => {

// }


// export const makeAppointment  = async (req : Request, res : Response) => {

// }

// export const getAllAppointmentsByDoctor  = async (req : Request, res : Response) => {

// }


// export const deleteAppointment  = async (req : Request, res : Response) => {

// }