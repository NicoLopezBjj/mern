import { BrowserRouter as Router,Routes ,Route} from 'react-router-dom'
import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/RegisterPage'
import AccountPage from '../pages/AccountPage'
import ProjectsPage from '../pages/ProjectsPage'
import ProjectPage from '../pages/ProjectPage' 
import UsersPage from '../pages/admin/UsersPage'
import NotFoundPage from '../pages/NotFoundPage'
import Layout from '../components/Layout'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

export default function AppRouter () {
    return (
        <Router>
        <Layout>
            <Routes>
                <Route exact path='/' element={<HomePage/>} />
                <Route path='/login' element={<PublicRoute/>}>
                    <Route index element={<LoginPage/>} />
                </Route>
                {/* <PublicRoute exact path='/login' element={<LoginPage/>} /> */}
                <Route path='/register' element={<PublicRoute/>}>
                    <Route index element={<RegisterPage/>} />
                </Route>
                {/* <PublicRoute exact path='/register' element={<RegisterPage/>} /> */}
                <Route path='/account' element={<PrivateRoute/>}>
                    <Route index element={<AccountPage/>} />
                </Route>
                <Route path='/projects' element={<PrivateRoute/>}>
                    <Route index element={<ProjectsPage/>} />
                </Route>
                <Route path='/project/:projectId' element={<PrivateRoute/>}>
                    <Route index element={<ProjectPage/>} />
                </Route>
                <Route hasRole="admin" path='/admin/users' element={<PrivateRoute/>}>
                    <Route index element={<UsersPage/>} />
                </Route>
                <Route path='*' element={<NotFoundPage/>} />
            </Routes>
        </Layout>           
    </Router>
    )
}