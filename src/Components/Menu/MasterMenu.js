import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
import DateRangeIcon from '@material-ui/icons/DateRange';
import ClassIcon from '@material-ui/icons/Class';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import SyncAltIcon from '@material-ui/icons/SyncAlt';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import SettingsIcon from '@material-ui/icons/Settings';
import Link from '@material-ui/core/Link';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider'
import Collapse from '@material-ui/core/Collapse'
import IconExpandLess from '@material-ui/icons/ExpandLess'
import IconExpandMore from '@material-ui/icons/ExpandMore'
import IconLibraryBooks from '@material-ui/icons/LibraryBooks'



function MasterMenu () {
  const [open, setOpen] = React.useState(false)

  function handleClick() {
    setOpen(!open)
  }
return(
  
  <div class="mastermenu">                
    <Link color="inherit" href="/Dashboard">
        <ListItem button>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
    </Link>
    <ListItem button onClick={handleClick} >
        <ListItemIcon >
          <IconLibraryBooks />
        </ListItemIcon>
        <ListItemText primary="HR Management" />
        {open ? <IconExpandLess /> : <IconExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <Divider />
        <List component="div" disablePadding>
          <ListItem button >
            <ListItemText inset primary="Leave Notification" />
          </ListItem>
          <Link color="inherit" href="/StaffDetails">
            <ListItem button >
              <ListItemText inset primary="Employees" />
            </ListItem>
          </Link>
          <ListItem button >
            <ListItemText inset primary="Departments" />
          </ListItem>
          <ListItem button >
            <ListItemText inset primary="Documents" />
          </ListItem>
        </List>
      </Collapse>
    <ListItem button>
      <ListItemIcon>
        <DateRangeIcon />
      </ListItemIcon>
      <ListItemText primary="Accounting" />
    </ListItem>   
  <ListItem button>
      <ListItemIcon>
        <ClassIcon />
      </ListItemIcon>
      <ListItemText primary="Pay Slip" />
    </ListItem>
        <ListItem button>
          <ListItemIcon>
            <SupervisorAccountIcon />
          </ListItemIcon>
          <ListItemText primary="All Timesheets" />
        </ListItem>
    <Link color="inherit" href="/Attendance">
    <ListItem button>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Attendance" />
    </ListItem>
    </Link>
  <ListItem button>
    <ListItemIcon>
      <SettingsIcon />
    </ListItemIcon>
    <ListItemText primary="Configurations" />
  </ListItem>  
</div>
);
}

export default MasterMenu

