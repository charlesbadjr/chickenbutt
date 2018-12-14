import React, { Component } from 'react';
import NoMatch from './NoMatch';
import NavBar from './NavBar';
import Login from './Login';
import { Switch, Route } from 'react-router-dom';
import Register from './Register';
import Flash from './Flash';
import Home from './Home';
import ProtectedRoute from './ProtectedRoute';
import AuthRoute from './AuthRoute';
import FetchUser from './FetchUser';
import Footer from './Footer';
// import Profile from './Profile';
// import Editprofile from './Editprofile'
import PaymentSuccess from './PaymentSuccess';
import PayMe from './PayMe';
import Todo from './Todo';
import Contact from './Contact';
import Songlist from './Songlist';
import ChuckFam from './Family';





class App extends Component {
  render() {
    return (
      <div>
        <div >
          <NavBar />
          <Flash />
            <FetchUser>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/payment_success' component={PaymentSuccess} />
              <Route exact path='/PayMe' component={PayMe} />
              <Route exact path='/Songlist' component={Songlist} />
              <Route exact path='/Family' component={ChuckFam} />
              <Route exact path='/Todo' component={Todo} />
              
              <Route exact path='/Contact' component={Contact} />
              <AuthRoute exact path='/login' component={Login} />
              <AuthRoute exact path='/register' component={Register} />
              <Route component={NoMatch} />
            </Switch>
          </FetchUser>
        </div >
           < Footer />
      </div>
    );
  }
}

export default App;