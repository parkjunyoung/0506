import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar , Nav , NavItem , MenuItem ,NavDropdown} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import axios from 'axios';
 
class Header extends React.Component {
    
    constructor(){
        super();
        this.state = { 
            isLogin : false
        };
    }

    componentDidMount(){


        axios.get('/v1/accounts/status', {
        }).then( (res) => {
            this.setState({
                isLogin: res.data.isLogin
            });
        }).catch( (error) => {
            console.log(error);
        });
    }



    render(){
        const Login = () => {
            return (
                <NavItem>LOGIN</NavItem>
            );
        };

        const Join = () => {
            return (
                <NavItem>JOIN</NavItem>
            );
        };

        const Logout = () => {
            return (
                <NavItem>
                    LOGOUT
                </NavItem>
            );
        };

        return(
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/">Nodejs</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <LinkContainer to="/">
                            <NavItem>Home</NavItem>
                        </LinkContainer>
                        <LinkContainer to="/posts">
                            <NavItem>Posts</NavItem>
                        </LinkContainer>
                        <NavItem>Chat</NavItem>
                        {this.state.isLogin ? 
                            <Logout /> : <Join />
                        }
                        { this.state.isLogin ? "" : <Login /> }
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );  
    }
}
 
export default Header;