import { DBRequest } from '../../classes/DBRequest';
//import { Doctor } from 'src/classes/Doctor';
import { Doctor } from '@Classes/Doctor';
import { Secretary } from '@Classes/Secretary';
import { makeQuery } from '../connection';
import { statusRequest } from 'src/interfaces/StatusRequest';


export class AdminDB extends DBRequest{
    
    constructor(){
        super();
    }
    // POST
    async createDoctor( doctor : Doctor ) : Promise<statusRequest<any>> {
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
    async deleteDoctor(userID : number) : Promise<statusRequest<any>>  {

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
    async activeDoctor(userID : number) : Promise<statusRequest<any>>  {
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
    async updateDoctor() : Promise<statusRequest<any>>  {
        return this.status;

    }
    // GET
    async getAllDoctors() : Promise<statusRequest<any>>  {
        return this.status;

    }


    async createSecretary(secretary : Secretary) : Promise<statusRequest<any>>  {
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
    async getAllSecretaries() : Promise<statusRequest<any>>  {
        return this.status;

    }
    async updateSecretary() : Promise<statusRequest<any>>  {
        return this.status;

    }
    async deleteSecretary() : Promise<statusRequest<any>>  {
        return this.status;

    }
    
}
