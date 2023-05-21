import React, { Children, createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config'
import { GoogleAuthProvider } from "firebase/auth";

export const AuthContext=createContext();
const auth=getAuth(app);

const AuthProvider = ({children}) => {

    const [user,setuser]=useState(null);
    const [loading,setloading]=useState(true);


const createUser=(email,password)=>{
    setloading(true);
    return createUserWithEmailAndPassword(auth, email, password)
}

const signIn=(email,password)=>{
    setloading(true)
    return signInWithEmailAndPassword(auth, email, password)
}

//google sign in
const googleSignin=()=>{
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
    .then(result=>{
        const user=result.user;
        console.log(user);
        setuser(user);
    })
    .catch(error=>{
        console.log(error);
    })
}

//user photo
const updateProfilePhoto = (newPhotoURL, newUsername) => {
    setloading(true);
  
    return updateProfile(auth.currentUser, { photoURL: newPhotoURL,displayName: newUsername })
      .then(() => {
        // Profile photo updated successfully
        const updatedUser = { ...user };
        updatedUser.photoURL = newPhotoURL;
        updatedUser.displayName = newUsername;
        setuser(updatedUser);
        setloading(false);
      })
      .catch((error) => {
        // An error occurred while updating the profile photo
        console.error('Error updating profile photo:', error);
        setloading(false);
      });
  };
  

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


//logout
const logOut=()=>{
    setloading(true);
    signOut(auth)
    .then(() => {
        setuser(null);
        setloading(false);
      })
      .catch((error) => {
        console.error('Error logging out:', error);
        setloading(false);
      });
}
    
const authInfo={
    user,
    loading,
    createUser,
    signIn,
    googleSignin,
    logOut,
    updateProfilePhoto
    
}



    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;