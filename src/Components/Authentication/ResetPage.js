import React, { Component } from 'react'
import axios from 'axios';
import queryString from 'query-string';

class ResetPage extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let params = queryString.parse(this.props.location.search);
        axios.get("http://localhost:8091/api/auth/reset?resetPasswordToken="+params.token)
        .then(response => {
            if(response.data==true) {
                window.location = "/ResetPassword?resetPasswordToken="+params.token;
            } else {
                 alert("Token is expired or invalid token"); 
                 window.location = "/ForgotPassword" 
            }
            
        })
        .catch((error) => {
            console.log(error);
        })
    }

    render() {
        return (
            <div> </div>
        );
    }
}

export default ResetPage