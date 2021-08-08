import React, { Component } from 'react'

import ResponsiveDrawer from '../../Components/Menu/ResponsiveDrawer'

class Dashboard extends Component {

    constructor(props) {
        super(props);
    }

  
  


    render() {
        return <div>
            <ResponsiveDrawer></ResponsiveDrawer>

            <ol class="list-group list-group-numbered">
                <li class="list-group-item d-flex justify-content-between align-items-start">
                    <div class="ms-2 me-auto">
                        <div class="fw-bold">Staff</div>
                        Numbers of staff members:
                    </div>
                    <span class="badge bg-primary rounded-pill">24</span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-start">
                    <div class="ms-2 me-auto">
                        <div class="fw-bold">Staff</div>
                        Number of staff members on leave:
                    </div>
                    <span class="badge bg-primary rounded-pill">10</span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-start">
                    <div class="ms-2 me-auto">
                        <div class="fw-bold">Student</div>
                        Number of students:
                    </div>
                    <span class="badge bg-primary rounded-pill">100</span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-start">
                    <div class="ms-2 me-auto">
                        <div class="fw-bold">Student</div>
                        Number of students on leave:
                    </div>
                    <span class="badge bg-primary rounded-pill">20</span>
                </li>
            </ol>
        </div>
    }

}
export default Dashboard