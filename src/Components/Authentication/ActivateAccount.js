import React, { Component } from 'react'
import axios from 'axios';
import queryString from 'query-string';

class ActivateAccount extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        let params = queryString.parse(this.props.location.search);
        axios.get("http://localhost:4000/app/Login/activate-user?userVerifyToken="+params.token)
        .then(response => {
            if(response.data) {
                alert(JSON.stringify(response.data)) 
                window.location = "/Login" 
            } else {
                 alert("Token is expired or invalid token"); 
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

export default ActivateAccount