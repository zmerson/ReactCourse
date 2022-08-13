import { createContext, useState, useEffect } from 'react'
import {onAuthStateChangedListener, createUserDocumentFromAuth} from '../utils/firebase/firebase.utils'

//the actual value you want to access
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
});

//the actual component
export const UserProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = {currentUser, setCurrentUser};
    
    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user) => {
            if(user){
                createUserDocumentFromAuth(user)
            }
            setCurrentUser(user);
        });
    }, [])
return <UserContext.Provider value={value}>{children}</UserContext.Provider>
//if we wrap the entire app in the usercontext, we can authenticate on every page from our Context
}

