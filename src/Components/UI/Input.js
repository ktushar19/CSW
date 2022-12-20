import classes from "../UI/Input.module.css";
import { Form } from 'react-bootstrap';

const Input = (props) =>{
    return(
        <div className={classes.input}>
            <label htmlFor={props.input.id}>{props.label}</label>
            <input className="form-control" {...props.input} name={props.name} value={props.value}/>
        </div>
    )
}

export default Input;