import { Route, useNavigate } from 'react-router-dom'

export default function PrivateRoute ({path, element}) {

    const user = null
    const navigate=useNavigate()

    if (!user) {
        navigate('/login')
        return null 
    }

    return (
        <Route path={path} element={element}/>
    )
}