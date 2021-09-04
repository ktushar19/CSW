import Ract, {Component} from 'react';
import TopBar from '../Common/TopBar'
import ArrowBackRoundedIcon from '@material-ui/icons/ArrowBackRounded';
import CheckRoundedIcon from '@material-ui/icons/CheckRounded';
import axios from 'axios';
import {useHistory, useParams} from 'react-router-dom';

import { Table, Snackbar } from '@material-ui/core';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import SnackBar from '../Common/SnackBar';

import Divider from '@material-ui/core/Divider'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Switch from '@material-ui/core/Switch';
import PersonIcon from '@material-ui/icons/Person';
import InfoIcon from '@material-ui/icons/Info';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import ViewListIcon from '@material-ui/icons/ViewList';
import SearchIcon from '@material-ui/icons/Search';
import { Dropdown, Tooltip, Form } from 'react-bootstrap';
import EditIcon from '@material-ui/icons/Edit';
import { DataGrid } from '@material-ui/data-grid';
import DeleteIcon from '@material-ui/icons/Delete';

var staffdata = [];
class StaffDetails extends Component{
    constructor(props)
    {
        super();        
        this.state = {
            _id:'',
            firstName: '',
            middleName: '',
            lastName: '',
            email: '',
            userName: '',
            password: '',
            staffdata:[]
        }
        this.HandleChange = this.HandleChange.bind(this)        
        this.DeleteStaff = this.DeleteStaff.bind(this)
        this.fnSearch = this.fnSearch.bind(this)
        //this.findbyuserById = this.findbyuserById.bind(this);
    }
//need commn filed
    HandleChange(e)
    {
        this.setState(
            {
                [e.target.name] : e.target.value
            }
        )
    };
    // action button 
   

    componentDidMount(){
        this.fnSearch();
    }

    fnSearch=(e)=>{
        axios.get('http://localhost:4000/app/Staff')
        .then(response => {
            console.log('inside');
            this.setState({                
                staffdata:response.data
            })
        })
        .catch((error) =>{
            console.log(error);
        })
    }
    

    // findbyuserById=()=>{
    //     const id = this.state._id 
    //     console.log(id);
    //     axios.get('http://localhost:4000/app/Staff/:id')
    //     .then(response =>{
    //         this.setState({
    //             staffdata:response.data
    //         })
    //     })
    //     .catch((error) =>{
    //         console.log(error);
    //     })
    // }
            

DeleteStaff=(id)=>{
    console.log(id);
    alert("Are you sure you want to delete?");
    let bConfirm = true;
    if(bConfirm)
    {
        axios.delete('http://localhost:4000/app/Staff/'+id)
        .then(response => 
        {
            console.log(response);
            this.fnSearch();
        }

        );

    }
    
    
    
}


    render(){
        return(
            <div class="DivOuterMain">
                
                <div class="container-fluid ">
                <div class="row">
                <div class="col-sm-12"></div>
            <div class="col-sm-12">
                <div class="toolbar-button">
                    <a href="" id="backButtonIndex" class="btn btn-default btn-outline btn-circle">
                        <ArrowBackRoundedIcon></ArrowBackRoundedIcon>
                    </a>
                    <a href="/Staff"><button type='submit' className='btn' value='Submit' 
                     id="create">
                        <PersonAddIcon></PersonAddIcon>Create New
                    </button></a>
                    <div class="btn-group">
                    <button type="button" class="btn btn-outline  dropdown-toggle padding-top-7  padding-bottom-7" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <FlashOnIcon></FlashOnIcon>Actions<span class="caret"></span>
                    </button>
                    <ul class="dropdown-menu " id="actionButtonsIndex">
                                    <li class="dropdown-header font-bold"><em>Mass Imports / actions</em></li>
                                    <li><a href="#" id="doSiblings" data-container="body" data-toggle="" data-target="#"><span class="fad fa-user-friends fa-fw"></span> Create Relatives</a></li>
                                <li class="divider"></li>
                                    <li class="dropdown-header font-bold"><em>Transfers</em></li>
                                <li class="divider"></li>
                                    <li class="dropdown-header font-bold"><em>Advanced</em></li>
                                    <li><a href="/Student/StudentRegistrationStatistics" id="StudentRegistrationStatistics" data-container="body" data-toggle="" data-target="#"><span class=""></span> Students Registration Statistics</a></li>
                    </ul>
                </div>
                <div class="btn-group">
                    <button type="button" class="btn btn-outline  dropdown-toggle padding-top-7  padding-bottom-7" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <ViewListIcon></ViewListIcon>View <span class="caret"></span>
                    </button>
                    <ul class="dropdown-menu " id="actionButtonsIndex">
                                    <li class="dropdown-header font-bold"><em>Mass Imports / actions</em></li>
                                    <li><a href="#" id="doSiblings" data-container="body" data-toggle="" data-target="#"><span class="fad fa-user-friends fa-fw"></span> Create Relatives</a></li>
                                <li class="divider"></li>
                                    <li class="dropdown-header font-bold"><em>Transfers</em></li>
                                <li class="divider"></li>
                                    <li class="dropdown-header font-bold"><em>Advanced</em></li>
                                    <li><a href="/Student/StudentRegistrationStatistics" id="StudentRegistrationStatistics" data-container="body" data-toggle="" data-target="#"><span class=""></span> Students Registration Statistics</a></li>
                    </ul>
                </div>
                <div class="btn-group">
                    <button type="button" class="btn btn-outline  dropdown-toggle padding-top-7  padding-bottom-7" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Status <span class="caret"></span>
                    </button>
                    <ul class="dropdown-menu " id="actionButtonsIndex">
                                    <li class="dropdown-header font-bold"><em>Mass Imports / actions</em></li>
                                    <li><a href="#" id="doSiblings" data-container="body" data-toggle="" data-target="#"><span class="fad fa-user-friends fa-fw"></span> Create Relatives</a></li>
                                <li class="divider"></li>
                                    <li class="dropdown-header font-bold"><em>Transfers</em></li>
                                <li class="divider"></li>
                                    <li class="dropdown-header font-bold"><em>Advanced</em></li>
                                    <li><a href="/Student/StudentRegistrationStatistics" id="StudentRegistrationStatistics" data-container="body" data-toggle="" data-target="#"><span class=""></span> Students Registration Statistics</a></li>
                    </ul>
                </div>
                <div class="btn-group" style={{float:"right",paddingTop:"7px"}}>
                    <SnackBar></SnackBar>
                </div>
                </div>
            </div>
        </div>  
        <div class="row">
                        
                    <div class="col-sm-12">
                            <div class="row">
                                <div class="col-md-12">
                                <fieldset class="scheduler-border">
                                <legend class="scheduler-border">
                                <SearchIcon></SearchIcon>
								<span>Filters</span>
                            	</legend>
                                <div class="row">
                            <div class="col-sm-12">                       
                                <div class="row">
                                <div class="col-sm-4">
                                <label for="exampleInputfaculty">Faculty</label>                 
                                <Form.Group  controlId="formGridState">
                                    <Form.Control as="select" defaultValue="--Select the Faculty--">
                                        <option></option>
                                        <option>Engineering Faculty</option>
                                        <option>Financial Faculty</option>
                                        <option>Medicine Faculty</option>
                                    </Form.Control>
                                </Form.Group>   
                                  </div>
                                <div class="col-sm-4">
                                <div class="form-group">
                                        <label for="exampleInputemail">Search</label>
                                        <input class="form-control" name="_id" id="exampleInputsearch" placeholder=""  type='text'
                                            value={this.state.search}
                                            onChange={this.HandleChange} noValidate/>
                                 </div>
                                </div> 
                                <div class="col-sm-4">
                                <div class="form-group">
                                <button class="searchbtn" variant="outlined" color="secondary" >
                                    <SearchIcon></SearchIcon>Search
                                </button>
                                </div>
                                </div>                                
                                </div>
                                </div>
                            </div>
                         </fieldset>
                                </div>
                            </div>
                                                        
                        </div>              
                    </div>
        <div class="row">
                    <div class="col-sm-12">
                            <Divider ></Divider>
                            <div class="DivSectionTitle">
                                <h4 style={{textAlign:"center"}}>This is a Details Section</h4>
                                      <Table class="table">
                                            <TableHead class="thead-light">
                                                <TableRow>
                                                    <TableCell>Id</TableCell>
                                                    <TableCell>First Name</TableCell>
                                                    <TableCell>Middle Name</TableCell>
                                                    <TableCell>Last Name</TableCell>
                                                    <TableCell>Email</TableCell>
                                                    <TableCell>UserName</TableCell>                                                    
                                                    <TableCell>Edit|Delete</TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                {this.state.staffdata &&
                                                this.state.staffdata.map(staffdata=>{
                                                    return( 
                                                        <TableRow key={staffdata.userName}>
                                                            <TableCell>{staffdata._id}</TableCell>
                                                            <TableCell>{staffdata.firstName}</TableCell>
                                                            <TableCell>{staffdata.middleName}</TableCell>
                                                            <TableCell>{staffdata.lastName}</TableCell>
                                                            <TableCell>{staffdata.email}</TableCell>
                                                            <TableCell>{staffdata.userName}</TableCell>
                                                            <TableCell>{
                                                                <span>
                                                                    <button class="btn"><a href={"/Staff/"+staffdata._id} ><EditIcon></EditIcon></a></button>
                                                                     | <button class="btn" onClick={()=>this.DeleteStaff(staffdata._id)}><DeleteIcon></DeleteIcon></button> 
                                                                </span>
                                                                        }
                                                            </TableCell>
                                                        </TableRow>
                                                    )
                                                })
                                                }
                                            </TableBody>
                                        </Table> 
                            </div>
                    </div>
                </div> 
                </div>     
             </div>
            
        );
    }
}

export default StaffDetails
