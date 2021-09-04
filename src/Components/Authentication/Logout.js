import React, { Component } from 'react'
import axios from 'axios';
import Button from '@material-ui/core/Button';



class Logout extends Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
        this.state = {
          navigate: false
        }
    }

    componentDidMount() {
        this.logout();
    }

    logout = () => {
        //localStorage.clear("token");
        localStorage.clear();
        this.setState({navigate:true});
        window.location = '/Login';
    }

    render() {
        return <div></div>;
        //return <Button onClick={this.logout}>Log out</Button>;
    }
}
export default Logout