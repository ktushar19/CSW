
import React from 'react';
import './App.css';


//import interceptors from './Components/Authentication/interceptors';
import Login from './Components/Authentication/Login';
import Logout from './Components/Authentication/Logout';
import Dashboard from './Components/scp-school-admin-dashboard/Dashboard';
import Register from './Components/Authentication/Register';
import ForgotPassword from './Components/Authentication/ForgotPassword';
import ResetPage from './Components/Authentication/ResetPage';
import ResetPassword from './Components/Authentication/ResetPassword';
import ResponsiveDrawer from './Components/Menu/ResponsiveDrawer';
import MasterMenu from './Components/Menu/MasterMenu';
import Staff from './Components/Staff/Staff';
import Student from './Components/Student/Student';
import CreateAccount from './Components/create-account/CreateAccount';
import LoginPage from './Components/login-page/LoginPage';
import StaffDetails from './Components/Staff/StaffDetails';
import Copyright from './Components/Common/Copyright';
import ProtectedRoute from './Components/Authentication/ProtectedRoute';
import 'bootstrap/dist/css/bootstrap.min.css';
import ActivateAccount from './Components/Authentication/ActivateAccount';

/*new added started*/
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import MenuIcon from '@material-ui/icons/Menu';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { Dropdown } from 'react-bootstrap';
import PersonIcon from '@material-ui/icons/Person';
import MailIcon from '@material-ui/icons/Mail';
/*new added end  */

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
  useHistory,
} from "react-router-dom";
import { GridOverlay } from '@material-ui/data-grid';


/*new css start*/
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    //backgroundImage:url("../../Images/logo.jpg"),
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  blockheader:{
    height: '10vh',
  }
}));
/*new css end */


function App() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };


  let isUserAuthenticated = localStorage.getItem("jwtToken") !== null && localStorage.getItem("userName") !== null;
    return (
      <div className={classes.root}>
      <CssBaseline />
      <AppBar position="absolute" >
        <Toolbar className={classes.toolbar}>          
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            Dashboard
          </Typography>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon />              
            </Badge>
          </IconButton>
          <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="secondary">
                <MailIcon />
              </Badge>
            </IconButton>
          <div className="dropdown">
                <Dropdown>                    
                  <Dropdown.Toggle
                    variant="secondary btn-sm"
                    id="dropdown-basic">
                      <Typography noWrap>
                        <div className={clsx(classes.personIconAlignment)}>
                        <div className={clsx(classes.loginMessage)}><PersonIcon ></PersonIcon>Welcome {localStorage.getItem("userName")}</div>
                    
                      </div>                      
                    </Typography>
                  </Dropdown.Toggle>
                  <Dropdown.Menu >
                    <Dropdown.Item href="#">Profile</Dropdown.Item>
                    <Dropdown.Item href="/Logout">Logout</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>             
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon} >
          {/* <div id="logo-element"></div>          */}
        </div>
        <Divider />
         <List>{MasterMenu}</List> 
        <Divider />
         {/* <List>{secondaryListItems}</List> */}
      </Drawer>
      <main className={classes.content}>        
      <Container maxWidth="lg" className={classes.container}>
        <div className={classes.appBarSpacer} />        
        <div className={classes.blockheader}>
          {open?
          <IconButton onClick={handleDrawerClose}>
            <ArrowBackIcon />
          </IconButton>
          :<IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <ArrowForwardIcon />
          </IconButton>}        
        </div>
              <BrowserRouter>
                <Switch>
                  <Route path="/Login" exact component={Login} />
                  <Route path="/verify" exact component={ActivateAccount} />
                  <Route path="/Logout" exact component={Logout} />
                  <Route path="/" exact component={Dashboard} />
                  <Route path="/Register" exact component={Register} />
                  <Route path="/ForgotPassword" exact component={ForgotPassword} />
                  <Route path="/reset" exact component={ResetPage} />
                  <Route path="/ResetPassword" exact component={ResetPassword} />
                  <Route path="/MasterMenu" exact component={MasterMenu} />
                  <Route path="/Staff" exact component={Staff} />
                  <Route path="/StaffDetails" exact component={StaffDetails} />
                  <Route path="/Student" exact component={Student} />
                  <Route path="/CreateAccount" exact component={CreateAccount} />
                  <Route path="/Staff/:id" exact component={Staff} />
                </Switch>
            </BrowserRouter>
          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main>
    </div>
      
    );
}

export default App;
