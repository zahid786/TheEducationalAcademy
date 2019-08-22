import { db, auth } from "../../../firebase";
import { toast } from "react-toastify";

export const LogIn = "LogIn";
export const NotLogIn = "NotLogIn";

export const login = loginData => {
  //     return dispatch => {
  //         db.collection("loginUsers")
  //         .add(loginData)
  //         .then(function(docRef){
  //             console.log("Document Written With ID",docRef.id);
  //             toast.success(" Data Send In Data Base")

  //         dispatch({
  //             type:LogIn,
  //             payload:loginData
  //         });
  //     })
  //         .catch(function(error){
  //             console.log("Adding Document Error",error);
  //             toast.error("Error Data Not Send In Data Base")
  //         });
  //     };
  // }

  // for SignUP user Create using Auth

  // return dispatch=>{
  //     auth
  //     .createUserWithEmailAndPassword(loginData.email, loginData.pass)
  //     .then(function(data){
  //         console.log(data);

  //     })
  //     .catch(function(error) {
  //         // Handle Errors here.
  //         console.log("error",error);

  //         // var errorCode = error.code;
  //         // var errorMessage = error.message;
  //         // ...
  //       })
  // }
  // Code End here

  // Add data Withot Thunk in Fire Base Code Start Here
  //   db.collection("loginUsers")
  //     .add( loginData )
  //     .then(function(docRef) {
  //       console.log("Document Written With Id", docRef.id);
  //     })
  //     .catch(function(error) {
  //       console.log("error  Adding Document", error);
  //     });
  // Add data Withot Thunk in Fire Base Code end Here

  //   return {
  //     type: LogIn,
  //     payload: loginData
  //   };
  // };

  // User authentication Code Start Here
  return dispatch => {
    auth
      .signInWithEmailAndPassword(loginData.email, loginData.pass)
      .then(function(data) {
        console.log("userobj", data);
        dispatch({
          type: LogIn
        });
      })
      .catch(function(error) {
        // Handle Errors here.
        console.log("Login Error", error);
        dispatch({
          type: NotLogIn
        });
      });
  };
};
