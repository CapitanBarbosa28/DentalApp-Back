import { Response,Request } from "express";
import { getSecretaries } from "../database/admin/getSecretaries";
import { getDoctors } from "../database/admin/getDoctors";
import { removeUser } from "../database/admin/removeUser";
import { AdminDB } from '../database/admin/adminDB';
import { Doctor } from "../classes/Doctor";
import { Secretary } from "../classes/Secretary";


const adminDB = new AdminDB();

export const getDoctorsData = async (req : Request, res : Response) => {
    const doctorsData = await getDoctors();
    res.status(200).json({
        ok: true,
        msg : doctorsData?.recordset
    })    
}

export const getSecretariesData = async (req : Request, res : Response) => {

    const secretariesData = await getSecretaries();
    res.status(200).json({
        ok: true,
        msg : secretariesData?.recordset
    })
}

// adminDB
export const deleteDoctor = async ( req : Request, res : Response) => {
    const id = req.body.userid;
    const result = await adminDB.deleteDoctor(id);
    if(!result.result){
        res.status(401).json({
            ok: result.result,
            msg : result.message
        });
    }
    res.status(200).json({
        ok: result.result,
        msg : result.message
    });  
}
export const activeDoctor = async ( req : Request, res : Response) => {
    const id = req.body.userid;
    const result = await adminDB.activeDoctor(id);
    if(!result.result){
        res.status(401).json({
            ok: result.result,
            msg : result.message
        });
    }
    res.status(200).json({
        ok: result.result,
        msg : result.message
    });  
}



export const deleteSecretary = async ( req : Request, res : Response) => {
    const id = req.body.userid;
    const query = await removeUser(id);
    if(query===1){
        res.status(200).json({
            ok: true,
            msg : "Secretari@ borrad@ con éxito"
        });
    } else {
        res.status(401).json({
            ok: false,
            msg : "No se pudo eliminar"
        });
    }
}

// adminDB

export const createDoctor = async ( req: Request, res: Response) => {
    const {name, email, password, birthDate, rfc, curp, degree } = req.body;
    const newDoctor = new Doctor(email, name, password, birthDate, rfc, curp, degree);
    console.log(newDoctor);
    const {result, message, data} = await adminDB.createDoctor(newDoctor);
    if(!result){
        res.status(401).json({
            ok: result,
            msg : message
        });
    }
    res.status(200).json({
        ok: result,
        msg : message
    }); 
    
}

export const createSecretary = async (req: Request, res : Response) => {
    const {name, email, password, birthDate, rfc, curp } = req.body;
    const newSecretary = new Secretary(email, name, password, birthDate, rfc, curp);
    const {result, message, data} = await adminDB.createSecretary(newSecretary);
    if(!result){
        res.status(401).json({
            ok: result,
            msg : message
        });
    }
    res.status(200).json({
        ok: result,
        msg : message
    }); 


}


export const getAllAppointments  = async (req : Request, res : Response) => {

}


