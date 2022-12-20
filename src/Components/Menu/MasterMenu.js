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

export const MasterMenu = (
  <div class="mastermenu">                
    <Link color="inherit" href="/Dashboard">
        <ListItem button>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
    </Link>
    <ListItem button>
      <ListItemIcon>
        <DateRangeIcon />
      </ListItemIcon>
      <ListItemText primary="Calendar" />
    </ListItem>   
  {/* <ListSubheader inset>MANAGEMENT</ListSubheader> */}
  <ListItem button>
      <ListItemIcon>
        <ClassIcon />
      </ListItemIcon>
      <ListItemText primary="Classes" />
    </ListItem>
    <Link color="inherit" href="/StaffDetails">
        <ListItem button>
          <ListItemIcon>
            <SupervisorAccountIcon />
          </ListItemIcon>
          <ListItemText primary="Staff" />
        </ListItem>
    </Link>
    <Link color="inherit" href="/Student">
    <ListItem button>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Students" />
    </ListItem>
    </Link>
  <ListItem button>
    <ListItemIcon>
      <ContactPhoneIcon />
    </ListItemIcon>
    <ListItemText primary="Personnel & Contacts" />
  </ListItem>
  <ListItem button>
    <ListItemIcon>
      <SyncAltIcon />
    </ListItemIcon>
    <ListItemText primary="Enrollments" />
  </ListItem>
  <ListItem button>
    <ListItemIcon>
      <AssignmentIcon />
    </ListItemIcon>
    <ListItemText primary="CRM" />
  </ListItem>
  <ListItem button>
    <ListItemIcon>
      <PersonAddIcon />
    </ListItemIcon>
    <ListItemText primary="User Accounts" />
  </ListItem>
  <ListItem button>
    <ListItemIcon>
      <SettingsIcon />
    </ListItemIcon>
    <ListItemText primary="Configurations" />
  </ListItem>
</div>
);

export default MasterMenu

