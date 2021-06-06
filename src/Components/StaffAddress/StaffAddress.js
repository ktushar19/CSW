import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TabPanel from '@material-ui/lab/TabPanel'
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import NewRelativeDialog from './NewRelativeDialog';


class StaffAddress extends Component {
  constructor(){
    super();
    this.state = {
      address: '',
      city: '',
      postcode: '',
      state: '',
      email: '',
      address2: '',
      country: '',
      mobile:'',
      homepone:'',
      strErrMessage:"",    
      activeTabIndex: 0,  
  }
  this.HandleChange = this.HandleChange.bind(this)
  }

  HandleChange (e) {
    e.preventDefault();    
        this.setState(
            {
                [e.target.name] : e.target.value,
            }
        )
  };


  render(){ 
    return (
      <div >
       <div class="row">
                      <div class="col-sm-4">
                      <div class="form-group">
                              <label for="exampleInputAddress">Address</label>
                              <input type="text" class="form-control" id="exampleInputAddress"  placeholder="" />
                          </div>
                      </div>  
                      <div class="col-sm-4">
                          <div class="form-group">
                              <label for="exampleInputCity">City<span class="required">*</span></label>
                              <input type='text' name="City" class="form-control" id="exampleInputCity" placeholder="" 
                                           />
                          </div>
                      </div>
                      <div class="col-sm-4">
                          <div class="form-group">
                              <label for="exampleInputPost">Post Code<span class="required">*</span></label>
                              <input type='text' name="post" class="form-control" id="exampleInputPost" placeholder=""
                                              />
                          </div>
                      </div>                 
           </div>
           <div class="row">
                      <div class="col-sm-4">
                      <div class="form-group">
                              <label for="exampleInputAddress">Area/State</label>
                              <input type="text" class="form-control" id="exampleInputAddress"  placeholder="" />
                          </div>
                      </div>  
                      <div class="col-sm-4">
                          <div class="form-group">
                              <label for="exampleInputCity">2nd Address Line<span class="required">*</span></label>
                              <input type='text' name="City" class="form-control" id="exampleInputCity" placeholder="" 
                                           />
                          </div>
                      </div>
                      <div class="col-sm-4">
                          <div class="form-group">
                              <label for="exampleInputPost">Country<span class="required">*</span></label>
                              <input type='text' name="post" class="form-control" id="exampleInputPost" placeholder=""
                                              />
                          </div>
                      </div>                 
           </div>
           <div class="row">
                      <div class="col-sm-4">
                      <div class="form-group">
                              <label for="exampleInputAddress">Contact e-mail</label>
                              <input type="text" class="form-control" id="exampleInputAddress"  placeholder="" />
                          </div>
                      </div>  
                      <div class="col-sm-4">
                          <div class="form-group">
                              <label for="exampleInputCity">Mobile Phone<span class="required">*</span></label>
                              <input type='text' name="City" class="form-control" id="exampleInputCity" placeholder="" 
                                           />
                          </div>
                      </div>
                      <div class="col-sm-4">
                          <div class="form-group">
                              <label for="exampleInputPost">Home Phone<span class="required">*</span></label>
                              <input type='text' name="post" class="form-control" id="exampleInputPost" placeholder=""
                                              />
                          </div>
                      </div>                 
           </div>
        </div>
    );
  }
  
}
export default StaffAddress;
