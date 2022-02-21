import { NextFunction, Response } from 'express';
import { IResult } from 'mssql';
import { TypedRequestBody } from '../interfaces/Api.interface';
import { makeQuery } from '../database/connection';
import { loginDTO, loginREQ } from '../interfaces/Login.interface';
import { AdminDTO } from '../interfaces/Admin.interface';
import { DoctorDTO } from '../interfaces/Doctor.interface';
import { SecretaryDTO } from '../interfaces/Secretary.interface';

export const validateUser = async (req: TypedRequestBody<loginREQ>, res: Response,next : NextFunction) => {
    const { email, password } = req.body;

    const valid : IResult<any> | undefined = await makeQuery(`SELECT role_id FROM [User] WHERE email='${email}' AND password='${password}'`);

    if(valid === undefined || valid.rowsAffected[0] ===0){
        console.log(valid);
        res.status(401).json({
            ok: false,
            msg : "Credenciales incorrectas"
        })
    } else{        
        var data: IResult< AdminDTO | DoctorDTO | SecretaryDTO > | undefined;
        console.log(' el rol es', valid.recordset[0].role_id);
        switch(valid.recordset[0].role_id){
            case 1: 
                    data = await makeQuery(`SELECT [User].email, [User].[name],[User].profilePic,[Role].[name] as role_name, [Subsidiary].[name] as subsidiary_name 
                    from [User]
                    INNER JOIN [Role] ON [User].role_id = [Role].id
                    INNER JOIN [Subsidiary] ON [User].subsidiary_id = [Subsidiary].id
                    WHERE [User].email='${email}' AND [User].password='${password}'`);
                    req.data = data;
            break;
            case 2: 
                     data = await makeQuery(` SELECT 
                     [User].email, [User].[name], [User].profilePic,
                     [Role].[name] as role_name,
                     [Subsidiary].[name] as subsidiary_name,
                     [Doctor].degree,[Doctor].curp,[Doctor].rfc,[Doctor].birth_date
                     from [User]
                     INNER JOIN [Role] ON [User].role_id = [Role].id
                     INNER JOIN [Subsidiary] ON [User].subsidiary_id = [Subsidiary].id
                     INNER JOIN Doctor ON [User].[id] = [Doctor].[user_id]
                     WHERE [User].email='${email}' AND [User].[password]='${password}'`);
                     req.data = data;

            break;
            case 3:
                    data = await makeQuery(`SELECT 
                    [User].email, [User].[name],[User].profilePic,
                    [Role].[name] as role_name,
                    [Subsidiary].[name] as subsidiary_name,
                    Secretary.curp,Secretary.rfc,Secretary.birth_date 
                    from [User]
                    INNER JOIN [Role] ON [User].role_id = [Role].id
                    INNER JOIN [Subsidiary] ON [User].subsidiary_id = [Subsidiary].id
                    INNER JOIN Secretary ON [User].[id] = Secretary.[user_id]
                    WHERE [User].email='${email}' AND [User].[password]='${password}'`);
                    req.data = data;


            break;
        }
        
        next();
        console.log(req.data)
    }

    

}

