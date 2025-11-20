// AuthProvider.js
import Alert from "@/components/alert/Alert";
import { retrieveData } from "@/utils/asyncStorate";
import React, { createContext, useContext, useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

type TContex = {
    user: any,
    setUser: any
    contextLoading: any,
    showAlert: any,
    setContextLoading: any
}

const AuthContext = createContext<TContex | undefined>(undefined);



export const ContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<any>(null);
    const [contextLoading, setContextLoading] = useState(false);
    const [alert, setAlert] = useState<null | { text: any, type: any }>(null);


    const showAlert = ({ text, type }: { text: string, type: string }) => {
        setAlert({ text, type });
        setTimeout(() => setAlert(null), 2000);
    };


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
        showAlert,
        contextLoading,
        setContextLoading
    }
    return (
        <AuthContext.Provider value={data}>
            {alert && (
                <SafeAreaView style={{ position: "absolute", top: 0, left: 0, right: 0, zIndex: 9999 }}>
                    <Alert text={alert.text} type={alert.type} />
                </SafeAreaView>
            )}
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
