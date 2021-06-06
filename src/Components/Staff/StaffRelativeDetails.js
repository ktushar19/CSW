import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Switch from '@material-ui/core/Switch';
import AddIcon from '@material-ui/icons/Add';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormLabel from '@material-ui/core/FormLabel';
import { Dropdown, Tooltip, Form } from 'react-bootstrap';
import TextField from "@material-ui/core/TextField";
import CheckRoundedIcon from '@material-ui/icons/CheckRounded';
import CloseIcon from '@material-ui/icons/Close';


class StaffRealativeDetails extends React.Component{
    constructor(){
        super()
        this.state = {
            open:false,
            fullWidth:true,
            maxWidth:'lg'
        }
        this.HandleChange = this.HandleChange.bind(this)
        this.handleClickOpen = this.handleClickOpen.bind(this)
        this.handleClose = this.handleClose.bind(this)
    }

    HandleChange(e)
    {
        e.preventDefault();    
        this.setState(
            {
                [e.target.name] : e.target.value,
            }
        )
    }

    handleClickOpen = (setOpen) => {
        setOpen(true);
      };
    
    handleClose = (setOpen) => {
        setOpen(false);
      };

    render(){
        const { classes } = this.props;
        return (
            <React.Fragment>
              <button className='btn' id="create" onClick={this.state.handleClickOpen}><AddIcon></AddIcon>New Relative</button>
              <Dialog
                fullWidth={this.state.fullWidth}
                maxWidth={this.state.maxWidth}
                //open={open}
                onClose={this.state.handleClose}
                aria-labelledby="max-width-dialog-title"
              >
                <DialogTitle id="max-width-dialog-title">Add Relatives</DialogTitle>
                <DialogContent>
                  <DialogContentText>
                  <div class="row">
                        <div class="col-sm-12">
                            <div class="toolbar-heading  margin-top-5 ">
                                    <span class="title-modules">
                                        Basic Data
                                    </span>
                                    <small> | Relative</small>
                            </div>
                            </div>
                         </div> 
                  </DialogContentText>
                  <form className={classes.form} noValidate>
                    <div class="row">
                            <div class="col-sm-3">
                                <div class="profile-head">
                                <div class="profile-area"></div>
                            <Form.Group>
                                <Form.File id="exampleFormControlFile1" label="Profile Image Upload" />
                            </Form.Group>
                            </div>
                            </div>
                            <div class="col-sm-9">
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
                                                    
                                                        />
                              </div>
                            </div>
                            <div class="col-sm-4">
                                <div class="form-group">
                                    <label for="exampleInputLastName">Last Name<span class="required">*</span></label>
                                    <input type='text' name="lastName" class="form-control" id="exampleInputLastName" placeholder=""  />
                                                  
                               </div>
                            </div>                 
                            </div>
                            <div class="row">
                                <div class="col-sm-4">
                                <div class="form-group">
                                    <label for="exampleInputmiddlename">Middle Name<span class="required">*</span></label>
                                    <input type="text" class="form-control" name="middleName" id="exampleInputmiddlename" placeholder="" />
                                    
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
                  </form>
                </DialogContent>
                <DialogActions>
                  <button onClick={this.state.handleClose} className='btn' color="primary"  id='submit'>
                    <CloseIcon></CloseIcon>Cancel
                  </button>
                  <button type='submit' className='btn' value='Submit' 
                                     id="submit">
                                        <CheckRoundedIcon></CheckRoundedIcon>Save
                                    </button>
                </DialogActions>
              </Dialog>
            </React.Fragment>
          );
        }
}

export default StaffRealativeDetails;