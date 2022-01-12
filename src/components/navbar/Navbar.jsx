import * as React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import logo from '../../assets/logo-3.png';
import "./navbar.css";

const NavbarHeader = () => {
    return (
        <Navbar collapseOnSelect expand="lg" sticky="top">
            <Container>
                <Navbar.Brand href="/">
                    <img id="navbrand" src={logo} alt="dornawing" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto nav-items">
                        <NavLink className="nav-link" to="/" exact activeClassName="active">خانه</NavLink>
                        <NavLink className="nav-link" to="/analyze" exact activeClassName="active">تجزیه و تحلیل</NavLink>
                        <NavLink className="nav-link" to="/bank" exact activeClassName="active">بانک اطلاعاتی</NavLink>
                        <NavLink className="nav-link" to="/country" exact activeClassName="active">کشورها</NavLink>
                        <NavLink className="nav-link" to="/grouping" exact activeClassName="active">دسته بندی</NavLink>
                        <NavLink className="nav-link" to="/groups" exact activeClassName="active">دسته ها</NavLink>
                        <NavLink className="nav-link" to="/countact" exact activeClassName="active">تماس با ما</NavLink>
                    </Nav>
                    <Nav className="nav-login">
                        <Nav.Link href="#deets" className="login">ورود</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes" className="sign-in">
                            ثبت نام
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarHeader;
