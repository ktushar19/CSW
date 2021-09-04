import React, {Component} from 'react';
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { colors, Container } from '@material-ui/core'

import MasterMenu from '../Menu/MasterMenu';
import Divider from '@material-ui/core/Divider';
import { green, red } from '@material-ui/core/colors';
import axios from 'axios';
import ArrowBackRoundedIcon from '@material-ui/icons/ArrowBackRounded';
import CheckRoundedIcon from '@material-ui/icons/CheckRounded';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Switch from '@material-ui/core/Switch';
import { Dropdown, Tooltip, Form } from 'react-bootstrap';
import PersonIcon from '@material-ui/icons/Person';
import InfoIcon from '@material-ui/icons/Info';

import { Table } from '@material-ui/core';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ResponsiveDrawer from '../Menu/ResponsiveDrawer';
import { Alert, AlertTitle } from '@material-ui/lab';

import TextField from "@material-ui/core/TextField";
import TopBar from '../Common/TopBar'
import { useHistory } from "react-router-dom";
import AddressTab from './AddressTab';

import StaffAPI from '../../StaffAPI';


var staffdata = [];

class Staff extends Component{
    constructor(props)
    {
        super(props);        
        this.state = {
            id:"",
            firstName: '',
            middleName: '',
            lastName: '',
            email: '',
            userName: '',
            password: '',
            staffdata:[],
            strErrMessage:""
            
        }
        this.HandleChange = this.HandleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
       this.validate = this.validate.bind(this);
       this.fnShowError = this.fnShowError.bind(this);
        this.fnFetchData = this.fnFetchData.bind(this);
    }

    fnShowError(Error)
    {
        this.state.strErrMessage = Error;  
        document.getElementById("DivErrorContainer").style.display = "block";
    }

    validate=()=>{
        let firstNameError ="";
        let middleNameError ="";
        let lastNameError = "";
        let  emailError = '';
        let userNameError = '';
        let passwordError = '';

        if(this.state.firstName=="")
        {
            firstNameError = "Please enter First Name"
            this.setState({firstNameError});
        }
        if(this.state.middleName=="")
        {
            middleNameError = "Please enter Middle Name"
            this.setState({middleNameError});
        }
        if(this.state.lastName=="")
        {
            lastNameError = "Please enter Last Name"
            this.setState({lastNameError});
        }
        if(this.state.userName=="")
        {
            userNameError = "Please enter Last Name"
            this.setState({userNameError});
        }
        if(this.state.email=="")
        {
            emailError = "Please enter Email address"
            this.setState({emailError});
        }
        if(this.state.password=="")
        {
            passwordError = "Please enter password"
            this.setState({passwordError});
        }

        return true;
        
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

    componentDidMount(){
        this.fnFetchData();
        /*
        axios.get('http://localhost:4000/app/Staff',)
        .then(response => {
            if(response.data.length > 0) {
            this.setState({
                staffdata:response.data
            })
        }
        })
        .catch((error) =>{
            console.log(error);
        })
        */
        
    }



    onSubmit(event){
        event.preventDefault()
        const isValid = this.validate();        
        if(!isValid)
        {    
        }
    else{
        const registered = {
            
            firstName: this.state.firstName,
            middleName: this.state.middleName,
            lastName: this.state.lastName,
            email: this.state.email,
            userName: this.state.userName,
            password: this.state.password
        }
        //to pass data to backend
        //console.log(registered.userName);
        axios.post('http://localhost:4000/app/Staff', registered)
        .then(response => {
            console.log(response.data);
            alert("Data Inserted Successfully!");
            //window.location = "/StaffDetails";
        })        

        this.setState({
            firstName: '',
            middleName: '',
            lastName: '',
            email:'',
            userName: '',
            password: ''
        })        
    }   
}
fnFetchData=(e)=>{
   //this.setState({[e.target.name]:e.target.value});
       console.log("Inside update");
       //alert(this.props.match.params.id);
       const registered = {
        firstName: this.state.firstName,
        middleName: this.state.middleName,
        lastName: this.state.lastName,
        email: this.state.email,
        userName: this.state.userName,
        password: this.state.password
    }

    //6072ec7a5e92fe2f08572b9d
       //axios.put('http://localhost:4000/app/Staff/'+this.props.match.params.id, {registered})
       //axios.put('http://localhost:4000/app/Staff/6072ec7a5e92fe2f08572b9d', {registered})

       axios.get('http://localhost:4000/app/Staff/'+this.props.match.params.id, registered)
       .then(response => {
        console.log("fetchStaff data"+ response.data)
        
        this.setState({staffdata:response.data})
        //alert(response.data["firstName"]);
        
        this.setState({firstName:response.data["firstName"]});
        this.setState({middleName:response.data["middleName"]});
        this.setState({lastName:response.data["lastName"]});
        this.setState({email:response.data["email"]});
        
        
       })    
}   


    render(){
        return(
            <div class="DivOuterMain">
                <div class="container-fluid">
                <form onSubmit={this.onSubmit} noValidate>
                <div class="row">
                    <div class="col-sm-12">
                        <div class="toolbar-button">
                            <a href="/StaffDetails" id="backButtonIndex" class="btn btn-default btn-outline btn-circle">
                                <ArrowBackRoundedIcon></ArrowBackRoundedIcon>
                            </a>
                            <button type='submit' className='btn' value='Submit' 
                             id="submit">
                                <CheckRoundedIcon></CheckRoundedIcon>Save
                            </button>
                        </div>
                    </div>
                </div>
                <div class="row">
                <div class="col-sm-12">
                    <div class="toolbar-heading  margin-top-5 ">
                            <span class="title-modules">
                                Basic Data
                            </span>
                            <small> | Employees</small>
                    </div>
                    </div>
                 </div>               
                <div class="row">
                    <div class="col-sm-4">
                        <div class="profile-head">
                        <div class="profile-area"></div>
                    <Form.Group>
                        <Form.File id="exampleFormControlFile1" label="Profile Image Upload" />
                    </Form.Group>
                    </div>
                    </div>
                    <div class="col-sm-8">
                    <input type="hidden" class="form-control" id="id" value="{{this.state.id}}" />
                    <div class="row">
                    <div class="col-sm-4">
                    <div class="form-group">
                            <label for="exampleInputAbbreviation">Abbreviation </label>
                            <input type="text" class="form-control" id="exampleInputAbbreviation" aria-describedby="AbbreviationHelp" placeholder="" />
                        </div>
                    </div>  
                    <div class="col-sm-4">
                        <div class="form-group">
                            <label for="exampleInputFirstName">First Name<span class="required">*</span></label>
                            <input type='text' name="firstName" class="form-control" id="idfirstName" placeholder="" 
                                            value={this.state.firstName}
                                            onChange={this.HandleChange}  
                                                />
                             {this.state.firstNameError ?
                                                <div class="DivErrorMessage">{this.state.firstNameError}</div> :null}
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="form-group">
                            <label for="exampleInputLastName">Last Name<span class="required">*</span></label>
                            <input type='text' name="lastName" class="form-control" id="exampleInputLastName" placeholder="" value={this.state.lastName}
                                            onChange={this.HandleChange}/>
                                            {this.state.lastNameError ?
                                                <div class="DivErrorMessage">{this.state.lastNameError}</div> :null}
                        </div>
                    </div>                 
                    </div>
                    <div class="row">
                        <div class="col-sm-4">
                        <div class="form-group">
                            <label for="exampleInputmiddlename">Middle Name<span class="required">*</span></label>
                            <input type="text" class="form-control" name="middleName" id="exampleInputmiddlename" placeholder="" value={this.state.middleName}
                                            onChange={this.HandleChange}/>
                            {this.state.middleNameError ?
                                                <div class="DivErrorMessage">{this.state.middleNameError}</div> :null} 
                               </div>
                        </div>
                        <div class="col-sm-4">
                        <div class="form-group">
                            <TextField
                                id="date"
                                label="Birthday"
                                type="date"
                                defaultValue="2017-05-24"
                                InputLabelProps={{
                                shrink: true,
                                }}
                            />
                        </div>
                        </div>
                        <div class="col-sm-4">
                        <FormControl component="fieldset">
                        <FormLabel component="legend">Gender</FormLabel>
                        <RadioGroup aria-label="gender" name="gender1" style={{display: "block"}}>
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                            <FormControlLabel value="other" control={<Radio />} label="Other" />
                        </RadioGroup>
                        </FormControl>
                        </div>               
                    </div>
                    <div class="row">
                        <div class="col-sm-4">
                        <Form.Group  controlId="formGridState">
                            <Form.Label>Faculty</Form.Label>
                            <Form.Control as="select" defaultValue="--Select the Faculty--">
                                <option>--Select the Faculty--</option>
                                <option>Engineering Faculty</option>
                                <option>Financial Faculty</option>
                                <option>Medicine Faculty</option>
                            </Form.Control>
                          </Form.Group>
                        </div>
                        <div class="col-sm-4">
                        <Form.Group  controlId="formGridState">
                            <Form.Label>Family Status</Form.Label>
                            <Form.Control as="select" defaultValue="Choose...">
                                <option>Choose...</option>
                                <option>Live With Mother And Father</option>
                                <option>Live With Mother Only</option>
                                <option>Live With Father Only</option>
                            </Form.Control>
                        </Form.Group>
                        </div>
                        <div class="col-sm-4">
                        <div class="form-group">
                            <label for="exampleInputFirstName">Mentor</label>
                            <input type="firstname" class="form-control" id="exampleInputFirstName" placeholder=""/>
                        </div>
                        </div>               
                    </div>                    
                    </div>                    
                </div>
                <div class="row">
                    <div class="col-sm-12">
                    <div class="row">
                        <div class="col-sm-3">
                        <div class="form-group" id="comments-section">
                         <label for="exampleInputTitle">Comments</label>
                            <input type="title" class="form-control" id="exampleInputtitle" aria-describedby="titleHelp" placeholder="" />
                            
                        </div>
                        </div>
                        <div class="col-sm-3">
                        <Form.Group  controlId="formGridState">
                            <Form.Label>Way of Contact</Form.Label>
                            <Form.Control as="select" defaultValue="--Select the Faculty--">
                                <option> --Please Select-- </option>
                                <option>BROCHURE</option>
                                <option>BY Teacher</option>
                                <option>BY THIRD PERSON</option>
                                <option>INTERNET</option>
                                <option>OTHER</option>
                                <option>OUTDOOR ADVERTISING</option>
                                <option>TELEVISION</option>
                            </Form.Control>
                            </Form.Group>
                        </div>
                        <div class="col-sm-3">
                        <div class="form-group">
                            <label for="exampleInputFirstName">Registration Status</label>
                            <input type="firstname" class="form-control" id="exampleInputFirstName" placeholder=""/>
                        </div>
                        </div>
                        <div class="col-sm-3">
                        <div class="form-group" id="caterory">
                            <label for="exampleInputTitle">General Category</label>
                            <input type="title" class="form-control" id="exampleInputtitle" aria-describedby="titleHelp" placeholder="" />
                            
                        </div>
                        </div>               
                    </div>
                    <div class="row">
                        
                    <div class="col-sm-8">
                            <div class="row">
                                <div class="col-md-12">
                                <fieldset class="scheduler-border">
                                <legend class="scheduler-border">
							<PersonIcon></PersonIcon>
								<span>User Account </span>
                                
                                 <button type="button" class="btn btn-sm btn-info btn-outline no-borders smsTooltip" data-trigger="focus" data-container="body" data-toggle="popover" data-placement="top" data-content="Here, you create the Teacher’s online account. A Teacher may logon the account provided by CSW or using a private email that you may register here. In the later case, the Teacher must firstly verify the email account before he or she can access to CSW web portal.." data-original-title="" title=""> <InfoIcon></InfoIcon>Info</button>
						</legend>
                                <div class="row">
                                <div class="col-sm-6">
                                    <FormControlLabel
                                    control={<Switch name="checkedA" />}
                                    label="Active User Account"
                                />
                                </div>
                                <div class="col-sm-6">
                                <FormControlLabel
                                    control={<Switch name="checkedA" />}
                                    label="Active User Account"
                                />
                                </div>
                                </div>
                                <div class="row">
                            <div class="col-sm-12">                       
                                <div class="row">
                                <div class="col-sm-4">
                                <label for="exampleInputUsername">Username<span class="required">*</span></label>
                                <div class="input-group ">                                        
                                        <input type="text" class="form-control"  name="userName" aria-label="Recipient's username" aria-describedby="basic-addon2" 
                                            id='idUserName'
                                            value={this.state.userName}
                                            onChange={this.HandleChange}/>
                                        {/* <div class="input-group-append">
                                            <span class="input-group-text" id="basic-addon2">@example.com</span>
                                        </div> */}                                         
                                 </div>
                                 {this.state.userNameError ?
                                                <div class="DivErrorMessage">{this.state.userNameError}</div> :null}
                                </div>
                                <div class="col-sm-4">
                                <div class="form-group">
                                        <label for="exampleInputemail">Email<span class="required">*</span></label>
                                        <input class="form-control" name="email" id="exampleInputemail" placeholder=""  type='text'
                                            value={this.state.email}
                                            onChange={this.HandleChange} noValidate/>
                                            {this.state.emailError ?
                                                <div class="DivErrorMessage">{this.state.emailError}</div> :null}
                                    </div>
                                </div>
                                <div class="col-sm-4">
                                <div class="form-group">
                                    <label for="examplePassword">Password<span class="required">*</span></label>
                                    <input
                                            type='password'
                                            name="password"
                                            placeholder= 'Password'
                                            id='idpassword'
                                            value={this.state.password}
                                            onChange={this.HandleChange}
                                            className='form-control'
                                            noValidate
                                        />
                                        {this.state.passwordError ?
                                                <div class="DivErrorMessage">{this.state.passwordError}</div> :null}
                                        
                                         
                                        </div>
                                </div>
                                </div>
                                </div>
                            </div>
                         </fieldset>
                                </div>
                            </div>
                                                        
                        </div> 
                        <div class="col-sm-4">
                        {/* <div class="form-group">
                           <input type='submit' className='btn btn-danger btn-block' value='Submit'/>  
                        </div> */}
                         </div>              
                    </div>
                    </div>
                </div>
                 </form>
                </div>
            </div>
        )
    }
}
export default Staff