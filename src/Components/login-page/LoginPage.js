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


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

class LoginPage extends Component {

    constructor(props) {
        super(props);
        this.fnLogin = this.fnLogin.bind(this);
        this.HandleChange = this.HandleChange.bind(this);
        this.fnLogin = this.fnLogin.bind(this);
        this.fnValidateLoginForm = this.fnValidateLoginForm.bind(this);
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



    fnLogin = (e) => {
        e.preventDefault();
        if (this.fnValidateLoginForm()) {
            let fields = {};
            fields["Email"] = "";
            fields["Password"] = "";
            this.setState({ fields: fields });

            const signInRequest = {
                userName: this.state.fields.Email,
                password: this.state.fields.Password
            }

            axios.post('http://localhost:8091/api/auth/signin', signInRequest)
                .then(response => {
                    console.log(response.data);  
                    window.location = "/StaffDetails";                  
                })
                .catch((error) => {
                    console.log(error);
                })
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

            <div  >

                <div class="divMainCurve">
                    <Table>
                        <TableBody>
                            <TableRow>
                                <TableCell >
                                    <div class="DivMarginHeader">


                                    </div>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell >
                                    <div class="DivMarginHeader">


                                    </div>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <div class="banner-title">
                                        <h1>Farmer by</h1>
                                        <h1 class="titlebg-color">NATURE</h1>
                                    </div>
                                    <div class="regbg-image"></div>
                                    <div class="DivMarginSignUp">
                                        <div class="DivMarginLoginAccount">
                                            <div class='HeaderSection'>Login to your account</div>
                                            <div class="divider"></div>
                                            <div class='DetailsSection'>
                                                <TextField
                                                    label="Email Address"
                                                    id="idEmail"
                                                    variant="outlined"
                                                    name="Email"
                                                    value={this.state.fields.Email}
                                                    onChange={this.HandleChange}
                                                />
                                                <div class="DivErrorMessage">{this.state.errors.Email}</div>

                                                <TextField
                                                    label="Password"
                                                    id="idPassword"
                                                    type="password"
                                                    variant="outlined"
                                                    name="Password"
                                                    value={this.state.fields.Password}
                                                    onChange={this.HandleChange}
                                                />
                                                <div class="DivErrorMessage">{this.state.errors.Password}</div>

                                                <Button
                                                    variant="outlined"
                                                    style={{
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

                                    </div>
                                </TableCell>
                            </TableRow>
                            <Grid container>
                                <Grid item xs={6} style={{ padding: "155px 15px 30px 70px" }}>
                                    <Paper>
                                        <div class="regimg-3"></div>
                                        <div class="address">
                                            <h3>Address</h3>
                                            <h4>DigiCrop Agriculture Solutions Pvt. Ltd.</h4>
                                            <h4>+91 8867498767 | +91 9148705605</h4>
                                            <h4><a href="mailto:sales@digi-crop.com">sales@digi-crop.com</a></h4>
                                        </div>
                                    </Paper>
                                </Grid>
                                <Grid item xs={6} style={{ padding: "30px 70px 30px 0px" }}>
                                    <Paper>
                                        <div class="regimg-2"></div>
                                    </Paper>
                                </Grid>
                            </Grid>
                            <TableRow>
                                <TableCell >
                                    <div class="DivMarginFooter">


                                    </div>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>
            </div>
        );
    }

}
export default LoginPage