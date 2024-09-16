import { AppDispatch } from "./Store";
import { getAuth,signInWithEmailAndPassword,signInWithPopup ,GoogleAuthProvider } from "firebase/auth";
import { loginStart,loginSuccess,loginFailure } from "./SignupSlice";
import app from '../app/config';
import { getCookie, setCookie } from "cookies-next";


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
    const result = await signInWithPopup(auth, provider);
    const { uid, email } = result.user; // Extract only serializable data
    dispatch(loginSuccess({ uid, email }));
  } catch (error: any) {
    dispatch(loginFailure(error.message));
  }
};

