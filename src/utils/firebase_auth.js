import { app } from "./firebase";

import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword  } from "firebase/auth";


const auth = getAuth(app);

export const signInUserFirebase = async (email, password) => {
    return await signInWithEmailAndPassword(auth, email, password).then((userCredential) => { 
        console.log("Successfully signed in user. ", email)
        return userCredential.user;
    }).catch((error) => {
        throw new Error("Error signing in user to firebase. Err: ", error)
    });
}

export const signUpUserFirebase = async (email, password) => {
    return await createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
        console.log("Successfully signed up user. ", email)
        return userCredential.user;
    }).catch((error) => {
        throw new Error("Error signing up user to firebase. Err: ", error)
    });
}