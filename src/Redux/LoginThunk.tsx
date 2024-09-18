import { AppDispatch } from "./Store";
import { getAuth,signInWithEmailAndPassword,signInWithPopup ,GoogleAuthProvider } from "firebase/auth";
import { loginStart,loginSuccess,loginFailure } from "./SignupSlice";
import {app} from '../app/config';
import { getCookie, setCookie } from "cookies-next";
import toast, { Toaster } from "react-hot-toast";


const loginFailed = () => toast.error("Login failed");


export const loginWithEmailPassword = (email: string, password: string) => async (dispatch: AppDispatch) => {
  const auth = getAuth(app);
  dispatch(loginStart());
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);

    const { uid, email: userEmail } = userCredential.user; // Extract only serializable data
    setCookie("token",uid)
    console.log("Hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii");
    
    dispatch(loginSuccess({ uid, email: userEmail }));
   
  } catch (error: any) {
    dispatch(loginFailure(error.message));
  }
};

export const loginWithGoogle = () => async (dispatch: AppDispatch) => {
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  dispatch(loginStart());
  try {
    console.log("Starting login");
    const result = await signInWithPopup(auth, provider);
    console.log("Successful login");
    const { uid, email } = result.user;
    setCookie('token',uid); // Extract only serializable data
    dispatch(loginSuccess({ uid, email }));
  } catch (error: any) {
    console.log("Login failed");
    dispatch(loginFailure(error.message));
    loginFailed();
  }
};

