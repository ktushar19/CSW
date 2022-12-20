import React, { Component } from 'react'
import '../../App.css';
import axios from 'axios';
import TextField from "@material-ui/core/TextField";
import { colors, Container } from '@material-ui/core'
import Button from '@material-ui/core/Button';
import Dashboard from '../scp-school-admin-dashboard/Dashboard';

import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider'
import { Alert, AlertTitle } from '@material-ui/lab';

import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import DoneIcon from '@material-ui/icons/Done'

class Login extends Component {

    constructor(props) {
        super(props);
        this.fnLogin = this.fnLogin.bind(this);
        this.fnValidateLoginForm = this.fnValidateLoginForm.bind(this);
        this.HandleChange = this.HandleChange.bind(this);
        this.fnShowError = this.fnShowError.bind(this);
        this.state = {
            fields: {},
            errors: {},
        }
    }
    HandleChange(e) {
        let fields = this.state.fields;
        fields[e.target.name] = e.target.value;
        this.setState({
            fields
        });
    }

    fnShowError(Error) {
        this.state.strErrMessage = Error;
        document.getElementById("DivErrorContainer").style.display = "block";
    }


    fnLogin = (e) => {
        e.preventDefault();
        if (this.fnValidateLoginForm()) {
            let fields = {};
            fields["email"] = "";
            fields["password"] = "";
            this.setState({ fields: fields });

            const signInRequest = {
                email: this.state.fields.email,
                password: this.state.fields.password
            }

            axios.post('http://localhost:4000/app/', signInRequest)
                .then(response => {
                    console.log(response.data);
                    //localStorage.setItem("jwtToken",response.data.token);
                    localStorage.setItem("email",response.data.email);
                   alert("Login Successfull !");
                   window.location = "/Dashboard";
                    // if (response.data.token) {
                    //     window.location = "/Dashboard";
                    // }
                    
                })
                .catch((error) => {
                    //alert("User not yet activated/verified...") 
                    console.log(error);
                })
        }
    }

    fnValidateLoginForm = () => {

        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;


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

        if (!fields["password"]) {
            formIsValid = false;
            errors["password"] = "*Please enter your password.";
        }

        if (typeof fields["password"] !== "undefined") {
            if (!fields["password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
                formIsValid = false;
                errors["password"] = "*Please enter valid Password.";
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
                <section class="login-block">
                    <div class="container">
                    <div class="row">
                        <div class="col-md-5 login-sec">
                            <h2 class="text-center">Login Now</h2>
                            <form class="login-form">
                                <div class="form-group">
                                    <label for="exampleInputemail1" class="text-captialize">Email</label>
                                    <input type="text" class="form-control" placeholder="" 
                                        name="email"
                                        value={this.state.fields.email}
                                        onChange={this.HandleChange}/>
                                    <div class="DivErrorMessage">{this.state.errors.email}</div>
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputpassword1" class="text-captialize">Password</label>
                                    <input type="password" class="form-control" placeholder="" 
                                        name="password"
                                     value={this.state.fields.password}
                                     onChange={this.HandleChange}/>
                                     <div class="DivErrorMessage">{this.state.errors.password}</div>
                                </div>
                
                
                                <div class="form-check">
                                    <label class="form-check-label" >
                                    <input type="checkbox" class="form-check-input" />
                                    <small>Remember Me</small>
                                    </label>                                    
                                </div>
                                <Container id="DivErrorContainer" style={{ display: 'none' }}>
                                                <Alert severity="error">{this.state.strErrMessage}</Alert>
                                </Container>
                                <button type="submit" class="btn btn-login float-right" onClick={this.fnLogin}>Submit</button>
                                <div class='LoginAccountExists'>
                                   Create a New Account <a href="/Register">Click here to Register</a>
                                </div>
                            </form>
                        </div>
                        <div class="col-md-7 banner-sec">
                            
                        </div>
                     </div>
                    </div>
                </section>
                                            {/* <div class='HeaderSection'>Login
                                            </div>
                                            <Divider></Divider>
                                            <Container id="DivErrorContainer" style={{ display: 'none' }}>
                                                <Alert severity="error">{this.state.strErrMessage}</Alert>
                                            </Container>
                                            <div class='DetailsSection'>
                                                <div class='MarginNormal'>
                                                    <TextField
                                                        label="email Address"

                                                        variant="outlined"
                                                        name="email"
                                                        value={this.state.fields.email}
                                                        onChange={this.HandleChange}
                                                    />
                                                    <div class="DivErrorMessage">{this.state.errors.email}</div>

                                                </div>


                                                <div class='MarginNormal'>
                                                    <TextField
                                                        label="password"
                                                        type="password"
                                                        variant="outlined"
                                                        name="password"
                                                        value={this.state.fields.password}
                                                        onChange={this.HandleChange}
                                                    />
                                                    <div class="DivErrorMessage">{this.state.errors.password}</div>

                                                </div>

                                                <div class='MarginNormal'>
                                                    <Button
                                                        variant="outlined"
                                                        style={{
                                                            border: "1px solid #2d70d8",
                                                            color: "black",
                                                            height: "50px",
                                                            backgroundColor: "goldenrod",
                                                            fontWeight: "bolder",
                                                            marginBottom: "10px",
                                                        }}
                                                        onClick={this.fnLogin}

                                                    >
                                                        <DoneIcon></DoneIcon>Login
                                                    </Button>
                                                </div>
                                            </div> */}

                                        </React.Fragment>
        )
    }
}
export default Login