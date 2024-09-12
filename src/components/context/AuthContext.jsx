import React, { createContext, useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Spinner from "./Spinner";

// Create AuthContext
const AuthContext = createContext({});

// Define AuthContextProvider component
function AuthContextProvider({ children }) {
    const [user, setUser] = useState({
        isLoggedIn: false,
        userInfo: {},
    });

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser({
                    isLoggedIn: true,
                    userInfo: user,
                });
            } else {
                setUser({
                    isLoggedIn: false,
                    userInfo: {},
                });
            }
            setLoading(false);
        });

        // Cleanup subscription on unmount
        return () => unsubscribe();
    }, []);

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {loading ? (
                <div className="w-full h-96 flex justify-center items-center">
                    <Spinner />
                </div>
            ) : (
                children
            )}
        </AuthContext.Provider>
    );
}

export { AuthContext, AuthContextProvider };
