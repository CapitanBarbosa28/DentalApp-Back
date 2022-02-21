export interface loginREQ  {
    id : number,
    email: string,
    password: string
}


export interface loginDTO {
    id : number,
    is_active : boolean,
    password: string,
    email: string,
    profilePic : string,
    subsidiary_id : number,
    role_id : number;
}

