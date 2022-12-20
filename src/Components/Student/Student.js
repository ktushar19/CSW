import React, {useState} from 'react'
import '../../App.css';
//import Input from '../UI/Input';
import { Dropdown, Tooltip, Form } from 'react-bootstrap';
import TextField from "@material-ui/core/TextField";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';


function Student (props){
    const [students, setStudents] = useState({firstname: '', middlename:'', lastname: '', birthday: '', gender: '', faculty: '', familystatus: ''});
    //const [faculty, setFaculty] = useState({label: 'Engineering Faculty', label:'Financial Faculty', label:'Medicine Faculty'})
    
    //const [familystatus, setFamilystatus] = useState();
    // const [middlename, setMiddleName] = useState();
    // const [lastname, setLastName] = useState();

    const [items, setItems] = useState([]);

    
    const onSubmit = (e) =>{
        e.preventdefault();
        setItems([{...students}, {
            id: items.length,
            value: e.target.value
        }]);
    }

    return(
            <div className="DivOuterMain">
                <form onSubmit={onSubmit}>
                <div className="row">
                    <div className="col-sm-4 col-md-4 col-lg-4"></div>
                    <div className="col-sm-8 col-md-8 col-lg-8">
                        <div className="row">
                            <div className="col-sm-4 col-md-4 col-lg-4">
                                {/* <Input label="FirstName"                                      
                                    onChange={e => setStudents({...students, firstname: e.target.value})} 
                                    input={{
                                    id: 'FirstName',
                                    type: 'text',
                                    min: '1',   
                                    value:{students.firstname},
                                     name:'firstname',                                 
                                }} />    */}
                                <div class="form-group">
                                <label for="exampleInputFirstName">First Name<span class="required">*</span></label>
                                <input class="form-control" label="FirstName"  value={students.firstname} name='firstname'  
                                    onChange={e => setStudents({...students, firstname: e.target.value})}
                                                                      
                                 />    
                                 </div>             
                            </div>
                            <div className="col-sm-4 col-md-4 col-lg-4">
                                <div class="form-group">
                                    <label for="exampleInputFirstName">Middle Name<span class="required">*</span></label>
                                    <input class="form-control" label="MiddleName" 
                                    value={students.middlename} name='middlename'
                                    onChange={e => setStudents({...students, middlename: e.target.value})}
                                    />
                                </div>
                            </div>
                            <div className="col-sm-4 col-md-4 col-lg-4">
                                <div class="form-group">
                                    <label for="exampleInputFirstName">Last Name<span class="required">*</span></label>
                                    <input class="form-control" label="LastName" 
                                    value={students.lastname} name='lastname'
                                    onChange={e => setStudents({...students, lastname: e.target.value})}
                                    />
                                </div>    
                            </div> 
                        </div>
                    </div>
                    </div>
                    <div class="row">
                    <div class="col-sm-3 col-md-3 col-lg-3">
                        <div class="form-group">
                            <TextField
                                id="date"
                                label="Birthday"
                                type="date"
                                defaultValue="2017-05-24"
                                InputLabelProps={{
                                shrink: true,
                                }}
                                value={students.birthday}
                                 name='birthday'
                                onChange={e => setStudents({...students, birthday: e.target.value})}
                            />
                        </div>
                        </div>
                        <div class="col-sm-3 col-md-3 col-lg-3">
                        <FormControl component="fieldset">
                        <FormLabel component="legend">Gender</FormLabel>
                        <RadioGroup aria-label="gender" name="gender1" style={{display: "block"}} onChange={e => setStudents({...students, gender: e.target.value})} >
                            <FormControlLabel value="female" control={<Radio />} label="Female" name='gender' />
                            <FormControlLabel value="male" control={<Radio />} label="Male" name='gender'/>
                            <FormControlLabel value="other" control={<Radio />} label="Other" name='gender'/>
                        </RadioGroup>
                        </FormControl>
                        </div>
                        <div class="col-sm-3 col-md-3 col-lg-3">
                        <Form.Group  controlId="formGridState">
                            <Form.Label>Faculty</Form.Label>
                            <Form.Control as="select"  onChange={e => setStudents({...students, faculty: e.target.value})}>
                                <option >--Select the Faculty--</option>
                                <option >Engineering Faculty</option>
                                <option >Financial Faculty</option>
                                <option  >Medicine Faculty</option>                                
                            </Form.Control>
                          </Form.Group>
                        </div>
                        <div class="col-sm-3 col-md-3 col-lg-3">
                        <Form.Group  controlId="formGridState">
                            <Form.Label>Family Status</Form.Label>
                            <Form.Control as="select" defaultValue="Choose..." onChange={e => setStudents({...students, familystatus: e.target.value})}>
                                <option>Choose...</option>
                                <option >Live With Mother And Father</option>
                                <option >Live With Mother Only</option>
                                <option >Live With Father Only</option>
                            </Form.Control>
                        </Form.Group>
                        </div>
                </div>                
                {JSON.stringify(students)}
                <button type='submit' value='Add Log' >Submit</button>
                </form> 
                {/* <div className="row">
                        <div className="col-md-12">
                            <ol>
                                {items.map(item =>(
                                        <li key={item.id}>{item.firstname}, {item.lastname}, {item.middlename}</li>
                                ))
                                }
                            </ol>
                        </div>
                </div>               */}
            </div>
        )
}
export default Student