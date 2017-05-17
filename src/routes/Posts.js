import React, { Component } from 'react';
import axios from 'axios';
import getDate from '../libs/getDate';
import PostDetail from '../components/PostDetail';
import { Route, Link } from 'react-router-dom';

class Posts extends Component {

    constructor(){
        super();
        this.state = { 
            posts : []
        };
    }

    componentDidMount(){

        axios.get('/v1/posts/list', {
        }).then( (res) => {
            this.setState({
                posts: res.data.posts
            });
        }).catch( (error) => {
            console.log(error);
        });
    }

    render() {
        return (
            <div>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>제목</th>
                            <th>작성일</th>
                            <th>삭제</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.posts.map( (post, key)=>{  
                        var created_at = getDate(post.created_at);
                        return (
                            <tr key={key}>
                                <td>
                                    <Link to={`/posts/${post.id}`}>
                                        { post.title }
                                    </Link>
                                </td>
                                <td>
                                    { created_at.year } - 
                                    { created_at.month } - 
                                    { created_at.day }
                                </td>
                                <td></td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
                <Route path="/posts/:id" component={PostDetail}/>
            </div>
        );
    }
}
export default Posts;