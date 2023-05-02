import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from '../Firebase/firebase.config';


export const AuthContent = createContext(null);
const auth  = getAuth(app)

const AuthProvider = ({children}) => {

    const [user , setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createPasswordUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email,password);
    }

    const logOut = () =>{
        setLoading(true)
        return signOut(auth);
    }
    

    useEffect(()=>{
        const unSubscribed = onAuthStateChanged(auth, loggedUser => {
            setUser(loggedUser);
            setLoading(false);
        })
        return () => {
            unSubscribed();
        }
    },[])
    




    const authInfo ={
        user,
        createPasswordUser,
        signInUser,
        logOut,
        loading,
    }

    return (
        <AuthContent.Provider value={authInfo}>
            {children}
        </AuthContent.Provider>
    );
};

export default AuthProvider;