import { BrowserRouter as Router, Route} from 'react-router-dom'
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
            
                <Route exact path='/' component={HomePage} />
                <Route exact path='/login' component={LoginPage} />
                <Route exact path='/register' component={RegisterPage} />
                <Route exact path='/account' component={AccountPage} />
                <Route exact path='/projects' component={ProjectsPage} />
                <Route exact path='/project/:projectId' component={ProjectPage} />
                <Route exact path='/admin/users' component={UsersPage} />

                <Route path='*' component={NotFoundPage} />
            
        </Router>
    )
}