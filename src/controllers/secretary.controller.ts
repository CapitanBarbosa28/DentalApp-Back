import { Response,Request } from "express";
import { Secretary } from "../database/secretary/Secretary";

export const getAppointments = async (req : Request, res : Response) => {
      

    let sec = new Secretary(req.body.email);
    await sec.getAllAppointments();
    //let data = await sec.getAllAppointments();
    console.log(sec)
        res.status(200).json({
            ok: true,
            msg : sec.appointments
        })  
    
}
export const createPatient = async (req : Request, res : Response) => {
    const { secEmail, birthDate, curp, name, patientEmail } = req.body;
    let sec = new Secretary(secEmail);
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

export const createExpense = async (req : Request, res : Response) => {
    const { secEmail, date, money, description, doctor_id } = req.body;
    let sec = new Secretary(secEmail);
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
    const { secEmail } = req.body;
    let sec = new Secretary(secEmail);
    let result = await sec.getExpenses();
    console.log(result)
    res.status(200).json({
        ok: true,
        msg : result
    })  
    
}

