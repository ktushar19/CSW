import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Student from '../Student/Student';
import StaffAddress from '../StaffAddress/StaffAddress';
import StaffAdditionalAddress from '../StaffAddress/StaffAdditionalAddress'
import NewRelativeDialog from '../StaffAddress/NewRelativeDialog'
import { Divider } from '@material-ui/core';

export default function Detailstab() {
    //const classes = useStyles();
    const [selectedTab, setselectedTab] = React.useState(0);


    const handleChange = (event, newValue) => {
        setselectedTab(newValue);
    };

    return (
        <div>
            <AppBar position="static">
                <Tabs value={selectedTab}
                    onChange={handleChange}
                    variant="fullWidth"
                    style={{ color: "white",backgroundColor:'#3f51b5', }}>

                    <Tab label="Contact" />                    
                    <Tab label="Additional Addresses" />
                    <Tab label="Relatives" />
                </Tabs>
            </AppBar>
            <div style={{ backgroundColor:'#fff',padding:'30px 10px', }}>
            {selectedTab == 0 && <StaffAddress />}
            {selectedTab == 1 && <StaffAdditionalAddress />}
            {selectedTab == 2 && <NewRelativeDialog />}
            </div>
            

        </div>
    )
}

