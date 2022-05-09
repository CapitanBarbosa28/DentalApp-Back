import { Doctor } from 'src/classes/Doctor';
import { Secretary } from 'src/classes/Secretary';
import { makeQuery } from '../connection';

type statusRequest = {
    result : boolean,
    message? : string,
    data? : any,
}
export class AdminDB {
    private status : statusRequest = {
        result : false,
    };
    // POST
    async createDoctor( doctor : Doctor ) : Promise<statusRequest> {
        const {name, email, password, birthDate, rfc, curp, degree } = doctor.getInfo();
        
        const data = await makeQuery(` exec create_doctor  '${email}', '${name}', '${password}', '${birthDate}', '${rfc}', '${curp}', '${degree}' `);
        if(data === undefined){
            this.status.result = false;
            this.status.message = 'No se pudo crear el doctor';
            return this.status;
        } else{
            this.status.result = true;
            this.status.message = 'Doctor creado con éxito';
            return this.status;
        }

    }
    // POST
    async deleteDoctor(userID : number) : Promise<statusRequest>  {

        const data = await makeQuery(`
            UPDATE [User]
            SET is_active=0
            WHERE [User].id =${userID};`);
        console.log("este es el bueno", data);
        if(data === undefined){
            this.status.result = false;
            this.status.message = 'No se pudo eliminar el doctordfgdfg';
            return this.status;
        } else{
            this.status.result = true;
            this.status.message = 'Doctor eliminado con éxito';
            return this.status;
        }
        

    }
    // POST
    async activeDoctor(userID : number) : Promise<statusRequest>  {
        const data = await makeQuery(`
            UPDATE [User]
            SET is_active=1
            WHERE [User].id =${userID};`);
        console.log("este es el bueno", data);
        if(data === undefined){
            this.status.result = false;
            this.status.message = 'No se pudo activar el doctor';
            return this.status;
        } else{
            this.status.result = true;
            this.status.message = 'Doctor activado con éxito';
            return this.status;
        }
    }
    //UPDATE
    async updateDoctor() : Promise<statusRequest>  {
        return this.status;

    }
    // GET
    async getAllDoctors() : Promise<statusRequest>  {
        return this.status;

    }


    async createSecretary(secretary : Secretary) : Promise<statusRequest>  {
        const {name, email, password, birthDate, rfc, curp } = secretary.getInfo();
        
        const data = await makeQuery(` exec create_Secretary  '${email}', '${name}', '${password}', '${birthDate}', '${rfc}', '${curp}' `);
        console.log("esta es la data: " + data)
        if(data === undefined){
            this.status.result = false;
            this.status.message = 'No se pudo crear el secretario';
            return this.status;
        } else{
            this.status.result = true;
            this.status.message = 'Secretario creado con éxito';
            return this.status;
        }
        
    }
    async getAllSecretaries() : Promise<statusRequest>  {
        return this.status;

    }
    async updateSecretary() : Promise<statusRequest>  {
        return this.status;

    }
    async deleteSecretary() : Promise<statusRequest>  {
        return this.status;

    }
    
}
