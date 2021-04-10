import React, {Component} from 'react'
import '../../App.css';

import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


class MasterMenu extends Component{

    

    render(){
        return(
            <div class="DivMasterMenu">
                            <Accordion style={{width:"250px",marginBottom:"10px"}}>
                                <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                                

                                >
                                <Typography>Staff Management</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                <Typography>
                                <div class='DivMasterSubMenu'>
                                                <ul>
                                                    <li><a href="Staff">Teacher Maintenance</a></li>
                                                    <li><a href="Student">Student Maintenance</a></li>
                                                    <li><a href="Student">Teacher-Parent Interaction</a></li>
                                                    <li><a href="Staff">World class reporting</a></li>
                                                </ul>
                                            </div>
                                </Typography>
                                </AccordionDetails>
                </Accordion>
                <Accordion style={{width:"250px",marginBottom:"10px"}}>
                                <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                                >
                                <Typography>Student Management</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                <Typography>
                                <div class='DivMasterSubMenu'>
                                                <ul>
                                                    <li><a href="Staff">Teacher Maintenance</a></li>
                                                    <li><a href="Student">Student Maintenance</a></li>
                                                    <li><a href="Student">Teacher-Parent Interaction</a></li>
                                                    <li><a href="Staff">World class reporting</a></li>
                                                </ul>
                                            </div>
                                </Typography>
                                </AccordionDetails>
                </Accordion>
                <Accordion style={{width:"250px",marginBottom:"10px"}}>
                                <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                                >
                                <Typography>Account Management</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                <Typography>
                                <div class='DivMasterSubMenu'>
                                                <ul>
                                                    <li><a href="Staff">Teacher Maintenance</a></li>
                                                    <li><a href="Student">Student Maintenance</a></li>
                                                    <li><a href="Student">Teacher-Parent Interaction</a></li>
                                                    <li><a href="Staff">World class reporting</a></li>
                                                </ul>
                                            </div>
                                </Typography>
                                </AccordionDetails>
                </Accordion>
                <Accordion style={{width:"250px",marginBottom:"10px"}}>
                                <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                                >
                                <Typography>Exams Management</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                <Typography>
                                <div class='DivMasterSubMenu'>
                                                <ul>
                                                    <li><a href="Staff">Teacher Maintenance</a></li>
                                                    <li><a href="Student">Student Maintenance</a></li>
                                                    <li><a href="Student">Teacher-Parent Interaction</a></li>
                                                    <li><a href="Staff">World class reporting</a></li>
                                                </ul>
                                            </div>
                                </Typography>
                                </AccordionDetails>
                </Accordion>
                <Accordion style={{width:"250px",marginBottom:"10px"}}>
                                <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                                >
                                <Typography>Results</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                <Typography>
                                <div class='DivMasterSubMenu'>
                                                <ul>
                                                    <li><a href="Staff">Teacher Maintenance</a></li>
                                                    <li><a href="Student">Student Maintenance</a></li>
                                                    <li><a href="Student">Teacher-Parent Interaction</a></li>
                                                    <li><a href="Staff">World class reporting</a></li>
                                                </ul>
                                            </div>
                                </Typography>
                                </AccordionDetails>
                </Accordion>
                <Accordion style={{width:"250px",marginBottom:"10px"}}>
                                <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                                >
                                <Typography>Configuration</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                <Typography>
                                <div class='DivMasterSubMenu'>
                                                <ul>
                                                    <li><a href="Staff">Teacher Maintenance</a></li>
                                                    <li><a href="Student">Student Maintenance</a></li>
                                                    <li><a href="Student">Teacher-Parent Interaction</a></li>
                                                    <li><a href="Staff">World class reporting</a></li>
                                                </ul>
                                            </div>
                                </Typography>
                                </AccordionDetails>
                </Accordion>
            </div>
        )
    }
}
export default MasterMenu