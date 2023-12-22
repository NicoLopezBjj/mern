import { Outlet, useNavigate } from 'react-router-dom';
import { useEffect, useMemo } from 'react';

export default function PrivateRoute ({path, element}) {
    const user = useMemo(() => ({id:1, name:'John Doe'}), []);
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            navigate('/login');
        }
    }, [navigate, user]);

    return user ? <Outlet path={path} element={element}/> : null;
}