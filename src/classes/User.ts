export class User {

    protected email: string;
    protected name : string
    protected password : string;
    protected birthDate : string;
    protected rfc : string;
    protected curp: string;

    constructor( email : string, name : string, 
        password : string, birthDate : string , 
        rfc : string, curp : string ){

        this.email = email;
        this.name = name;
        this.password = password;
        this.birthDate = birthDate;
        this.rfc= rfc;
        this.curp= curp;

    }
}