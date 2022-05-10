import { makeQuery } from "../connection";
import { IResult } from 'mssql';

import { SecretaryDTO } from "src/interfaces/Secretary.interface";

export const getSecretaryInfo = async ( email : string, password : string ): Promise<IResult<SecretaryDTO> | undefined> => {

    const data = await makeQuery(`SELECT 
    [User].email,[User].id , [User].[name],[User].profilePic,
    [Role].[name] as role_name,
    [Subsidiary].[name] as subsidiary_name,
    Secretary.curp,Secretary.rfc,Secretary.birth_date, [Secretary].id as secretaryID
    from [User]
    INNER JOIN [Role] ON [User].role_id = [Role].id
    INNER JOIN [Subsidiary] ON [User].subsidiary_id = [Subsidiary].id
    INNER JOIN Secretary ON [User].[id] = Secretary.[user_id]
    WHERE [User].email='${email}' AND [User].[password]='${password}'`); 
    return data;
}

