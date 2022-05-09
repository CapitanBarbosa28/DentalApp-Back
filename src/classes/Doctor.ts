import {User} from './User'

export class Doctor extends User {

    public degree: string;
    
    
    
    constructor( email : string, name : string, 
        password : string, birthDate : string , 
        rfc : string, curp : string , degree:string  ){
        super(email, name, password, birthDate, rfc, curp);
        this.degree = degree;

    }

    getInfo() {
        console.log(super.email)
        return {
            email : this.email,
            name : this.name,
            password : this.password,
            rfc : this.rfc,
            birthDate : this.birthDate,
            curp : this.curp,
            degree : this.degree
        }
    }
}