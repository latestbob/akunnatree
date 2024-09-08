import React from 'react';
// import auth from "../../firebase"
import auth from '../firebase';
import { signInWithEmailAndPassword, signOut, sendPasswordResetEmail } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';





export async function handleLogin(email:string, password:string){

    try {
        const userCrendential = await signInWithEmailAndPassword(auth, email, password);

        return userCrendential.user;

        
        // set the login user here
    } catch (error:any) {
        throw new Error(error.message);
      
    }


}


// sign out

export async function handleSignOut(){

    try {
        await signOut(auth);
    } catch (error:any) {
        throw new Error(error.message)
    }

}

// sendresetpassword lin

export async function handleForgotPassword(email:string){

    try {
        await sendPasswordResetEmail(auth,email);
    } catch (error:any) {
        throw new Error(error.message);
    }
}