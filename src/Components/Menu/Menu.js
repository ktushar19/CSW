import React, {Component} from 'react'
import '../../App.css';

import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import {FcNext,FcCheckmark,FcCustomerSupport} from 'react-icons/fc'


class Menu extends Component{

    

    render(){
        return(
            <div class="DivMenu">
                 <ul>
                        <li><div><span>Teacher Maintenance</span><FcNext></FcNext></div>
                            <div class="DivSubMenu">
                                <ul>
                                    <li><FcCheckmark></FcCheckmark><a href="Staff">Add Staff</a></li>
                                    <li><FcCheckmark></FcCheckmark><a href="Student">Search Staff</a></li>
                                </ul>
                            </div>
                        </li>
                        <li><div><span>Student Maintenance</span><FcNext></FcNext></div>
                            <div class="DivSubMenu">
                                <ul>
                                    <li><FcCheckmark></FcCheckmark><a href="Staff">Add Staff</a></li>
                                    <li><FcCheckmark></FcCheckmark><a href="Student">Search Staff</a></li>
                                </ul>
                            </div>
                        </li>
                        <li><div><span>Teacher-Parent Interaction</span><FcNext></FcNext></div>
                            <div class="DivSubMenu">
                                <ul>
                                    <li><FcCustomerSupport></FcCustomerSupport><a href="Staff">Add Staff</a></li>
                                    <li><FcCheckmark></FcCheckmark><a href="Student">Search Staff</a></li>
                                </ul>
                            </div>

                        </li>
                        <li><div><span>World class reporting</span><FcNext></FcNext></div>
                            <div class="DivSubMenu">
                                <ul>
                                    <li><FcCheckmark></FcCheckmark><a href="Staff">Add Staff</a></li>
                                    <li><FcCheckmark></FcCheckmark><a href="Student">Search Staff</a></li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                            
            </div>
        )
    }
}
export default Menu