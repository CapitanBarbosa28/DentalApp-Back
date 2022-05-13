export const validateQuery = (obj : any) => {
    if((obj || obj.recordset) === undefined || obj.rowsAffected[0] === 0){
        return false;
    }
    return true;
}