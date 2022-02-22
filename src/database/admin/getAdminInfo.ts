import { makeQuery } from "../connection";
import { IResult } from 'mssql';
import { AdminDTO } from "src/interfaces/Admin.interface";


export const getAdminInfo = async ( email : string, password: string  ): Promise<IResult<AdminDTO> | undefined >  => {
    const data = await makeQuery(`
    SELECT [User].email, [User].[name],[User].profilePic,[Role].[name] as role_name, [Subsidiary].[name] as subsidiary_name 
    from [User]
    INNER JOIN [Role] ON [User].role_id = [Role].id
    INNER JOIN [Subsidiary] ON [User].subsidiary_id = [Subsidiary].id
    WHERE [User].email='${email}' AND [User].password='${password}'`);
    return data;
}
