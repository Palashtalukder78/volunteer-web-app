import React from 'react';
import { Container, Nav, Navbar, Stack } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../images/logo.png';
import { signOut, getAuth } from '@firebase/auth';

const Header = () => {
    const { allFirebase } = useAuth();
    const { user, setUser, setIsloading } = allFirebase;
    const auth = getAuth();
    const handleLogOut = () => {
        setIsloading(true)
        signOut(auth).then(() => {
            setUser('');
        }).catch((error) => {
            console.log("Logout korte problem hosse");
        })
            .finally(() => setIsloading(false))
    }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" variant="light">
                <Container>
                    <Navbar.Brand href="#home">
                        <div>
                            <img style={{ width: "180px" }} className="img-fluid" src={logo} alt="" />
                        </div>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Stack direction="horizontal" gap={3}>
                                <NavLink activeStyle={{
                                    fontWeight: "bold",
                                }} style={{ textDecoration: "none", color: "gray", marginLeft: "20px" }} to="/home">
                                    Home
                                </NavLink>
                                <NavLink activeStyle={{
                                    fontWeight: "bold"
                                }} style={{ textDecoration: "none", color: "gray", marginLeft: "20px" }} to="/my-event">
                                    My Events
                                </NavLink>
                                {user?.displayName ?
                                    <div>
                                        <NavLink activeStyle={{
                                            fontWeight: "bold"
                                        }} style={{ textDecoration: "none", color: "gray", marginLeft: "20px" }} to="/dashboard">
                                            Dashboard
                                        </NavLink>
                                        <img style={{ width: "40px", height: "40px", borderRadius: "50%", margin: "0 20px" }} src={user?.photoURL} alt="" />
                                        <button onClick={handleLogOut} className="btn btn-sm btn-dark">Logout</button>
                                    </div>
                                    :
                                    <div>
                                        <NavLink to="/login" style={{ marginLeft: "20px" }}>
                                            <button className="btn btn-sm btn-primary">Login</button>
                                        </NavLink>
                                    </div>
                                }
                            </Stack>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;