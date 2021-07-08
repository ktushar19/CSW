import React, { Component } from 'react'
import '../../App.css';

import TextField from "@material-ui/core/TextField";
import { colors, Container } from '@material-ui/core'
import Button from '@material-ui/core/Button';

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
            fields["Email"] = "";
            fields["Password"] = "";
            this.setState({ fields: fields });
        }
    }

    fnValidateLoginForm = () => {

        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;


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
            <div>
                <table class="FullTable">
                    <tr>
                        <td class="LoginHalfTd1">

                            <div class='HeaderSection'>Cloud School Features
                            </div>
                            <div class='HeaderSection1'>
                                <ul>
                                    <li>Teacher Maintenance</li>
                                    <li>Student Maintenance</li>
                                    <li>Teacher-Parent Interaction</li>
                                    <li>world class reporting</li>
                                </ul>
                            </div>


                        </td>
                        <td class="LoginHalfTd2">

                            <div class="DivMarginLoginDetails">
                                <React.Fragment>
                                    <h1>

                                        <React.Fragment>
                                            <div class='HeaderSection'>Login
                                            </div>
                                            <Divider></Divider>
                                            <Container id="DivErrorContainer" style={{ display: 'none' }}>
                                                <Alert severity="error">{this.state.strErrMessage}</Alert>
                                            </Container>
                                            <div class='DetailsSection'>
                                                <div class='MarginNormal'>
                                                    <TextField
                                                        label="Email Address"

                                                        variant="outlined"
                                                        name="Email"
                                                        value={this.state.fields.Email}
                                                        onChange={this.HandleChange}
                                                    />
                                                    <div class="DivErrorMessage">{this.state.errors.Email}</div>

                                                </div>


                                                <div class='MarginNormal'>
                                                    <TextField
                                                        label="Password"
                                                        type="password"
                                                        variant="outlined"
                                                        name="Password"
                                                        value={this.state.fields.Password}
                                                        onChange={this.HandleChange}
                                                    />
                                                    <div class="DivErrorMessage">{this.state.errors.Password}</div>

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
                                            </div>

                                        </React.Fragment>

                                    </h1>
                                </React.Fragment>
                            </div>

                        </td>
                    </tr>
                </table>
            </div>
        )
    }
}
export default Login