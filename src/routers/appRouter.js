import { BrowserRouter as Router,Routes ,Route} from 'react-router-dom'
import HomePage from '../components/HomePage'
import LoginPage from '../components/LoginPage'
import RegisterPage from '../components/RegisterPage'
import AccountPage from '../components/AccountPage'
import ProjectsPage from '../components/ProjectsPage'
import ProjectPage from '../components/ProjectPage' 
import UsersPage from '../components/admin/UsersPage'
import NotFoundPage from '../components/NotFoundPage'

 
export default function AppRouter () {
    return (
        <Router>
            <Routes>
                <Route exact path='/' element={<HomePage/>} />
                <Route exact path='/login' element={<LoginPage/>} />
                <Route exact path='/register' element={<RegisterPage/>} />
                <Route exact path='/account' element={<AccountPage/>} />
                <Route exact path='/projects' element={<ProjectsPage/>} />
                <Route exact path='/project/:projectId' element={<ProjectPage/>} />
                <Route exact path='/admin/users' element={<UsersPage/>} />

                <Route path='*' element={<NotFoundPage/>} />
            </Routes>           
        </Router>
    )
}