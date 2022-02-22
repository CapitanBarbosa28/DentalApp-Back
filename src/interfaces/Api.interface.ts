import { SecretaryDTO } from '../interfaces/Secretary.interface';
import { DoctorDTO, UserDTO } from '../interfaces/Doctor.interface';
import { AdminDTO } from '../interfaces/Admin.interface';
import { IResult } from 'mssql';



export interface TypedRequestBody<T> extends Express.Request {
    body: T;
    //data? : IResult<DoctorDTO | SecretaryDTO | AdminDTO>;
    data? : IResult<UserDTO>;
}
