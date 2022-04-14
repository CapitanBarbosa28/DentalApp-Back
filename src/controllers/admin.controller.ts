import { Response,Request } from "express";
import { getSecretaries } from "../database/admin/getSecretaries";
import { getDoctors } from "../database/admin/getDoctors";
import { removeUser } from "../database/admin/removeUser";




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

export const deleteDoctor = async ( req : Request, res : Response) => {
    const id = req.body.userid;
    const query = await removeUser(id);
    if(query===1){
        res.status(200).json({
            ok: true,
            msg : "Doctor borrado con éxito"
        });
    } else {
        res.status(401).json({
            ok: false,
            msg : "No se pudo eliminar"
        });
    }
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


export const getAllAppointments  = async (req : Request, res : Response) => {

}


