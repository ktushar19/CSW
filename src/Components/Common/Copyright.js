import React, {Component} from 'react'
import '../../App.css';
import '../Styles.css';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';


export default function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center" className={"footer"}>
        {'Copyright © '}
        Site designed and developed by
        <Link color="inherit" href="#">
           TusharKashid
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }
