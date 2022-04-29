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