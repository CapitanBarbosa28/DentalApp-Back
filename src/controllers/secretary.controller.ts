import { SecretaryDB } from "../database/secretary/SecretaryDB";
import { Response,Request } from "express";
import { Secretary } from "../database/secretary/Secretary";
const secretaryDB = new SecretaryDB();

export const getAppointments = async (req : Request, res : Response) => {
      

    const { result, message, data } = await secretaryDB.getAllAppointments();
    //let data = await sec.getAllAppointments();
    console.log(data)
    if(result){
        res.status(200).json({
            ok: result,
            msg : message,
            data
        })  
    } else {
        res.status(400).json({
            ok: result,
            msg : message
        })  
    }
    
}
export const createAppointment = async (req : Request, res : Response) => {
      
    const { docEmail, date, status, patient_id, doctor_id, treatment_id, radiography_id} = req.body;

    const { result, message, data } = await secretaryDB.createAppointment(date,status, patient_id, doctor_id, treatment_id, radiography_id);
    if(result){
        res.status(200).json({
            ok: result,
            msg : message,
            data
        })  
    } else {
        res.status(400).json({
            ok: result,
            msg : message
        })  
    }
    
}
export const updateAppointmentById = async (req : Request, res : Response) => {
      
    const { appointmentID, status, date } = req.body;

    const { result, message, data } = await secretaryDB.updateAppointment(appointmentID,status,date);
    //let data = await sec.getAllAppointments();
    console.log(data)
    if(result){
        res.status(200).json({
            ok: result,
            msg : message,
            data
        })  
    } else {
        res.status(400).json({
            ok: result,
            msg : message
        })  
    }
    
}
export const deleteAppointmentById = async (req : Request, res : Response) => {
      
    const { appointmentID } = req.body;

    const { result, message, data } = await secretaryDB.deleteAppointmentById(appointmentID);
    //let data = await sec.getAllAppointments();
    console.log(data)
    if(result){
        res.status(200).json({
            ok: result,
            msg : message,
            data
        })  
    } else {
        res.status(400).json({
            ok: result,
            msg : message
        })  
    }
    
}




export const createPatient = async (req : Request, res : Response) => {
    const { birthDate, curp, name, patientEmail } = req.body;
    let sec = new Secretary();
    //console.log(req.body)
    console.log(sec)
    let result = await sec.createPatient(birthDate,curp,name,patientEmail)
    
    //let data = await sec.getAllAppointments();
    if(result){
        console.log(result)
        res.status(200).json({
            ok: true,
            msg : result
        })  
    }
    
}
export const getAllPatients = async (req : Request, res : Response) => {
    const { result, message, data } = await secretaryDB.getAllPatients();
    if(result){
        res.status(200).json({
            ok: result,
            msg : message,
            data
        })  
    } else {
        res.status(400).json({
            ok: result,
            msg : message
        })  
    }
}
export const updatePatientById = async (req : Request, res : Response) => {
    const { patientID, birthDate, curp, name, patientEmail } = req.body;

    const { result, message, data } = await secretaryDB.updatePatientById(patientID, birthDate, curp, patientEmail, name);
    if(result){
        res.status(200).json({
            ok: result,
            msg : message,
            data
        })  
    } else {
        res.status(400).json({
            ok: result,
            msg : message
        })  
    }
}
export const deletePatientById = async (req : Request, res : Response) => {
    const { patientID } = req.body;
    const { result, message } = await secretaryDB.deletePatientById(patientID);
    if(result){
        res.status(200).json({
            ok: result,
            msg : message,
        })  
    } else {
        res.status(400).json({
            ok: result,
            msg : message
        })  
    }
}

export const createExpense = async (req : Request, res : Response) => {
    const { date, money, description, doctor_id } = req.body;
    let sec = new Secretary();
    let result = await sec.newExpense(date,money,description,doctor_id);
    console.log("entra al controller");
    if(result){
        console.log(result)
        res.status(200).json({
            ok: true
        })  
    }
    
}

export const getExpenses = async (req : Request, res : Response) => {
    let sec = new Secretary();
    let result = await sec.getExpenses();
    console.log(result)
    res.status(200).json({
        ok: true,
        msg : result
    })  
    
}

export const updateExpenseById = async (req : Request, res : Response) => {
    const { expenseID, money, description, date  } = req.body;
    const { result, message } = await secretaryDB.updateExpenseById(expenseID, money, description, date);
    if(result){
        res.status(200).json({
            ok: result,
            msg : message,
        })  
    } else {
        res.status(400).json({
            ok: result,
            msg : message
        })  
    }
}


