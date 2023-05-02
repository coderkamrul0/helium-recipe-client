import React, { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from '../Firebase/firebase.config';


export const AuthContent = createContext(null);
const auth  = getAuth(app)

const AuthProvider = ({children}) => {

    const user = null;

    const createPasswordUser = (email, password) => {
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const authInfo ={
        user,
        createPasswordUser,
    }

    return (
        <AuthContent.Provider value={authInfo}>
            {children}
        </AuthContent.Provider>
    );
};

export default AuthProvider;