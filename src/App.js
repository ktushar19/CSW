import logo from './logo.svg';
import './App.css';

import Login from './Components/Authentication/Login'
import Register from './Components/Authentication/Register'
import ResponsiveDrawer from './Components/Menu/ResponsiveDrawer'
import MasterMenu from './Components/Menu/MasterMenu'
import Staff from './Components/Staff/Staff'
import Student from './Components/Student/Student'
import CreateAccount from './Components/create-account/CreateAccount';
import LoginPage from './Components/login-page/LoginPage';



import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
  useHistory,
} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Route path="/" exact component={LoginPage} />
          <Route path="/Login" exact component={Login} />
          <Route path="/Register" exact component={Register} />
          <Route path="/ResponsiveDrawer" exact component={ResponsiveDrawer} />
          <Route path="/MasterMenu" exact component={MasterMenu} />
          <Route path="/Staff" exact component={Staff} />
          <Route path="/Student" exact component={Student} />
          <Route path="/CreateAccount" exact component={CreateAccount} />
          <Route path="/LoginPage" exact component={LoginPage} />
        </Switch>
      </BrowserRouter>
  );
}

export default App;
