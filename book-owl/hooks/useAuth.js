import { useEffect, useState } from 'react';
import { safeLocalStorage } from '../helpers';

const useAuth = () => {
    const [token, setToken] = useState(null);

    useEffect(() => {
        setToken(safeLocalStorage.getItem('token'));
    }, []);

    const setAuth = (token) => {
        safeLocalStorage.setItem('token', token);
        setToken(token);
    };

    const removeAuth = () => {
        safeLocalStorage.removeItem('token');
        setToken(null);
    };

    return { token, setAuth, removeAuth };
};

export default useAuth;