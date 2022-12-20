import React, { Component } from 'react'
import '../../App.css';

import TextField from "@material-ui/core/TextField";
import { colors, Container } from '@material-ui/core'
import Button from '@material-ui/core/Button';
import axios from 'axios';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider'

import { Alert, AlertTitle } from '@material-ui/lab';

import ExitToAppIcon from '@material-ui/icons/ExitToApp';


class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            instituteName: '',
            email: '',
            password: '',
            errors: {},
        }
        this.fnCreateAccount = this.fnCreateAccount.bind(this);
        this.HandleChange = this.HandleChange.bind(this);
        this.fnShowError = this.fnShowError.bind(this);
        this.fnValidateRegistrationForm = this.fnValidateRegistrationForm.bind(this);
        
    }

    fnCreateAccount(e) {
        e.preventDefault()
        const isValid = this.fnValidateRegistrationForm();        
        if(!isValid)
        {    
        }
    else{

            const signUpRequest = {
                firstName: this.state.firstName,                
                instituteName: this.state.instituteName,
                email: this.state.email,
                password: this.state.password
            }

            axios.post('http://localhost:4000/app/Register', signUpRequest)
        .then(response => {
            //console.log(response.data);
            alert("Data Inserted Successfully!");
            window.location = "/";
        })        

        this.setState({
            firstName: '',
            email:'',
            instituteName: '',
            password: ''
        })  
        }
    }

   //need commn filed
   HandleChange= (e) =>
   {       
       e.preventDefault();    
    
       console.log(e.target.name);
       console.log(e.target.value);
       this.setState(
           {
               
               [e.target.name] : e.target.value,
           }
       )
   }

    fnShowError(Error) {
        this.state.strErrMessage = Error;
        this.ErrorBox.visible = true;
        document.getElementById("DivErrorContainer").style.display = "block";
    }

    fnValidateRegistrationForm = () => {
        let fields = this.state;
        let errors = {};
        let formIsValid = true;

        if (!fields["firstName"]) {
            formIsValid = false;
            errors["firstName"] = "*Please enter your firstName.";
        }

        if (typeof fields["firstName"] !== "undefined") {
            if (!fields["firstName"].match(/^[a-zA-Z ]*$/)) {
                formIsValid = false;
                errors["firstName"] = "*Please enter alphabet characters only.";
            }
        }

        if (!fields["instituteName"]) {
            formIsValid = false;
            errors["instituteName"] = "*Please enter your institute name.";
        }

        if (typeof fields["instituteName"] !== "undefined") {
            if (!fields["instituteName"].match(/^[a-zA-Z ]*$/)) {
                formIsValid = false;
                errors["instituteName"] = "*Please enter alphabet characters only.";
            }
        }


        if (!fields["email"]) {
            formIsValid = false;
            errors["email"] = "*Please enter your email-ID.";
        }

        if (typeof fields["email"] !== "undefined") {
            var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if (!pattern.test(fields["email"])) {
                formIsValid = false;
                errors["email"] = "*Please enter valid email-ID.";
            }
        }

       /* if (!fields["Phone"]) {
            formIsValid = false;
            errors["Phone"] = "*Please enter your phone no.";
        }

        if (typeof fields["Phone"] !== "undefined") {
            if (!fields["Phone"].match(/^[0-9]{10}$/)) {
                formIsValid = false;
                errors["Phone"] = "*Please enter valid phone no.";
            }
        }*/

        if (!fields["password"]) {
            formIsValid = false;
            errors["password"] = "*Please enter your password.";
        }

        if (typeof fields["password"] !== "undefined") {
            if (!fields["password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
                formIsValid = false;
                errors["password"] = "*Please enter secure and strong password.";
            }
        }

        this.setState({
            errors: errors
        });
        return formIsValid;

    }



    render() {
        return (
            
            <React.Fragment>
                <section class="register-block">
                    <div class="container">
                    <div class="row">
                        <div class="col-md-5 register-sec">
                            <h2 class="text-center">Sign Up For Your Account</h2>
                            <form class="login-form">
                                <div class="form-group">
                                    <label for="exampleInputemail1" class="text-captialize">First Name</label>
                                    <input type="text" class="form-control" placeholder="" 
                                        value={this.state.firstName}
                                        onChange={this.HandleChange}
                                        name="firstName"/>
                                    <div class="DivErrorMessage">{this.state.errors.firstName}</div>
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputemail1" class="text-captialize">Institute Name</label>
                                    <input type="text" class="form-control" placeholder="" 
                                        name="instituteName"
                                        value={this.state.instituteName}
                                        onChange={this.HandleChange}/>
                                    <div class="DivErrorMessage">{this.state.errors.instituteName}</div>
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputemail1" class="text-captialize">email</label>
                                    <input type="text" class="form-control" placeholder="" 
                                        value={this.state.email}
                                        onChange={this.HandleChange}
                                        name="email"/>
                                    <div class="DivErrorMessage">{this.state.errors.email}</div>
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputpassword1" class="text-captialize">password</label>
                                    <input type="password" class="form-control" placeholder="" 
                                        name="password"
                                     value={this.state.password}
                                     onChange={this.HandleChange}/>
                                     <div class="DivErrorMessage">{this.state.errors.password}</div>
                                </div>
                                <Container id="DivErrorContainer" style={{ display: 'none' }}>
                                                <Alert severity="error">{this.state.strErrMessage}</Alert>
                                </Container>
                                <button class="btn btn-register float-right"  onClick={this.fnCreateAccount}>Register</button>
                                <div class='LoginAccountExists'>
                                   Already Have an account <a href="/">Click here to Login</a>
                                </div>
                            </form>
                        </div>
                        <div class="col-md-7 banner-sec2">
                            
                        </div>
                     </div>
                    </div>
                </section>        

                </React.Fragment>
        )
    }
}
export default Register