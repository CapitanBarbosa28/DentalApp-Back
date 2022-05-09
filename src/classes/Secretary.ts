import {User} from './User'
export class Secretary extends User {

    
    
    
    constructor( email : string, name : string, 
        password : string, birthDate : string , 
        rfc : string, curp : string ){

        super(email, name, password, birthDate,rfc,curp);

    }
    getInfo() {
        console.log(this.email);
        return {
            email : this.email,
            name : this.name,
            password : this.password,
            rfc : this.rfc,
            birthDate : this.birthDate,
            curp : this.curp,
        }
    }
}