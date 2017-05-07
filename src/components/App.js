import React, { Component } from 'react';
import Home from '../routes/Home';
import About from '../routes/About';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="container">
                    App
                    <Route path="/" component={Home}/>
                    <Route path="/about" component={About}/>
                </div>
            </Router>
        );
    }
}
export default App;