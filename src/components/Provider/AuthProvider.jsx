import React, { useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../FireBase/Firebase';

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => unsubscribe();
    }, []);

    const authData = {
        user,
        setUser,
    };

    return <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
