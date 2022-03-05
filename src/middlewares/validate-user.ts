import { NextFunction, Response } from 'express';
import { IResult } from 'mssql';
import { TypedRequestBody } from '../interfaces/Api.interface';
import { makeQuery } from '../database/connection';
import { loginREQ } from '../interfaces/Login.interface';

import { getDoctorInfo } from '../database/doctor/getDoctorInfo';
import { getSecretaryInfo } from '../database/secretary/getSecretaryInfo';
import { getAdminInfo } from '../database/admin/getAdminInfo';

export const validateUser = async (req: TypedRequestBody<loginREQ>, res: Response,next : NextFunction) => {
    const { email, password } = req.body;

    const valid : IResult<any> | undefined = await makeQuery(`SELECT role_id FROM [User] WHERE email='${email}' AND password='${password}' and is_active=1  `);

    if(valid === undefined || valid.rowsAffected[0] ===0){
        console.log(valid);
        res.status(401).json({
            ok: false,
            msg : "Credenciales incorrectas"
        })
    } else{        
        console.log(' el rol es', valid.recordset[0].role_id);
        switch(valid.recordset[0].role_id){
            case 1: 
                     req.data = await getAdminInfo(email,password);
            break;
            case 2: 
                     req.data = await getDoctorInfo(email,password);
            break;
            case 3:
                     req.data = await getSecretaryInfo(email,password);
            break;

        }
        console.log(req.data)
        next();
        
    }

    

}

