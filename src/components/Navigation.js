import { Navbar , Nav , NavDropdown} from react-bootstrap
import { NavLink } from 'react-router-dom'

export default function Navigation () {
    return (
        <Navbar collapseOnSelect expand="lg" variant="dark" bg="dark">
            <Navbar.bradn>
                Task Manager
            </Navbar.bradn>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" />
                <Nav className='mr-auto'>
                    <Nav.Link as={NavLink} to='/projects'>Projects</Nav.Link>
                    <NavDropdown title='Admin'>
                    <NavDropdown.Item>Users</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Nav>
                    <Nav.link as={NavLink} to='/login'>Iniciar Sesion</Nav.link>
                    <Nav.link as={NavLink} to='/register'>Registrarse</Nav.link>
                    <Nav.link as={NavLink} to='/account'>Mi cuenta</Nav.link>

                </Nav>


        </Navbar>
    )
}