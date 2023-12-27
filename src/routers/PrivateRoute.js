import { Outlet, useNavigate } from 'react-router-dom';
import { useEffect, useMemo } from 'react';
import useAuth from '../auth/useAuth';

export default function PrivateRoute ({hasRole: role ,path, element}) {
    const user = useMemo(() => ({id:1, role : "admin"}), []);
    // const { user } = useAuth();
    const navigate = useNavigate();


    useEffect(() => {
        if (!user || user.role !== role) {
            navigate('/login');
        }
    }, [navigate, user, role]);

    return user && user.role === role ? <Outlet path={path} element={element}/> : null;
}