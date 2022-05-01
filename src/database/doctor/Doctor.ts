import { IRecordSet, IResult } from "mssql";
import { makeQuery } from "../connection";


type Appointment = {
    id_appointment : number,
    date: Date,
    status: string,
    patient_id : number,
    doctor_id : number,
    treatment_id : number,
    radiography_id : number | null
}

export class Doctor{
    // User
    email? : string;
    name? : string;
    profilePic? : string;
    subsidiary_name? : string;

    // Role
    role_name? : string;

    // Doctor
    degree? : string;
    birth_date? : Date;
    rfc? : string;
    curp? : string;

    
    appointments?: IRecordSet<Appointment[]>;
    constructor( email : string){
        this.email = email;
    }

    async createAppointment( date : Date, status : string, patient_id : number, doctor_id : number, treatment_id : number, radiography_id : number  ){
        const query = `exec newAppointment '${date}','${status}','${patient_id}','${doctor_id}','${treatment_id}','${radiography_id}'` 
        console.log(query)
        const newAppointment = await makeQuery(query);
        console.log(newAppointment);
        return newAppointment;
        //return AllApointments;
        
    }


    async deleteAppointmentById( id_appointment : number ){
        const query = `exec deleteAppointment '${id_appointment}'` 
        console.log(query)
        const deleteAppointment = await makeQuery(query);
        console.log(deleteAppointment);
        return deleteAppointment;        
    }


    async updateAppointment( id_appointment : number, date : Date, status : string, patient_id : number, doctor_id : number, treatment_id : number, radiography_id : number  ){
        const query = `exec updateAppointment '${id_appointment}','${date}','${status}','${patient_id}','${doctor_id}','${treatment_id}','${radiography_id}'` 
        console.log(query)
        const updateAppointment = await makeQuery(query);
        console.log(updateAppointment);
        return updateAppointment;
        //return AllApointments;
        
    }


    async viewAppointmentsByIdDoctor( doctor_id : number  ){
        const query = `exec viewAppointmentsByIdDoctor '${doctor_id}'` 
        console.log(query)
        const viewAppointmentsByIdDoctor = await makeQuery(query);
        console.log(viewAppointmentsByIdDoctor);
        return viewAppointmentsByIdDoctor;
        //return AllApointments;
        
    }


    async viewAllPatients(){
        const query = `exec viewAllPatients ` 
        console.log(query)
        const viewAllPatients = await makeQuery(query);
        console.log(viewAllPatients);
        return viewAllPatients;
        //return AllApointments;
        
    }


    async viewPatientById(patient_id : number){
        const query = `exec viewPatientById '${patient_id}'` 
        console.log(query)
        const viewPatientById = await makeQuery(query);
        console.log(viewPatientById);
        return viewPatientById;
        //return AllApointments;
        
    }


    async viewExpensesByIdDoctor(doctor_id : number){
        const query = `exec viewExpensesByIdDoctor '${doctor_id}'` 
        console.log(query)
        const viewExpensesByIdDoctor = await makeQuery(query);
        console.log(viewExpensesByIdDoctor);
        return viewExpensesByIdDoctor;
        //return AllApointments;
        
    }
    // async newExpense( date : Date, money : number, description: string, doctor_id : number   ){
    //     const query = `exec newExpense ${doctor_id}, '${description}', ${money}, '${date}'`;
    //     const newExpense = await makeQuery(query);
    //     return true;

    // }

    // async getExpenses(){
    //     const query = `SELECT * FROM Expenses`;
    //     const expenses = await makeQuery(query);        
    //     return expenses?.recordset;

    // }



    // async getAllAppointments(){
    //     const AllApointments: IResult<Appointment[]> | undefined = await makeQuery('select * from Appointment');

    //     this.appointments = AllApointments?.recordset;
    //     //return AllApointments;
    //     console.log(this.appointments);
        
    // }
}