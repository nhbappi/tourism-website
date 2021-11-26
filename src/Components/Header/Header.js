import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import "./Header.css"
import Logo from '../../images/logo-1.png';
import { Container, Nav, Navbar } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import { HashLink } from 'react-router-hash-link';


const Header = () => {

    const {user, logOut} = useAuth();
    return (
<Navbar className="bg-light" sticky="top" collapseOnSelect expand="lg">
    <Container>
      <img className="img-part" src={Logo} alt="" />
    <Navbar.Toggle/>
    <Navbar.Collapse className="justify-content-end">
    <Nav.Link className="text-dark fs-5" as={Link} to="/home">Home</Nav.Link>
      <Nav.Link className="text-dark fs-5" as={Link} to="/about">About</Nav.Link>
      <Nav.Link className="text-dark fs-5" as={Link} to="/services">Services</Nav.Link>
      <Nav.Link className="text-dark fs-5" as={Link} to="/addService">Add Services</Nav.Link>
      <Nav.Link className="text-dark fs-5" as={Link} to="/manageAll">Manage All</Nav.Link>
      <Nav.Link className="text-dark fs-5" as={Link} to="/Guider">Guider</Nav.Link>
      {/* <Nav.Link className="text-dark fs-5" as={Link} to="/contact">Contact</Nav.Link> */}
      {user?.email ? (
                            <>
                                <Nav.Link className="text-dark fs-5" as={HashLink} to="/order">
                                    My Orders
                                </Nav.Link>
                                <Navbar.Text>
                                    Signed:
                                    <a href="#login">
                                        {user?.displayName || user.email}
                                    </a>
                                </Navbar.Text>
                                <Nav.Link
                                    onClick={logOut}
                                    as={HashLink}
                                    to="/logIn"
                                    className="login"
                                >
                                    LogOut
                                </Nav.Link>
                            </>
                        ) : (
                            <>
                                <Nav.Link
                                    as={HashLink}
                                    to="/logIn"
                                    className="login"
                                >
                                    LogIn
                                </Nav.Link>
                                <Nav.Link
                                    as={HashLink}
                                    to="/register"
                                    className="register"
                                >
                                    Register
                                </Nav.Link>
                            </>
                        )}
        </Navbar.Collapse>
    </Container>
  </Navbar>
    );
};

export default Header;