// src/context/AuthProvider.jsx
import React, { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, updateProfile, sendPasswordResetEmail, signOut, onAuthStateChanged, GoogleAuthProvider, getAuth } from "firebase/auth";
import app from "../Firebase/firebase.config";

export const AuthContext = createContext();

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    // check auth state
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
            setUser(loggedUser);
            setLoading(false);
        });
        return () => unsubscribe();
    }, []);
    // register
    const creatUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };
    // login
    const login = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };
    // login with google
    const loginWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    };
    // updateuser
    const updateUser = (profile) => {
        return updateProfile(auth.currentUser, profile);
    };
    // password reset
    const resetPassword = (email) => {
        return sendPasswordResetEmail(auth, email);
    };
    // log out
    const logout = () => {
        setLoading(true);
        return signOut(auth);
    };

    const authData = {
        user,
        setUser,
        loading,
        setLoading,
        creatUser,
        login,
        loginWithGoogle,
        updateUser,
        resetPassword,
        logout,
    };

    return <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
