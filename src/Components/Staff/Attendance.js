import React, {useState, useEffect} from "react";
import axios from 'axios';
import { List, ListItem, ListItemText, Table} from '@material-ui/core';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TablePagination from '@material-ui/core/TablePagination';
import Paper from '@material-ui/core/Paper';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';

export default function Attendance(){
    const time = null;
    const [ctime, setCTime] = useState(time)
    const [timeout, setTimeOut] = useState(time)
    const [userName, setUserName] = useState([]);

    const fnFetch = () =>{
        axios.get('http://localhost:4000/app/Staff')
        .then(response => {
            console.log(response);
            const users = response.data;
            setUserName(users);
        });
    }
    const handleTimeIn = () =>{
        let time = new Date().toLocaleTimeString();
        setCTime(time);
    }
    const handleTimeOut = () =>{
        let time = new Date().toLocaleTimeString();
        setTimeOut(time);
    }
    
    useEffect(() => fnFetch(), []);

return(
    <div class="dashboard">
        <div class="row">
        <div class="col-sm-12">
            {
                userName.map((user) => 
                <>
                <div class="row">
                    <div class="col-md-4">
                        <label for="exampleInputUsername">FirstName</label>
                        <div class="input-group ">                                        
                            <input type="text" class="form-control"  name="userName" aria-label="Recipient's username" 
                            aria-describedby="basic-addon2" id='idUserName' value={user.firstName} disabled/>                                    
                        </div>
                    </div>
                    <div class="col-md-4">
                        <label for="exampleInputUsername">LastName</label>
                        <div class="input-group ">                                        
                            <input type="text" class="form-control"  name="userName" aria-label="Recipient's username" 
                            aria-describedby="basic-addon2" id='idUserName' value={user.lastName } disabled/>                                    
                        </div>
                    </div>
                    <div class="col-md-4"></div>                    
                </div>
                <div class="row">
                    <div class="col-md-4">
                        <label for="exampleInputUsername">TimeIn</label>
                        <div class="input-group ">                                        
                            <input type="text" class="form-control" name="userName" aria-label="Recipient's username" 
                            aria-describedby="basic-addon2" id='idUserName' value={ctime} disabled/>                                    
                        </div>
                        <button className='button timeIn' onClick={handleTimeIn}>Time In</button>
                    </div>
                    <div class="col-md-4">
                    <label for="exampleInputUsername">TimeOut</label>
                        <div class="input-group ">                                        
                            <input type="text" class="form-control"  name="userName" aria-label="Recipient's username" 
                            aria-describedby="basic-addon2" id='idUserName' value={timeout} disabled/>                                    
                        </div>
                        <button className='button timeOut' onClick={handleTimeOut}>Time Out</button>
                    </div>
                </div>
                </>
                )
            }
                                     
        </div>
    </div> 
    </div>
    
)
}

