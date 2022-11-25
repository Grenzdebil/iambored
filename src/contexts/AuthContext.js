import React, {useContext, useEffect, useState} from "react";
import {fireBaseAuth} from "../firebase";

const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({children}) {
    const [currentUser, setCurrentUser] = useState()

    function signup(email, password) {
        return fireBaseAuth.createUserWithEmailAndPassword(email, password)
    }

    useEffect(() => {
        return fireBaseAuth.onAuthStateChanged(user => {
            setCurrentUser(user)
        })
    }, [])


    const value = {
        currentUser,
        signup
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}