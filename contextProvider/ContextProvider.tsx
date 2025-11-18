// AuthProvider.js
import { auth } from "@/utils/firebase";
import { onAuthStateChanged } from "firebase/auth";
import React, { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext({ user: null });

export const ContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState(null);
    const [initializing, setInitializing] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (usr:any) => {
            setUser(usr);
            if (initializing) setInitializing(false);
        });

        return () => unsubscribe();
    }, []);

    if (initializing) {
        return null; // or a splash/loading screen
    }

    return (
        <AuthContext.Provider value={{ user }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
