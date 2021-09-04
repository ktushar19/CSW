import logo from './logo.svg';
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
import Footer from './Components/Common/Footer';
import UpdateStaff from './Components/Staff/UpdateStaff';
import ProtectedRoute from './Components/Authentication/ProtectedRoute';
import 'bootstrap/dist/css/bootstrap.min.css';
import ActivateAccount from './Components/Authentication/ActivateAccount';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
  useHistory,
} from "react-router-dom";


function App() {
  let isUserAuthenticated = localStorage.getItem("jwtToken") !== null && localStorage.getItem("userName") !== null;
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" exact component={LoginPage} />
            <Route path="/Login" exact component={Login} />
            <Route path="/verify" exact component={ActivateAccount} />
            <Route path="/Logout" exact component={Logout} />
            <Route path="/Dashboard" exact component={Dashboard} />
            <Route path="/Register" exact component={Register} />
            <Route path="/ForgotPassword" exact component={ForgotPassword} />
            <Route path="/reset" exact component={ResetPage} />
            <Route path="/ResetPassword" exact component={ResetPassword} />
            <Route path="/MasterMenu" exact component={MasterMenu} />
            <Route path="/Staff" exact component={Staff} />
            <Route path="/StaffDetails" exact component={StaffDetails} />
            <Route path="/Student" exact component={Student} />
            <Route path="/CreateAccount" exact component={CreateAccount} />
            <Route path="/LoginPage" exact component={LoginPage} />
            <Route path="/Staff/:id" exact component={Staff} />
          </Switch>
          <Footer></Footer>
        </div>
      </BrowserRouter>
    );
}

export default App;
