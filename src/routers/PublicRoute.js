import { Outlet, useNavigate } from 'react-router-dom';
import { useEffect, useMemo } from 'react';
import useAuth from '../auth/useAuth';

export default function PublicRoute (props) {
    // const user = useMemo(() => ({id:1, name:'John Doe'}), []);
    const { user } = useAuth();
    const navigate = useNavigate();

    if (user) {
        navigate('/projects');
    }

    return <Outlet {...props}/>;

    // useEffect(() => {
    //     if (user) {
    //         navigate('/projects');  
    //     }
    // }, [navigate, user]);

    // return user ? <Outlet path={path} element={element}/> : null;
}