import { Response,Request } from "express";
import { TypedRequestBody } from '../interfaces/Api.interface';



import { loginREQ } from "../interfaces/Login.interface";
import { IResult } from 'mssql';


export const login = async (req : TypedRequestBody<loginREQ>, res : Response) => {
   
    const { data } = req;
    console.log('entro al controller');
    res.status(200).json({
        ok: true,
        user : data?.recordset[0],
    })
    
    
    
}





