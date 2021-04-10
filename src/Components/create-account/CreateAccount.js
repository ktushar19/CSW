import { colors, Container } from '@material-ui/core'
import React, {Component} from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import { AddAlert, Email, RadioButtonUncheckedSharp } from '@material-ui/icons';
import { Table } from '@material-ui/core';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { useHistory } from "react-router-dom";

import firebase from '../../services/firebase';


import TextField from "@material-ui/core/TextField";

import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { isConstructorDeclaration } from 'typescript';

import { Alert, AlertTitle } from '@material-ui/lab';
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

class CreateAccount extends Component {
    
    
    constructor(props)
    {
        super(props);
        this.fnCreateAccount = this.fnCreateAccount.bind(this);
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

    fnCreateAccount() {
        /*
        try {
          await signUp(
            "Tushar",
            "ktushar19@gmail.com",
            "Tushar@1909"
          );
          history.push("/");
        } catch (error) {
          alert(error.message);
        }
        */
       try
       {
        
        
        const isValid = this.fnValidate();
        if(!isValid)
        {
            //alert(strErr);

            //this.fnShowError(strErr);
            

        }
        else
        {
            firebase.auth().createUserWithEmailAndPassword(this.state.Email,this.state.Password);
            alert("User Added");
        }


        
       }
       catch (error) {
        alert(error.message);
      }

      }
      render()
      {

    return (

        <div>
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
                            <TableCell >
                            <div class="banner-title">
                                    <h1>Farmer by</h1>
                                    <h1 class="titlebg-color">NATURE</h1>
                                </div>
                                <div class="regbg-image"></div>
                                <div class="DivMarginSignUp">
                                <div class="DivMarginCreateAccount">
                                            <div class='HeaderSection'>Sign up for your account
                                            </div> 
                                            <div class="divider"></div>                                        
                                            <Container id="DivErrorContainer" style={{display:'none'}}>
                                                <Alert severity="error">{this.state.strErrMessage}</Alert>
                                            </Container>
                                            <div class='DetailsSection'>         
                                                <div>
                                                <TextField
                                                    label="First Name"
                                                    variant="outlined"
                                                    id='idFirstName'
                                                    value = {this.state.FirstName}
                                                    onChange={this.HandleChange}
                                                    name = "FirstName"
                                                    style={{
                                                        width: "415px !important",
                                                    }}
                                                />
                                                </div>
                                                <div>
                                                <TextField
                                                    label="Last name"
                                                    variant="outlined"
                                                    id='idLastName'
                                                    name = "LastName"
                                                    value = {this.state.LastName}
                                                    onChange={this.HandleChange}
                                                    style={{
                                                        width: "385px !important",
                                                    }}
                                                />
                                                </div>
                                                <div>
                                                <TextField
                                                    label="Email Address"
                                                    variant="outlined"
                                                    id='idEmail'
                                                    value = {this.state.Email}
                                                    onChange={this.HandleChange}
                                                    name = "Email"
                                                    style={{
                                                        width: "385px !important",
                                                    }}
                                                />
                                                {this.state.EmailError ?
                                                <div class="DivErrorMessage">{this.state.EmailError}</div> :null}
                                                
                                                </div>
                                                <div>
                                                <TextField
                                                    label="Phone Number"
                                                    variant="outlined"
                                                    id='idPhone'
                                                    value = {this.state.Phone}
                                                    onChange={this.HandleChange}
                                                    name = "Phone"
                                                    style={{
                                                        width: "385px !important",
                                                    }}
                                                />
                                                </div>
                                                <div>
                                                <TextField
                                                    label="Password"
                                                    type="password"        
                                                    variant="outlined"
                                                    id='idPassword'
                                                    value = {this.state.Password}
                                                    onChange={this.HandleChange}
                                                    name = "Password"
                                                    style={{
                                                        width: "385px !important",
                                                    }}
                                                />
                                                {this.state.EmailError ? <div class="DivErrorMessage">{this.state.PasswordError}</div>:null}
                                                </div>

                                                <div>
                                                <Button
                                        variant="outlined"
                                        id="reg-btn"
                                        style={{
                                            color: "black",
                                            height: "50px",
                                            marginBottom: "10px",
                                            width: "490px !important"
                                        }}
                                        onClick={this.fnCreateAccount}
                                          

                                    >
                                        <ExitToAppIcon></ExitToAppIcon>Register
            </Button>
                                                </div>
                                                </div>
                                    </div>
                                    
                                </div>
                            </TableCell>
                        </TableRow>
                        <Grid container>
        <Grid item xs={6} style={{padding: "155px 15px 30px 70px"}}>
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
        <Grid item xs={6} style={{padding: "30px 70px 30px 0px"}}>
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
export default CreateAccount