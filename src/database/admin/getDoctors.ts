import { makeQuery } from "../connection";
import { IResult } from 'mssql';
import { Roles, UserActive } from "../../interfaces/RolesEnum";
import { DoctorDTO } from "../../interfaces/Doctor.interface";

export const getDoctors = async () : Promise<IResult<DoctorDTO> | undefined > => {
    const data = await makeQuery(`
    SELECT [User].email, [User].[name],[User].profilePic,[Role].[name] as role_name, [Subsidiary].[name] as subsidiary_name 
    from [User]
    INNER JOIN [Role] ON [User].role_id = [Role].id
    INNER JOIN [Subsidiary] ON [User].subsidiary_id = [Subsidiary].id 
	WHERE [User].role_id=${Roles.Doctor} and [User].is_active=${UserActive.Active}
    `);
    
    return data;
}