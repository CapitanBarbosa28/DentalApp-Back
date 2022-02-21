import { Response,Request } from "express";
import { TypedRequestBody } from '../interfaces/Api.interface';



import { loginDTO } from "../interfaces/Login.interface";
import { IResult } from 'mssql';

type ret = IResult<loginDTO>;

export const login = async (req : TypedRequestBody<loginDTO>, res : Response) => {
   //const result = await isValidUser(req.body.email);
    //console.log(result)
    const { data } = req;

    console.log('entro al controller');
    console.log(req.data);
    res.status(200).json({
        ok: true,
        msg : data?.recordset
    })
    
    
    
}





