/* --- STATE --- */
export interface LoginState {
    email:string,
    password:string,
    errors:{
        email:string,
        password:string,
    }
}
