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
                <PrivateRoute exact path='/account' element={<AccountPage/>} />
                <PrivateRoute exact path='/projects' element={<ProjectsPage/>} />
                <PrivateRoute exact path='/project/:projectId' element={<ProjectPage/>} />
                <PrivateRoute exact path='/admin/users' element={<UsersPage/>} />
                <Route path='*' element={<NotFoundPage/>} />
            </Routes>
        </Layout>           
    </Router>
    )
}