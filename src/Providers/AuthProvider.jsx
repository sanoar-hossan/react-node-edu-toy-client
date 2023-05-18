import React, { Children, createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import app from '../firebase/firebase.config'
import { GoogleAuthProvider } from "firebase/auth";

export const AuthContext=createContext();
const auth=getAuth(app);

const AuthProvider = ({children}) => {

    const [user,setuser]=useState(null);
    const [loading,setloading]=useState(true);


const createUser=(email,password)=>{
    return createUserWithEmailAndPassword(auth, email, password)
}

const signIn=(email,password)=>{
    return signInWithEmailAndPassword(auth, email, password)
}

//google sign in
const googleSignin=()=>{
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
    .then(result=>{
        const user=result.user;
        console.log(user);
    })
    .catch(error=>{
        console.log(error);
    })
}

//userstate observe
useEffect(()=>{
   const unsubscribe= onAuthStateChanged(auth,currentUser => {
setuser(currentUser);
setloading(false)
    });
    return ()=>{
        return unsubscribe();
    }
},[])

const authInfo={
    user,
    loading,
    createUser,
    signIn,
    googleSignin,
}



    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;