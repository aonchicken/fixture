import React, {Component} from 'react';
import {Card,Container,Row,Col} from "react-bootstrap";
import axios from "axios";


class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            first_name:'',
            last_name:'',
            groups:[2]
        }
    }
    handle_change = e => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState(prevstate => {
            // const newState = {"username":prevstate.username,"password": prevstate.password}
            const newState = { ...prevstate };
            console.log(newState);
            newState[name] = value;
            console.log(newState);
            return newState;
        });

    };
    handle_signup = (e, datas) => {
        console.log(datas);
        e.preventDefault();
        axios.post('http://localhost:8000/auth/users/',datas)
            .then(res => res.data )
            .then(data => {
                console.log(data)
            });

    };
    render() {
        return (
            <Container>
                <Row>
                    <Col md={{ span: 6, offset: 3 }}>
                        <Card bg="light" style={{ marginTop: '60px' }}>
                            <Card.Header><h3>Sign Up</h3></Card.Header>
                            <Card.Body>
                                <Card.Title>Please Enter Details</Card.Title>

                                <form onSubmit={e => this.handle_signup(e, this.state)}>
                                    <div className="form-group">
                                        <label>Username</label>
                                        <input type="text" className="form-control" placeholder="Username"
                                               name="username"
                                               value={this.state.username}
                                               onChange={this.handle_change}/>
                                    </div>
                                    <div className="form-group">
                                        <label>First name</label>
                                        <input type="text" className="form-control" placeholder="First name"
                                               name="first_name"
                                               value={this.state.first_name}
                                               onChange={this.handle_change}/>
                                    </div>

                                    <div className="form-group">
                                        <label>Last name</label>
                                        <input type="text" className="form-control" placeholder="Last name"
                                               name="last_name"
                                               value={this.state.last_name}
                                               onChange={this.handle_change}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Password</label>
                                        <input type="password" className="form-control" placeholder="Enter password"
                                               name="password"
                                               value={this.state.password}
                                               onChange={this.handle_change}/>
                                    </div>

                                    <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                                    <p className="forgot-password text-right">
                                        Already registered <a href="/">sign in?</a>
                                    </p>
                                </form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>




        );
    }
}

export default Register;