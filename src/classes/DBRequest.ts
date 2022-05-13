import { statusRequest } from "src/interfaces/StatusRequest";


export class DBRequest {
    protected status : statusRequest<any>;

    constructor(){
        this.status = {
            result : false
        }

    }
}

