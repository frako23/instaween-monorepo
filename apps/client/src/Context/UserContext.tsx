import React, { createContext, useState, useContext, ReactNode, useMemo, useEffect, useCallback } from 'react';
import { googleLogout } from '@react-oauth/google';
import { Token, User } from '../utils/types';

interface UserContextProps {
    user: User | null;
    setUser: (user: User | null) => void;
    sign: (param: Token) => void;
    logout: () => void;
}

const UserContext = createContext<UserContextProps | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);


    const sign = useCallback(async (token: Token) => {
        console.log(token);
        localStorage.setItem("token", token.access_token);
        await getUser(token.access_token);
    }, []);

    const logout = useCallback(() => {
        googleLogout();
        localStorage.removeItem('token');
        setUser(null);
    }, []);

    const getUser = async (token: string) => {
        const response = await fetch(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${token}`, {
            headers: {
                Authorization: `Bearer ${token}`,
                Accept: 'application/json'
            }
        });

        if (!response.ok) {
            setUser(null);
            localStorage.removeItem('token');
            return;
        }

        const data = await response.json();
        setUser(data);
    }

    useEffect(() => {
        const fetchUser = async () => {
            const token = localStorage.getItem('token');
            if (token) {
                await getUser(token);
            }
        };

        fetchUser();
    }, []);

    const value = useMemo(() => ({ user, setUser, sign, logout }), [user, setUser, sign, logout]);

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = (): UserContextProps => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useUser must be used within a UserProvider');
    }
    return context;
};