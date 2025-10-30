import React, { useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../FireBase/Firebase';
import { signInWithPopup } from 'firebase/auth';
import { GoogleAuthProvider } from 'firebase/auth';

const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
 
    const signInWithEmailFunc = () =>{
        return signInWithPopup(auth, provider)
    }
    

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
           
        });
        return () => unsubscribe();
    }, []);

    const authData = {
        user,
        setUser,
        signInWithEmailFunc
        
    };

    return <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
