import React, {Component} from 'react';
import {Card, Col, Container, Row} from "react-bootstrap";
import axios from "axios";
import {ACCOUNT_FETCH} from "../Actions/types";



class Login extends Component {
    state = {
        username: '',
        password: '',
        logged_in: false,
        errorMsg:''
    };
    componentDidMount() {
        console.log(this.state)
    }

    handle_change = e => {
        const name = e.target.name;
        const value = e.target.value;
        // this.setState({
        //     username: value
        // });
        // console.log(this.state.username)
        this.setState(prevstate => {
            // const newState = {"username":prevstate.username,"password": prevstate.password}
            const newState = { ...prevstate };
            // console.log(newState);
            newState[name] = value;
            // console.log(newState);
            return newState;
        });

    };

    handle_login = (e, username,password) => {
        // console.log(datas);
        e.preventDefault();
        axios.post('http://localhost:8000/auth/jwt/create/', {
            username : username,
            password : password
        })
            .then(res => res.data )
            .then(data => {
                localStorage.setItem('access', data.access);
                localStorage.setItem('refresh', data.refresh);
                localStorage.setItem('user', username);
                this.setState({
                    logged_in: true,
                    displayed_form: '',
                    username: username
                });
            })
            .then(
                axios.get("http://localhost:8000/auth/users/me/",
                    {
                        headers: {
                            "Authorization": `Bearer ${localStorage.getItem('access')}`
                        }
                    }).then(res => res.data)
                    .then(data => {
                        console.log(data)
                        axios.get("http://localhost:8000/auth/users/"+data.id+"/",
                        {
                            headers: {
                                "Authorization": `Bearer ${localStorage.getItem('access')}`
                            }
                        }).then(res => res.data)
                            .then(data => {
                                console.log(data);
                                localStorage.setItem('groups', data.groups);
                            })
                    })
            )

    };
    render() {
        return (
            <Container>
                <Row>
                    <Col md={{ span: 6, offset: 3 }}>
                        <Card bg="light" style={{ marginTop: '60px' }}>
                            <Card.Header><h3>Sign In</h3></Card.Header>
                            <Card.Body>
                                <form onSubmit={e => this.handle_login(e, this.state.username, this.state.password)}>
                                    <div className="form-group">
                                        <label>Username</label>
                                        <input type="username" className="form-control" placeholder="Enter username"
                                               name="username"
                                               value={this.state.username}
                                               onChange={this.handle_change} />
                                    </div>

                                    <div className="form-group">
                                        <label>Password</label>
                                        <input type="password" className="form-control" placeholder="Enter password"
                                               name="password"
                                               value={this.state.password}
                                               onChange={this.handle_change}/>
                                    </div>

                                    <button type="submit" className="btn btn-primary btn-block">Login</button>
                                </form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>

        );
    }
}

export default Login;