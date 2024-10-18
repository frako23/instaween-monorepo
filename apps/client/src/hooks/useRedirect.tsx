import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../Context/UserContext';

const useRedirect = (redirectTo: string, condition: boolean) => {
    const navigate = useNavigate();
    const { user } = useUser();
    useEffect(() => {
        console.log(condition, user);
        if (condition && user) {
            navigate(redirectTo);
        }
    }, [condition, user, redirectTo, navigate]);
};

export default useRedirect;