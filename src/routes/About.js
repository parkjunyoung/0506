import React, { Component } from 'react';
import csrfToken from "../libs/csrfToken";

class About extends Component {
    componentDidMount(){
        console.log(csrfToken);
    }

    render() {
        return (
            <div>About</div>
        );
    }
}
export default About;