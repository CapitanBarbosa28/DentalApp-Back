import { IRecordSet, IResult } from "mssql";
import { makeQuery } from "../connection";


type Appointment = {
    id : number,
    date: Date,
    status: string,
    patient_id : number,
    doctor_id : number,
    treatment_id : number,
    radiography_id : number | null


}

export class Secretary{
    email? : string;
    name? : string;
    profilePic? : string;
    role_name? : string;
    subsidiary_name? : string;
    curp? : string;
    rfc? : string;
    birth_date? : Date;
    
    appointments?: IRecordSet<Appointment[]>;
    constructor( email : string){
        this.email = email;
    }

    async getAllAppointments(){
        const AllApointments: IResult<Appointment[]> | undefined = await makeQuery('select * from Appointment');

        this.appointments = AllApointments?.recordset;
        //return AllApointments;
        console.log(this.appointments);
        
    }

    async createPatient( birthDate : Date, curp : string, name : string, patientEmail : string  ){
        const query = `exec newPatient '${birthDate}','${curp}','${name}','${patientEmail}'` 
        console.log(query)
        const newUser = await makeQuery(query);
        //`exec newPatient ${birthDate},${curp},${name},${patientEmail}` 
        console.log(newUser);
        return newUser;
        //return AllApointments;
        
    }

    async newExpense( date : Date, money : number, description: string, doctor_id : number   ){
        const query = `exec newExpense ${doctor_id}, '${description}', ${money}, '${date}'`;
        const newExpense = await makeQuery(query);
        return true;

    }

    async getExpenses(){
        const query = `SELECT * FROM Expenses`;
        const expenses = await makeQuery(query);        
        return expenses?.recordset;

    }

}