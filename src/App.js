import React, {Component} from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Home from "./Components/Home";
import NotFound from "./Components/Common/NotFound";
import Login from "./Components/Login";
import Register from "./Components/Register";
import DefalutNavbar from "./Components/Common/DefalutNavbar";
import AccountList from "./Components/Accounts/AccountList";
import AccountEdit from "./Components/Accounts/AccountEdit";

import ReactNotifications from 'react-notifications-component';


class App extends Component {
    renderRouter() {
        return (
            <Switch>
                <Route exact path='/home' component={Home}/>
                <Route exact path='/' component={Home}/>
                <Route exact path='/login' component={Login}/>
                <Route exact path='/signup' component={Register}/>
                <Route exact path='/accounts' component={AccountList}/>
                <Route exact path='/accounts/edit/:id' component={AccountEdit}/>
                <Route exact path='/accounts/add' component={AccountEdit}/>
                <Route component={NotFound}/>
            </Switch>
        )

    }

    render() {
        return (
            <div>
                <ReactNotifications />
                <Router>
                    <DefalutNavbar/>
                    {/*<br/><br/><br/>*/}
                    {/*<PopUpDialog/>*/}
                    <br/><br/><br/>

                    {this.renderRouter()}
                </Router>
            </div>
        );
    }

}

export default App;
