import React, { Component } from 'react'

import ResponsiveDrawer from '../../Components/Menu/ResponsiveDrawer';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Typography from '@material-ui/core/Typography';
import HomeIcon from '@material-ui/icons/Home';

import PersonIcon from '@material-ui/icons/Person';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import SchoolIcon from '@material-ui/icons/School';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import CenterFocusStrongIcon from '@material-ui/icons/CenterFocusStrong';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';



const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    paper: {
      padding: theme.spacing(2),
      overflow: 'auto',
    },
    fixedHeight: {
      height: 200,
    },
    breadcrumb:{
      paddingBottom: '10px',
    }
  }));
  

export default function Dashboard() {
    
    const classes = useStyles();
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
        return (
            <div class="dashboard">
              <Breadcrumbs aria-label="breadcrumb" className={classes.breadcrumb}>
                  <Link color="inherit" href="/Dashboard">
                    <HomeIcon />
                  </Link>
                  <Typography color="textPrimary">Dashboard</Typography>
                </Breadcrumbs>
                <Grid container spacing={2}>                
          <Grid item xs={12} md={4} lg={3} >
              <Paper className={fixedHeightPaper}>
                <div class="dash-card">
                  <ListItem>
                    <ListItemIcon>
                      <PersonIcon />
                    </ListItemIcon>
                    <div class="content">
                                <div class="text">Total Student</div>
                                <h5 class="number">530</h5>
                            </div>
                  </ListItem>
                  <hr />
                  <ListItem>
                    <ListItemIcon>
                      <AccountCircleIcon />
                    </ListItemIcon>
                    <div class="content">
                                <div class="text">Total Teacher</div>
                                <h5 class="number">14</h5>
                            </div>
                  </ListItem>
                </div>  
              </Paper>
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
              <div class="dash-card">
                  <ListItem>
                    <ListItemIcon>
                      <LocalOfferIcon />
                    </ListItemIcon>
                    <div class="content">
                                <div class="text">Department</div>
                                <h5 class="number">7</h5>
                            </div>
                  </ListItem>
                  <hr />
                  <ListItem>
                    <ListItemIcon>
                      <SchoolIcon />
                    </ListItemIcon>
                    <div class="content">
                                <div class="text">Courses</div>
                                <h5 class="number">35</h5>
                            </div>
                  </ListItem>
                </div>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
              <div class="dash-card">
                  <ListItem>
                    <ListItemIcon>
                      <CreditCardIcon />
                    </ListItemIcon>
                    <div class="content">
                                <div class="text">Expense</div>
                                <h5 class="number">$3205</h5>
                            </div>
                  </ListItem>
                  <hr />
                  <ListItem>
                    <ListItemIcon>
                      <AccountBalanceIcon />
                    </ListItemIcon>
                    <div class="content">
                                <div class="text">Income</div>
                                <h5 class="number">$35,325</h5>
                            </div>
                  </ListItem>
                </div>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
              <div class="dash-card">
                  <ListItem>
                    <ListItemIcon>
                      <CenterFocusStrongIcon />
                    </ListItemIcon>
                    <div class="content">
                                <div class="text">Our Center</div>
                                <h5 class="number">28</h5>
                            </div>
                  </ListItem>
                  <hr />
                  <ListItem>
                    <ListItemIcon>
                      <EmojiEmotionsIcon />
                    </ListItemIcon>
                    <div class="content">
                                <div class="text">Happy Clients</div>
                                <h5 class="number">528</h5>
                            </div>
                  </ListItem>
                </div>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
                {/* <Deposits /> */}
              </Paper>
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
                {/* <Deposits /> */}
              </Paper>
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
                {/* <Deposits /> */}
              </Paper>
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
                {/* <Deposits /> */}
              </Paper>
            </Grid>
            <Grid item xs={12} md={5} lg={4}>
              <Paper className={classes.paper}>
                {/* <Orders /> */}
              </Paper>
            </Grid>
            <Grid item xs={12} md={7} lg={8}>
              <Paper className={classes.paper}>
                {/* <Orders /> */}
              </Paper>
            </Grid>            
          </Grid>
            </div>            
        )
}