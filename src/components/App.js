import React, { Component } from 'react';
import Home from '../routes/Home';
import Posts from '../routes/Posts';
import Join from '../routes/Join';
import Login from '../routes/Login';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NoMatch from '../components/NoMatch';
import Header from '../components/Header';

class App extends Component {
    
    render() {
        return (
            <Router>
                <div className="container">
                    <Header />
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/posts" component={Posts}/>
                        <Route path="/accounts/join" component={Join}/>
                        <Route path="/accounts/login" component={Login}/>
                        <Route component={NoMatch}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}
export default App;