import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.init';
import {
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    sendPasswordResetEmail,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile,
} from 'firebase/auth'


const auth = getAuth(app)
export const AuthContext = createContext();

const UserContext = ({ children }) => {

    const googleProvider = new GoogleAuthProvider()
    const [user, setUser] = useState({})
    const [loadingUser, setLoadingUser] = useState(true)

    //1. Create User
    const createUser = (email, password) => {
        setLoadingUser(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //2. Update Name
    const updateName = (name) => {
        setLoadingUser(true)
        return updateProfile(auth.currentUser, { displayName: name })
    }

    //3. Login with Password
    const signin = (email, password) => {
        setLoadingUser(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    //4. Reset Password
    const resetPassword = email => {
        setLoadingUser(true)
        return sendPasswordResetEmail(auth, email)
    }

    // 5. Logout
    const logout = () => {
        localStorage.removeItem('life-advice');
        setLoadingUser(true)
        return signOut(auth)
    }

    // 6. Google Signin
    const signInWithGoogle = () => {
        setLoadingUser(true)
        return signInWithPopup(auth, googleProvider)
    }

    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoadingUser(false)
        })

        return () => {
            unsubscribe()
        }
    }, [loadingUser])

    const authInfo = {
        user,
        createUser,
        updateName,
        signin,
        resetPassword,
        logout,
        loadingUser,
        signInWithGoogle,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;