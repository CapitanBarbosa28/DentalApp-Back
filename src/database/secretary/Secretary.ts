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
    constructor(){

    }
    //TODO: NECESITO EL NOMBRE DEL PACIENTE Y EL NOMBRE DEL DOCTOR EN ESTA MADRE

    async getAllAppointments(){

        const AllApointments : IResult<Appointment[]> | undefined= await makeQuery(`select Appointment.id,Appointment.[date],Appointment.[status],
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
        if(!AllApointments){
            return "hola" ;
        }
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