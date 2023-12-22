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

export default function AppRouter () {
    return (
        <Router>
        <Layout>
            <Routes>
                <Route exact path='/' element={<HomePage/>} />
                <Route exact path='/login' element={<LoginPage/>} />
                <Route exact path='/register' element={<RegisterPage/>} />
                <Route path='/account' element={<PrivateRoute/>}>
                    <Route index element={<AccountPage/>} />
                </Route>
                <Route path='/projects' element={<PrivateRoute/>}>
                    <Route index element={<ProjectsPage/>} />
                </Route>
                <Route path='/project/:projectId' element={<PrivateRoute/>}>
                    <Route index element={<ProjectPage/>} />
                </Route>
                <Route path='/admin/users' element={<PrivateRoute/>}>
                    <Route index element={<UsersPage/>} />
                </Route>
                <Route path='*' element={<NotFoundPage/>} />
            </Routes>
        </Layout>           
    </Router>
    )
}