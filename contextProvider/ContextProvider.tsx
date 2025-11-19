// AuthProvider.js
import { retrieveData } from "@/utils/asyncStorate";
import React, { createContext, useContext, useEffect, useState } from "react";

type TContex = {
    user: any,
    setUser: any,
    contextLoading: any,
    setContextLoading: any
}

const AuthContext = createContext<TContex | undefined>(undefined);



export const ContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<any>(null);
    const [contextLoading, setContextLoading] = useState(false);


    useEffect(() => {

        const fn = async () => {
            const getUser = await retrieveData("user");
            if (getUser) {
                setUser(JSON.parse(getUser));
            } else {
                setUser(null)
            }
        }

        fn();
        setContextLoading(false);

    }, [contextLoading])


    const data = {
        user,
        setUser,
        contextLoading,
        setContextLoading
    }
    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("The component not inside the context provider");
    };
    return context;
}
