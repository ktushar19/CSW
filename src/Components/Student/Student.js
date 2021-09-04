import React, {Component} from 'react'
import '../../App.css';

import MasterMenu from '../Menu/MasterMenu'
import Divider from '@material-ui/core/Divider'
import { green } from '@material-ui/core/colors';

import TopBar from '../Common/TopBar'


class Student extends Component{

    

    render(){
        return(
            <div class="DivOuterMain">
                <TopBar></TopBar>
                <table class="MainSection">
                    <tr>
                        <td class="MainMenuSection">
                            <div class="DivSectionMainTitleLeft">
                                    Student Management
                                </div>
                            <Divider ></Divider>
                            <MasterMenu></MasterMenu>
                                
                            
                            
                        </td>
                        <td class="MainContentSection">
                            
                            <div class="DivSectionMainTitle">
                                Student Management
                            </div>
                            <Divider ></Divider>
                            
                            <div class="DivSectionTitle">
                                This is a Button Section
                            </div>

                            <div class="DivSectionTitle">
                                This is a Details Section
                            </div>
                            
                        </td>
                    </tr>
                    
                </table>
            </div>
        )
    }
}
export default Student