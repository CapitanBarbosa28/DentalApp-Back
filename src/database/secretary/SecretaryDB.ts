import { DBRequest } from '../../classes/DBRequest';
import { makeQuery } from "../../database/connection";
import { AppointmentDTO } from 'src/interfaces/AppointmentDTO';
import { statusRequest } from 'src/interfaces/StatusRequest';
import { validateQuery } from '../../middlewares/validate-query';

export class SecretaryDB extends DBRequest {
    constructor(){
        super();
    }
    
    async createAppointment( date : Date, status : string, patient_id : number, doctor_id : number, treatment_id : number, radiography_id : number): Promise<statusRequest<any>>{
        const query = `exec newAppointment '${date}','${status}','${patient_id}','${doctor_id}','${treatment_id}','${radiography_id}'` 
        console.log(query)
        const newAppointment = await makeQuery(query);
        const valid = validateQuery(newAppointment);
        if(!valid){
            this.status.result = false;
            this.status.message = 'No se pudo crear la cita';
            return this.status;
        }
        this.status.result = true;
        this.status.message = "Cita creada con éxito";
        this.status.data = newAppointment?.recordset
        return this.status;  
        //return AllApointments;
        
    }
    async getAllAppointments() : Promise<statusRequest<AppointmentDTO[]>>{

        const data = await makeQuery(`select Appointment.id,Appointment.[date],Appointment.[status],
        Radiography.[path] as radioPath,
        Treatment.[description], Treatment.class,
        Patient.[name] as patientName,
        [User].[name] as doctorName
        from Appointment
        INNER JOIN Doctor on Appointment.doctor_id = Doctor.id
        INNER JOIN Patient on Appointment.patient_id = Patient.id
        INNER JOIN Treatment on Appointment.treatment_id = Treatment.id
        INNER JOIN Radiography on Appointment.radiography_id = Radiography.id
        INNER JOIN [User] on doctor_id = [User].id`);

        if(data === undefined){
            this.status.result = false;
            this.status.message = 'No se pudieron traer las citas';
            return this.status;
        }
        this.status.result = true;
        this.status.message = "Citas traidas con éxito";
        this.status.data = data.recordset;
        return this.status;
    }

    async deleteAppointmentById(appointmentId:number) : Promise<statusRequest<any>> {
        const query = `exec deleteAppointment '${appointmentId}'`;
        const deletedAppointment = await makeQuery(query);
        console.log(deletedAppointment)
        const valid = validateQuery(deletedAppointment);
        if(!valid){
            this.status.result = false;
            this.status.message = 'No se pudo eliminar la cita';
            return this.status;
        }
        this.status.result = true;
        this.status.message = "Cita eliminada con éxito";
        return this.status;        
    }
   async updateAppointment(appointmentId:number, status : string, date : Date ) {
        const updatedAppointment = await makeQuery(`
        UPDATE Appointment
            SET [status] = '${status}',
            [date] = '${date}'
            WHERE id = ${appointmentId}
        `);
        if(updatedAppointment === undefined){
            this.status.result = false;
            this.status.message = 'No se pudo actualizar la cita';
            return this.status;
        }
        this.status.result = true;
        this.status.message = "Cita actualizada con éxito";
        return this.status;       
    

       
   }
   async deletePatientById( patientID : number){
       const deletedPatient = await makeQuery(`
       DELETE FROM Patient WHERE id = ${patientID}
       `);
       const valid = validateQuery(deletedPatient);
        if(!valid){
            this.status.result = false;
            this.status.message = 'No se pudo elimnar al paciente';
            return this.status;
        }
        this.status.result = true;
        this.status.message = "Paciente eliminado con éxito";
        return this.status;       
   }
   async getAllPatients(){
        const allPatients = await makeQuery(`
        select * from Patient
        `);
        const valid = validateQuery(allPatients);
        if(!valid){
            this.status.result = false;
            this.status.message = 'No se pudo obtener el listado de pacientes';
            return this.status;
        }
        this.status.result = true;
        this.status.message = "Lista de pacientes obtenida";
        this.status.data = allPatients?.recordset
        return this.status;       
    }
    async updatePatientById(patientID : number, birthDate : Date, curp : string, email : string, name : string){
        const updatedPatient = await makeQuery(`
        UPDATE Patient
        SET [email] = '${email}',
        [curp] = '${curp}',
        [name] = '${name}',
        [birth_date] = '${birthDate}'
        WHERE id = ${patientID}
        `);
        const valid = validateQuery(updatedPatient);
        if(!valid){
            this.status.result = false;
            this.status.message = 'No se pudo actualizar la información del paciente';
            return this.status;
        }
        this.status.result = true;
        this.status.message = "Información del paciente actualizada";
        this.status.data = updatedPatient?.recordset
        return this.status;   
    }

   async updateExpenseById( expenseID : number, money: number, description : string, date : Date  ){
    const updatedExpense = await makeQuery(`
    UPDATE Expenses
        SET [money] = '${money}',
        [date] = '${date}',
        [description] = '${description}'
        WHERE id = ${expenseID}
    `);
    const valid = validateQuery(updatedExpense);
    if(!valid){
        this.status.result = false;
        this.status.message = 'No se pudo actualizar el gasto';
        return this.status;
    }
    this.status.result = true;
    this.status.message = "Gasto actualizada con éxito";
    return this.status;       


   }


}