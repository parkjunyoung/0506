import React, { Component } from 'react';
import Home from '../routes/Home';
import About from '../routes/About';
import Posts from '../routes/Posts';
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
                        <Route path="/about" component={About}/>
                        <Route path="/posts" component={Posts}/>
                        <Route component={NoMatch}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}
export default App;