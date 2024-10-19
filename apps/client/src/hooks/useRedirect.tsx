import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const useRedirect = (redirectTo: string, condition: boolean) => {
    const navigate = useNavigate();

    useEffect(() => {
        if (condition) {
            navigate(redirectTo);
        }
    }, [condition, redirectTo, navigate]);
};

export default useRedirect;