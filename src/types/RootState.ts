import { LoginPage } from 'app/pages/LoginPage/index';
import {CounterState } from "../app/components/slice/types"
// [IMPORT NEW CONTAINERSTATE ABOVE] < Needed for generating containers seamlessly

/* 
  Because the redux-injectors injects your reducers asynchronously somewhere in your code
  You have to declare them here manually
*/
export interface RootState {
  //  loginpage?: LoginPage;
  counter?:CounterState
  // [INSERT NEW REDUCER KEY ABOVE] < Needed for generating containers seamlessly
}
