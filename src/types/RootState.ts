import {LoginState } from "../app/pages/LoginPage/slice/types";
import {SingupState } from "../app/pages/Signup/Step1/slice/types";

// [IMPORT NEW CONTAINERSTATE ABOVE] < Needed for generating containers seamlessly

/* 
  Because the redux-injectors injects your reducers asynchronously somewhere in your code
  You have to declare them here manually
*/
export interface RootState {
  //  loginpage?: LoginPage;
  login?:LoginState,
  singup?:SingupState,
  // [INSERT NEW REDUCER KEY ABOVE] < Needed for generating containers seamlessly
}
