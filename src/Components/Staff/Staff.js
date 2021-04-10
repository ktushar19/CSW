import React, {Component} from 'react'
import '../../App.css';

import MasterMenu from '../Menu/MasterMenu'
import Divider from '@material-ui/core/Divider'
import { green } from '@material-ui/core/colors';


import TextField from "@material-ui/core/TextField";

import TopBar from '../Common/TopBar'
import Footer from '../Common/Footer'


class Staff extends Component{

    constructor(props)
    {
        super(props);
        //this.fnCreateAccount = this.fnCreateAccount.bind(this);
        this.HandleChange = this.HandleChange.bind(this);
        //this.fnShowError = this.fnShowError.bind(this);
        
        this.state = {
            FirstName :"",
            MiddleName :"",
            LastName :"",
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

    render(){
        return(
            <div class="DivOuterMain">
                
                <TopBar></TopBar>

                <table class="MainSection">
                    <tr>
                        <td class="MainMenuSection">
                            <div class="DivSectionMainTitleLeft">
                                    Staff Management
                                </div>
                            <Divider ></Divider>
                            <MasterMenu></MasterMenu>
                                
                            
                            
                        </td>
                        <td class="MainContentSection">
                            
                            <div class="DivSectionMainTitle">
                                Staff Management
                            </div>
                            <Divider ></Divider>
                            <div class="DivSectionTitleContent">
                            <div class="DivSectionTitle">
                                Basic Details
                                <Divider></Divider>
                                <div class="DivSectionContent">
                                    <div class='FieldMarginNormal'>
                                        <TextField
                                            label="First Name"
                                            variant= "outlined"
                                            id='idFirstName'
                                            value={this.state.FirstName}
                                            onChange={this.HandleChange}
                                            name="FirstName"
                                            
                                        />

                                        <TextField
                                            label="Middle Name"
                                            variant= "outlined"
                                            id='idMiddleName'
                                            value={this.state.MiddleName}
                                            onChange={this.HandleChange}
                                            name="MiddleName"
                                            
                                        />

                                        <TextField
                                            label="Last Name"
                                            variant= "outlined"
                                            id='idLastName'
                                            value={this.state.LastName}
                                            onChange={this.HandleChange}
                                            name="LastName"
                                            
                                        />

                                    </div>
                                    <div class='MarginNormal'>
                                        
                                    </div>
                                    <div class='MarginNormal'>
                                        
                                    </div>
                                </div>
                            </div>
                            </div>

                            <div class="DivSectionTitle">
                                This is a Details Section
                            </div>
                            
                        </td>
                    </tr>
                    
                </table>
                <Footer></Footer>
            </div>
        )
    }
}
export default Staff