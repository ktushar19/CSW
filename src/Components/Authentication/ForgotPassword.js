import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { RadioButtonUncheckedSharp } from '@material-ui/icons';
import { Table } from '@material-ui/core';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import axios from 'axios';
import DoneIcon from '@material-ui/icons/Done';
import TextField from "@material-ui/core/TextField";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

class ForgotPassword extends Component {
    constructor(props) {
        super(props);
        this.fnForgotPwd = this.fnForgotPwd.bind(this);
        this.fnValidateFrgtPwdForm = this.fnValidateFrgtPwdForm.bind(this);
        this.HandleChange = this.HandleChange.bind(this);
        this.state = {
            frgtPwdFields: {},
            frgtPwderrors: {},
        }
    }

    HandleChange(e) {
        let fields = this.state.frgtPwdFields;
        fields[e.target.name] = e.target.value;
        this.setState({
            fields
        });
    }

    fnForgotPwd = (e) => {
        e.preventDefault();
        if (this.fnValidateFrgtPwdForm()) {
            let forgotPwdfields = {};
            forgotPwdfields["Email"] = "";
            this.setState({ frgtPwdFields: forgotPwdfields });

            const forgotPasswordRequest = {
                email: this.state.fields.Email,
            }

            axios.post('http://localhost:8091/api/auth/forgot-password', forgotPasswordRequest)
                .then(response => {
                    console.log(response.data);
                    alert(JSON.stringify(response.data))
                })
                .catch((error) => {
                    console.log(error);
                })
        }
    }

    fnValidateFrgtPwdForm = () => {

        let fields = this.state.frgtPwdFields;
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

        this.setState({
            frgtPwderrors: errors
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
                            <h2 class="text-center">For New Password</h2>
                            <form class="login-form">
                                <div class="form-group">
                                    <label for="exampleInputEmail" class="text-captialize">Enter your Email</label>
                                    <input type="text" class="form-control" placeholder="" 
                                        type="email"
                                        name="Email"
                                        value={this.state.frgtPwdFields.Email}
                                        onChange={this.HandleChange}/>
                                    <div class="DivErrorMessage">{this.state.frgtPwderrors.Email}</div>
                                </div>
                                <button type="submit" class="btn btn-login float-right" onClick={this.fnForgotPwd}>Send</button>
                            
                            </form>
                        </div>
                        <div class="col-md-7 banner-sec">
                            
                        </div>
                     </div>
                    </div>
                </section>
            </React.Fragment>
            /*<div class='DetailsSection'>
                <div class='MarginNormal'>
                    <TextField
                        label="Enter your e-mail"

                        variant="outlined"
                        name="Email"
                        value={this.state.frgtPwdFields.Email}
                        onChange={this.HandleChange}
                    />
                    <div class="DivErrorMessage">{this.state.frgtPwderrors.Email}</div>

                </div>
                <Button
                    variant="outlined"
                    style={{
                        color: "black",
                        height: "50px",
                        backgroundColor: "goldenrod",
                        fontWeight: "bolder",
                        marginBottom: "10px",
                    }}
                    onClick={this.fnForgotPwd}

                >
                    <DoneIcon></DoneIcon>Send
                </Button>
            </div>*/
        )
    }

}
export default ForgotPassword