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
        this.fnCreateAccount = this.fnCreateAccount.bind(this);
        this.HandleChange = this.HandleChange.bind(this);
        this.fnShowError = this.fnShowError.bind(this);
        this.fnValidateRegistrationForm = this.fnValidateRegistrationForm.bind(this);
        this.state = {
            fields: {},
            errors: {},
        }
    }

    fnCreateAccount(e) {
        e.preventDefault()
        if (this.fnValidateRegistrationForm()) {
            let fields = {};
            fields["FirstName"] = "";
            fields["LastName"] = "";
            fields["Email"] = "";
            fields["Phone"] = "";
            fields["Password"] = "";
            this.setState({ fields: fields });
            const signUpRequest = {
                firstName: this.state.fields.FirstName,
               // lastName: this.state.fields.LastName,
                emailAddress: this.state.fields.Email,
               // phoneNumber: this.state.fields.Phone,
                password: this.state.fields.Password,
                instituteName: this.state.fields.InstituteName
            }
            axios.post('http://13.126.105.95:8091/api/auth/signup', signUpRequest)
                .then(response => {
                    alert(JSON.stringify(response.data))
                })
                .catch((error) => {
                    console.log(error);
                })
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
        this.ErrorBox.visible = true;
        document.getElementById("DivErrorContainer").style.display = "block";

    }

    fnValidateRegistrationForm = () => {
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        if (!fields["FirstName"]) {
            formIsValid = false;
            errors["FirstName"] = "*Please enter your firstname.";
        }

        if (typeof fields["FirstName"] !== "undefined") {
            if (!fields["FirstName"].match(/^[a-zA-Z ]*$/)) {
                formIsValid = false;
                errors["FirstName"] = "*Please enter alphabet characters only.";
            }
        }

        if (!fields["InstituteName"]) {
            formIsValid = false;
            errors["InstituteName"] = "*Please enter your institute name.";
        }

        if (typeof fields["InstituteName"] !== "undefined") {
            if (!fields["InstituteName"].match(/^[a-zA-Z ]*$/)) {
                formIsValid = false;
                errors["InstituteName"] = "*Please enter alphabet characters only.";
            }
        }


        if (!fields["Email"]) {
            formIsValid = false;
            errors["Email"] = "*Please enter your email-ID.";
        }

        if (typeof fields["Email"] !== "undefined") {
            var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if (!pattern.test(fields["Email"])) {
                formIsValid = false;
                errors["Email"] = "*Please enter valid email-ID.";
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

        if (!fields["Password"]) {
            formIsValid = false;
            errors["Password"] = "*Please enter your password.";
        }

        if (typeof fields["Password"] !== "undefined") {
            if (!fields["Password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
                formIsValid = false;
                errors["Password"] = "*Please enter secure and strong password.";
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
                                    <label for="exampleInputEmail1" class="text-captialize">First Name</label>
                                    <input type="text" class="form-control" placeholder="" 
                                        value={this.state.fields.FirstName}
                                        onChange={this.HandleChange}
                                        name="FirstName"/>
                                    <div class="DivErrorMessage">{this.state.errors.FirstName}</div>
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputEmail1" class="text-captialize">Institute Name</label>
                                    <input type="text" class="form-control" placeholder="" 
                                        name="InstituteName"
                                        value={this.state.fields.InstituteName}
                                        onChange={this.HandleChange}/>
                                    <div class="DivErrorMessage">{this.state.errors.InstituteName}</div>
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputEmail1" class="text-captialize">Email</label>
                                    <input type="text" class="form-control" placeholder="" 
                                        value={this.state.fields.Email}
                                        onChange={this.HandleChange}
                                        name="Email"/>
                                    <div class="DivErrorMessage">{this.state.errors.Email}</div>
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputPassword1" class="text-captialize">Password</label>
                                    <input type="password" class="form-control" placeholder="" 
                                        name="Password"
                                     value={this.state.fields.Password}
                                     onChange={this.HandleChange}/>
                                     <div class="DivErrorMessage">{this.state.errors.Password}</div>
                                </div>
                                <Container id="DivErrorContainer" style={{ display: 'none' }}>
                                                <Alert severity="error">{this.state.strErrMessage}</Alert>
                                </Container>
                                <button class="btn btn-register float-right"  onClick={this.fnCreateAccount}>Register</button>
                                <div class='LoginAccountExists'>
                                   Already Have an account <a href="Login">Click here to Login</a>
                                </div>
                            </form>
                        </div>
                        <div class="col-md-7 banner-sec2">
                            
                        </div>
                     </div>
                    </div>
                </section>

                                            {/* <div class='HeaderSection'>Sign up for your account
                                            </div>
                                            <Divider></Divider>
                                            <Container id="DivErrorContainer" style={{ display: 'none' }}>
                                                <Alert severity="error">{this.state.strErrMessage}</Alert>
                                            </Container>
                                            <div class='DetailsSection'>
                                                <div class='MarginNormal'>
                                                    <TextField
                                                        label="First Name"
                                                        variant="outlined"
                                                        id='idFirstName'
                                                        value={this.state.fields.FirstName}
                                                        onChange={this.HandleChange}
                                                        name="FirstName"
                                                    />
                                                    <div class="DivErrorMessage">{this.state.errors.FirstName}</div>
                                                </div>
                                               { /* <div class='MarginNormal'>
                                                    <TextField
                                                        label="Last name"
                                                        variant="outlined"
                                                        id='idLastName'
                                                        name="LastName"
                                                        value={this.state.fields.LastName}
                                                        onChange={this.HandleChange}
                                                    />
                                                    <div class="DivErrorMessage">{this.state.errors.LastName}</div>
                                                </div> 
                                                <div class='MarginNormal'>
                                                    <TextField fullWidth
                                                        label="Institute Name"
                                                        variant="outlined"
                                                        id='idInstituteName'
                                                        name="InstituteName"
                                                        value={this.state.fields.InstituteName}
                                                        onChange={this.HandleChange}
                                                    />
                                                    <div class="DivErrorMessage">{this.state.errors.InstituteName}</div>
                                                </div>
                                                <div class='MarginNormal'>
                                                    <TextField
                                                        label="Email Address"
                                                        variant="outlined"
                                                        id='idEmail'
                                                        value={this.state.fields.Email}
                                                        onChange={this.HandleChange}
                                                        name="Email"
                                                    />
                                                    <div class="DivErrorMessage">{this.state.errors.Email}</div>

                                                </div>
                                               { /* <div class='MarginNormal'>
                                                    <TextField
                                                        label="Phone Number"
                                                        variant="outlined"
                                                        id='idPhone'
                                                        value={this.state.fields.Phone}
                                                        onChange={this.HandleChange}
                                                        name="Phone"
                                                    />
                                                    <div class="DivErrorMessage">{this.state.errors.Phone}</div>
                                            </div> 
                                                <div class='MarginNormal'>
                                                    <TextField
                                                        label="Password"
                                                        type="password"
                                                        variant="outlined"
                                                        id='idPassword'
                                                        value={this.state.fields.Password}
                                                        onChange={this.HandleChange}
                                                        name="Password"
                                                    />
                                                    <div class="DivErrorMessage">{this.state.errors.Password}</div>
                                                </div>
                                                <Divider></Divider>
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
                                                        onClick={this.fnCreateAccount}


                                                    >
                                                        <ExitToAppIcon></ExitToAppIcon>Register
                                                    </Button>
                                                </div>
                                                <Divider></Divider>
                                                <div class='LoginAccountExists'>
                                                    Already Have an account <a href="Login">Click here to Login</a>
                                                </div>
                                            </div> */}

                                        </React.Fragment>
        )
    }
}
export default Register