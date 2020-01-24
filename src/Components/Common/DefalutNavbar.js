import React, {Component} from 'react';
import {Navbar, Nav, Form, Button} from "react-bootstrap";
import {Link} from "react-router-dom";

class DefalutNavbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: 'User'
        };
    }
    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
                    <Navbar.Brand><Link className = "text-success btn"  to="/">FixtureManagement</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Item><Link className="text-light btn" to="/home">Home</Link></Nav.Item>
                            <Nav.Item><Link className="text-light btn" to="/fixtures">Fixtures</Link></Nav.Item>
                            <Nav.Item><Link className="text-light btn" to="/accounts">Accounts</Link></Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                    <Navbar.Collapse className="justify-content-end">
                        &nbsp;&nbsp;
                        <Form inline>
                            <Button variant="info"><Link className="text-light btn" to="/login">Login</Link></Button>
                            &nbsp;&nbsp;
                            <Button variant="danger"><Link  className="text-light btn" to="/logout">Logout</Link></Button>
                            &nbsp;&nbsp;
                            <Button variant="warning"><Link  className="text-light btn" to="/signup">Register</Link></Button>
                        </Form>
                        &nbsp;&nbsp;
                        <Navbar.Text>
                            Signed in as: <Link to="/login">{localStorage.getItem('user')}</Link>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Navbar>

            </div>
        );
    }
}

export default DefalutNavbar;