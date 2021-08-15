import React, { Component } from 'react'
import axios from 'axios';
import queryString from 'query-string';
import Button from '@material-ui/core/Button';
import DoneIcon from '@material-ui/icons/Done';
import TextField from "@material-ui/core/TextField";
import 'bootstrap/dist/css/bootstrap.min.css';


class ResetPassword extends Component {

    constructor(props) {
        super(props);
        this.fnResetPwd = this.fnResetPwd.bind(this);
        this.fnValidateResetPwdForm = this.fnValidateResetPwdForm.bind(this);
        this.HandleChange = this.HandleChange.bind(this);
        this.state = {
            resetPwdFields: {},
            resetPwderrors: {},
        }
    }

    fnResetPwd = (params) => (e) =>{
        e.preventDefault();
        if (this.fnValidateResetPwdForm()) {
            let resetPwdfields = {};
            resetPwdfields["Password"] = "";
            resetPwdfields["ConfirmPassword"] = "";
            this.setState({ resetPwdFields: resetPwdfields });

            const resetPasswordRequest = {
                password: this.state.fields.Password,
                resetPasswordToken: params.resetPasswordToken
            }

            axios.put('http://localhost:8091/api/auth/reset-password', resetPasswordRequest)
                .then(response => {
                    console.log(response.data);
                    alert(JSON.stringify(response.data))
                    window.location = "/LoginPage"
                })
                .catch((error) => {
                    console.log(error);
                })
        }
    }

    fnValidateResetPwdForm = () => {
        let fields = this.state.resetPwdFields;
        let errors = {};
        let formIsValid = true;

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

        if (!fields["ConfirmPassword"]) {
            formIsValid = false;
            errors["ConfirmPassword"] = "*Please enter your password.";
        }

        if (typeof fields["ConfirmPassword"] !== "undefined") {
            if (!fields["ConfirmPassword"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
                formIsValid = false;
                errors["ConfirmPassword"] = "*Please enter secure and strong password.";
            }
        }

        if (typeof fields["Password"] !== "undefined" && typeof fields["ConfirmPassword"] !== "undefined") {

            if (fields["Password"] != fields["ConfirmPassword"]) {
                formIsValid = false;
                errors["Password"] = "Passwords don't match.";
            }
        }

        this.setState({
            resetPwderrors: errors
        });
        return formIsValid;
    }

    HandleChange(e) {
        let fields = this.state.resetPwdFields;
        fields[e.target.name] = e.target.value;
        this.setState({
            fields
        });
    }



    render() {
        let params = queryString.parse(this.props.location.search);
        return (
            <React.Fragment>
                <section class="login-block">
                    <div class="container">
                    <div class="row">
                        <div class="col-md-5 login-sec">
                            <h2 class="text-center">Change Password</h2>
                            <form class="login-form">
                                <div class="form-group">
                                    <label for="exampleInputPassword" class="text-captialize">New Password</label>
                                    <input type="text" class="form-control" placeholder="" 
                                        type="password"
                                        variant="outlined"
                                        name="Password"
                                        value={this.state.resetPwdFields.Password}
                                        onChange={this.HandleChange}/>
                                    <div class="DivErrorMessage">{this.state.resetPwderrors.Password}</div>
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputPassword1" class="text-captialize">Confirm Password</label>
                                    <input type="password" class="form-control" placeholder="" 
                                        variant="outlined"
                                        name="ConfirmPassword"
                                        value={this.state.resetPwdFields.ConfirmPassword}
                                        onChange={this.HandleChange}/>
                                     <div class="DivErrorMessage">{this.state.resetPwderrors.ConfirmPassword}</div>
                                </div>
                                <button type="submit" class="btn btn-login float-right" onClick={this.fnResetPwd(params)}>Reset Password</button>
                            
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
                        label="New Password"
                        type="password"
                        variant="outlined"
                        name="Password"
                        value={this.state.resetPwdFields.Password}
                        onChange={this.HandleChange}
                    />
                    <div class="DivErrorMessage">{this.state.resetPwderrors.Password}</div>

                </div>
                <div class='MarginNormal'>
                    <TextField
                        label="Confirm Password"
                        type="password"
                        variant="outlined"
                        name="ConfirmPassword"
                        value={this.state.resetPwdFields.ConfirmPassword}
                        onChange={this.HandleChange}
                    />
                    <div class="DivErrorMessage">{this.state.resetPwderrors.ConfirmPassword}</div>
                   
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
                    onClick={this.fnResetPwd(params)}
                >
                    <DoneIcon></DoneIcon>Reset Password
                </Button>
            </div>*/
        );
    }
}
export default ResetPassword