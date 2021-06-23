/* --- STATE --- */
export interface LoginState {
    email:string,
    password:string,
    isLogin:boolean,
    errors:{
        email:string,
        password:string,
    }
}
