import { createContext, useState, useEffect } from 'react';

export const UserContext = createContext({});

export const UserProvider = ({ children })=>{
    // const userData = JSON.parse(localStorage.getItem('user'));

    const userData = (typeof JSON.parse(localStorage.getItem('user')) == 'object' ? JSON.parse(localStorage.getItem('user')) : JSON.stringify({}));

    const [user, setUser] = useState(userData);

    const [isLogged, setIsLogged] = useState(!user.hasOwnProperty('name') || user == null ? false : true);

    const setUserAtStorage = (user)=>{
        // Transforma o objeto em string e salva na localStorage
        localStorage.setItem('user', JSON.stringify(user));
    }

    // setUserAtStorage(user);

    const removeUserFromStorage = ()=>{
        localStorage.removeItem('user');
    }

    useEffect(()=>{
        setUser(userData);
    }, []);

    return(
        <UserContext.Provider 
            value={{ user, setUser, setUserAtStorage, removeUserFromStorage, isLogged, setIsLogged }}
        >
            { children }
        </UserContext.Provider>
    );
}