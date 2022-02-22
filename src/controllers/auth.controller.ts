import { Response,Request } from "express";
import { TypedRequestBody } from '../interfaces/Api.interface';



import { loginREQ } from "../interfaces/Login.interface";
import { IResult } from 'mssql';


export const login = async (req : TypedRequestBody<loginREQ>, res : Response) => {
   
    const { data } = req;
    console.log('entro al controller');
    console.log(req.data);
    console.log(req.data?.recordset[0].email);
    res.status(200).json({
        ok: true,
        msg : data?.recordset
    })
    
    
    
}





