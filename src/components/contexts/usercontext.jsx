import { createContext, useState, useEffect } from 'react';
import { onAuthChangedListener, createUserDocFromAuth } from '../utils/firebase/firebase'

export const UserContext = createContext()

export const UserContextProvider = ({ children }) => {

    const [currentUser, setCurrentUser] = useState(null);
    const value = { currentUser, setCurrentUser };

    useEffect(() => {
        const unsubscribe = onAuthChangedListener((user) => {
            setCurrentUser(user);
            if (user) {
                createUserDocFromAuth(user)
            }
        });
        return unsubscribe;
    }, [])


    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}