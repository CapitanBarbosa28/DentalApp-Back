import { makeQuery } from "../connection";
import { IResult } from 'mssql';
import { DoctorDTO } from "src/interfaces/Doctor.interface";


export const getDoctorInfo = async ( email : string, password: string  ): Promise<IResult<DoctorDTO> | undefined >  => {
    const data = await makeQuery(` SELECT 
    [User].email, [User].[name], [User].profilePic,
    [Role].[name] as role_name,
    [Subsidiary].[name] as subsidiary_name,
    [Doctor].degree,[Doctor].curp,[Doctor].rfc,[Doctor].birth_date
    from [User]
    INNER JOIN [Role] ON [User].role_id = [Role].id
    INNER JOIN [Subsidiary] ON [User].subsidiary_id = [Subsidiary].id
    INNER JOIN Doctor ON [User].[id] = [Doctor].[user_id]
    WHERE [User].email='${email}' AND [User].[password]='${password}'`);
    return data;
}

