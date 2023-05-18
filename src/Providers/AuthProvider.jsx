import React, { Children, createContext, useState } from 'react';
import { getAuth } from "firebase/auth";

const AuthContext=createContext();
const auth=getAuth(app)

const AuthProvider = ({children}) => {

    const [user,setuser]=useState(null);
    const [loading,setloading]=useState(true);

const authInfo={
    user,
    loading,
}



    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;