import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
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
    const googleProvider = new GoogleAuthProvider();
    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    const githubProvider = new GithubAuthProvider();
    const githubLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, githubProvider);
    }
    const updateUserProfile = (user, name, photo) => {
        return updateProfile(user, {
          displayName: name,
          photoURL: photo,
        });
      };
      

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
        googleLogin,
        githubLogin,
        updateUserProfile,
    }

    return (
        <AuthContent.Provider value={authInfo}>
            {children}
        </AuthContent.Provider>
    );
};

export default AuthProvider;