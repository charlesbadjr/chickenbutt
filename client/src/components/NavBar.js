import React, { Component } from 'react';
import { Menu, Icon } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleLogout } from '../reducers/user';
import { getNotifications } from '../reducers/notification'
//import styles from 'styled-components'

//const Nav_Header = styles.div`
//background-color: #222
//hight: 150px;
//padding: 20px;
//color: white;

//>h2 {
//  color: red;
// }
//`

class NavBar extends Component {


  componentDidMount() {
    const { dispatch, user} = this.props
    if (user){
      dispatch(getNotifications(user))
    } 
  }


  rightNavs = () => {
    const { user, dispatch, history } = this.props;

    if (user.id) {
      return (     
          <div className="navbar">
                <Menu.Menu className="navBar_logedIn">
                  <Link to="/profile">
                      <Icon name='user'/>Profile
                  </Link>
              
            
              <Link to="#" onClick={ () => dispatch(handleLogout(history))}>
                Logout
              </Link>
              </Menu.Menu>
          </div>
      
      );
    } 
    else
     return (
      <div className="navBar" > 
          <Menu.Menu className="navBar_logedOut_right" >

               <Link to="/login">
                  Login
               </Link>

          </Menu.Menu>
      </div>
    );
  }

render() {
  return  (
    <div className="navbar">
    <Menu.Menu className="navBar_logedOut_left">

          <Link to="/">
                Charlie|   
          </Link>  
        
        
          <Link to="/Todo" >
            Projects|
          </Link>
       
        
          <Link to="/Contact" >
            Contact|
          </Link>
        
      
          <Link to="/PayMe" >
            Donate
          </Link>
        
      { this.rightNavs() }
      
      </Menu.Menu>
   </div>
  );
  }
}


const mapStateToProps = state => {
  return { user: state.user };
};

export default withRouter(connect(mapStateToProps)(NavBar));
