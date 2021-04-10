import React, {Component} from 'react'
import '../../App.css';

import TextField from "@material-ui/core/TextField";
import { colors, Container } from '@material-ui/core'
import Button from '@material-ui/core/Button';

import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider'

import { Alert, AlertTitle } from '@material-ui/lab';

import ExitToAppIcon from '@material-ui/icons/ExitToApp';

class Register extends Component{

    constructor(props)
    {
        super(props);
        //this.fnCreateAccount = this.fnCreateAccount.bind(this);
        this.HandleChange = this.HandleChange.bind(this);
        this.fnShowError = this.fnShowError.bind(this);
        
        this.state = {
            Email :"",
            Password:"",
            strErrMessage:"",
            EmailError:"",
            PasswordError:""

        }
    }
    HandleChange(e)
    {
        this.setState(
            {
                [e.target.name] : e.target.value
            }
        )
    }

    fnShowError(Error)
    {
        this.state.strErrMessage = Error;
                //this.ErrorBox.visible = true;     
        document.getElementById("DivErrorContainer").style.display = "block";


    }
    fnValidate= () =>
    {
        
        let EmailError= "";
        let PasswordError = "";

        if(this.state.Email=="")
        {
            EmailError = "Please enter Email"
            this.setState({EmailError});
        }
        if(this.state.Password=="")
        {
            PasswordError = "Please enter Password"
            this.setState({PasswordError});
        }

        if(EmailError+PasswordError);

        if(EmailError !="" || PasswordError!="")
        {
            return false;
        }
        return true;

    }

    render(){
        return(
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
                                            <div class='HeaderSection'>Sign up for your account
                                            </div>
                                            <Divider></Divider>
                                            <Container id="DivErrorContainer" style={{ display: 'none' }}>
                                                <Alert severity="error">{this.state.strErrMessage}</Alert>
                                            </Container>
                                            <div class='DetailsSection'>
                                                <div class='MarginNormal'>
                                                    <TextField
                                                        label="First Name"
                                                        variant= "outlined"
                                                        id='idFirstName'
                                                        value={this.state.FirstName}
                                                        onChange={this.HandleChange}
                                                        name="FirstName"
                                                        helperText="First Name"
                                                    />
                                                </div>
                                                <div class='MarginNormal'>
                                                    <TextField
                                                        label="Last name"
                                                        variant="outlined"
                                                        id='idLastName'
                                                        name="LastName"
                                                        value={this.state.LastName}
                                                        onChange={this.HandleChange}
                                                    />
                                                </div>
                                                <div class='MarginNormal'>
                                                    <TextField
                                                        label="Email Address"
                                                        variant="outlined"
                                                        id='idEmail'
                                                        value={this.state.Email}
                                                        onChange={this.HandleChange}
                                                        name="Email"
                                                    />
                                                    {this.state.EmailError ?
                                                        <div class="DivErrorMessage">{this.state.EmailError}</div> : null}

                                                </div>
                                                <div class='MarginNormal'>
                                                    <TextField
                                                        label="Phone Number"
                                                        variant="outlined"
                                                        id='idPhone'
                                                        value={this.state.Phone}
                                                        onChange={this.HandleChange}
                                                        name="Phone"
                                                    />
                                                </div>
                                                <div class='MarginNormal'>
                                                    <TextField
                                                        label="Password"
                                                        type="password"
                                                        variant="outlined"
                                                        id='idPassword'
                                                        value={this.state.Password}
                                                        onChange={this.HandleChange}
                                                        name="Password"
                                                    />
                                                    {this.state.EmailError ? <div class="DivErrorMessage">{this.state.PasswordError}</div> : null}
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
export default Register