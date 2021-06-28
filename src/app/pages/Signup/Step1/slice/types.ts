/* --- STATE --- */
export interface SingupState {
    firstname:string,
    lastname:string,
    email:string,
    password:string,
    errors:{
        firstname:string,
        lastname:string,
        email:string,
        password:string,
    }
}
