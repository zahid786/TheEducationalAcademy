import { LogIn, NotLogIn } from "../Action";
let initialState = {
  loginData: "",
  user: false
};
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LogIn:
      console.log("==============Reducer Data======================");
      console.log(action.payload);
      console.log("==================End Reducer==================");
      return { ...state, user: true };
    case NotLogIn:
      return {
        ...state,
        user: false
      };
    default:
      return state;
  }
};
