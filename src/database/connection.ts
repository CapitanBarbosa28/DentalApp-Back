import sql from 'mssql';
import dotenv from 'dotenv';


dotenv.config();

 const sqlConfig : sql.config = {
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    server: 'localhost',
    options: {
        trustServerCertificate: true
    }
};


export const makeQuery = async ( query : string ) => {
    try {

     await sql.connect(sqlConfig)
     const result = await sql.query(query);
     //console.dir(result)
     return await result;
    } catch (err) {
     console.log('error en la bd')
     console.log(err)
    }
   }


/*
async function getConection(){
    try {
        const pool = await sql.connect(sqlConfig);
        return pool;
    } catch (error) {
        console.log(error , " Error en la conexión de la bd");
        
    }
}

module.exports= {
    getConection
}
*/