import { makeQuery } from "../connection";


export const removeUser = async (userID : number) => {
    const data = await makeQuery(`
    UPDATE [User]
    SET is_active=0
    WHERE [User].id =${userID};
    `);
    return data?.rowsAffected[0];
}