import React, { useState } from 'react';
import { AuthContext } from '../../../contexts/AuthContext';

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const authData = {
        user,
        setUser,
    };

    return <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
