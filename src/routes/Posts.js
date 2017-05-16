import React, { Component } from 'react';
import csrfToken from "../libs/csrfToken";

class Posts extends Component {
    componentDidMount(){
        console.log(csrfToken);
    }

    render() {
        return (
            <div>Posts</div>
        );
    }
}
export default Posts;