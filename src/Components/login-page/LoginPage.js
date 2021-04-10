import { colors } from '@material-ui/core'
import React,{Component} from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import { RadioButtonUncheckedSharp } from '@material-ui/icons';
import { Table } from '@material-ui/core';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import DoneIcon from '@material-ui/icons/Done';



import TextField from "@material-ui/core/TextField";

import firebase from '../../services/firebase';
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

    constructor(props)
    {
        super(props);
        this.fnLogin = this.fnLogin.bind(this);
        this.HandleChange = this.HandleChange.bind(this);
        this.state = {
            Email :"",
            Password:""
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
    

    
    fnLogin() 
    {
        
       try
       {
           //alert(this.state.Email)

           let strErr = "";   
        if(this.state.Email=="")
        {
            strErr = strErr + "Please enter Email Address\n";   

        }
        if(this.state.Password=="")
        {
            strErr = strErr + "Please enter Password\n";   

        }
        
        if(strErr!="")
        {
            alert(strErr);
        }
        else
        {
            firebase.auth().signInWithEmailAndPassword(this.state.Email,this.state.Password).then((user) => {
                // Signed in 
                // ...
                
                //alert(firebase.auth().currentUser.uid);
                localStorage.setItem("g_user_id", firebase.auth().currentUser.uid);
                //history.push("/SubmitData");
                alert("You are logged in. Please Click on SubmitData to proceed.");


                //alert(user.credential.name);
              })
                .catch(function(error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                if (errorCode === 'auth/wrong-password') {
                    alert('Wrong password.');
                } else {
                    alert(errorMessage);
                }
                console.log(error);
                });

        }
       }
       catch (error) 
       {
        alert(error.message);
        }

      }

    render()
    {
    return(

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
                                                    name = "Email"
                                                    value = {this.state.Email}
                                                    onChange={this.HandleChange}
                                                />
                                                <TextField
                                                    label="Phone Number"   
                                                    id="idPhone"                                                 
                                                    variant="outlined"
                                                    name = "Phone"
                                                    type=""
                                                    value = {this.state.Phone}
                                                    onChange={this.HandleChange}
                                                />
                                                <TextField
                                                    label="Password"
                                                    id="idPassword"
                                                    type="password"        
                                                    variant="outlined"
                                                    name = "Password"
                                                    value = {this.state.Password}
                                                    onChange={this.HandleChange}
                                                />
                                               
                                               
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
export default LoginPage