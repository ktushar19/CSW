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

var userdata = [];
class UserDetails extends Component{
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
            userdata:[]
        }
        this.fnSearch = this.fnSearch.bind(this)
        //this.findbyuserById = this.findbyuserById.bind(this);
    }

   

    componentDidMount(){
        this.fnSearch();
    }

    fnSearch=(e)=>{
        axios.get('http://localhost:4000/app/User')
        .then(response => {
            console.log('inside');
            this.setState({                
                userdata:response.data
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

    render(){
        return(
            <div class="DivOuterMain">
                This is User details.
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
                                                    <TableCell>Last Name</TableCell>
                                                    <TableCell>Email</TableCell>                                                   
                                                    <TableCell>Edit|Delete</TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                {this.state.userdata &&
                                                this.state.userdata.map(userdata=>{
                                                    return( 
                                                        <TableRow key={userdata.userName}>
                                                            <TableCell>{userdata._id}</TableCell>
                                                            <TableCell>{userdata.firstName}</TableCell>
                                                            <TableCell>{userdata.lastName}</TableCell>
                                                            <TableCell>{userdata.emailAddress}</TableCell>
                                                            <TableCell>{
                                                                <span>
                                                                    <button class="btn"><a ><EditIcon></EditIcon></a></button>
                                                                     | <button class="btn"><DeleteIcon></DeleteIcon></button> 
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
            
            
        );
    }
}

export default UserDetails
