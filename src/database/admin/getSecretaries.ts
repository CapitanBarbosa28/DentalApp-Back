import { makeQuery } from "../connection";
import { IResult } from 'mssql';
import { Roles } from "../../interfaces/RolesEnum";
import { SecretaryDTO } from "../../interfaces/Secretary.interface";

export const getSecretaries = async () : Promise<IResult<SecretaryDTO[]> | undefined > => {
    const data = await makeQuery(`
    SELECT [User].email,[User].[name], [User].profilePic,
		[Role].[name] as role_name,
		[Subsidiary].[name] as subsidiary_name,
		[Secretary].birth_date,
		[Secretary].curp,
		[Secretary].rfc
		from [User] 
		INNER JOIN [Role] ON [User].role_id = [Role].id
		INNER JOIN [Secretary] ON [User].id = [Secretary].user_id
		INNER JOIN [Subsidiary] ON [User].subsidiary_id = [Subsidiary].id
    WHERE [User].role_id=${Roles.Secretary} and [User].is_active = 1
    `);
    return data;
}