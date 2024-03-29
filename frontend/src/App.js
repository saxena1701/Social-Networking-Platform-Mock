import React , {Fragment} from 'react'
import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Landing from "./components/layout/Landing"
import Navbar from "./components/layout/Navbar"
import Register from "./components/auth/Register"
import Login from "./components/auth/Login"
import Dashboard from './components/dashboard/Dashboard';
import PrivateRoute from './components/routing/PrivateRoute';
import CreateProfile from './components/profile-form/CreateProfile';
import EditProfile from './components/profile-form/EditProfile';
import Profiles from './components/profiles/Profiles'
import Profile from './components/profile/Profile';
//Redux
import {Provider} from 'react-redux'
import store from "./store"
import Alert from './components/layout/Alert'
import {loadUser} from './actions/auth'
import setAuthToken from './utils/setAuthToken';
import { useEffect } from 'react';


if(localStorage.token){
  setAuthToken(localStorage.token)
}
function App(){


  useEffect(()=>{
    store.dispatch(loadUser());
  })

  return(
    <Provider store={store}>
      <Router>
      <Fragment>
      <Navbar></Navbar>
      <Route exact path="/" component={ Landing }/>
      <section className="container">
      <Alert/>
        <Switch>
          <Route exact path="/register" component={Register}/>
          <Route exact path="/login" component={Login}/>
          <PrivateRoute exact path="/dashboard" component={Dashboard}/>
          <PrivateRoute exact path="/create-profile" component={CreateProfile}/>
          <PrivateRoute exact path="/edit-profile" component={EditProfile}/>
          <PrivateRoute exact path="/profiles" component={Profiles}/>
          <PrivateRoute exact path="/profile/:id" component={Profile}/>

        </Switch>
      </section>
  </Fragment>
    </Router>
    </Provider>
  )
}

export default App;
