import React from 'react'
import ReactDOM from 'react-dom';
import { Component } from 'react'
import { Image } from 'semantic-ui-react';
import  GitHub  from './Styles/GitHub.png';
import  Facebook  from './Styles/Facebook.png';
import  Linkedin from './Styles/Linkedin.png';
import Email from './Styles/Email.png'
import { SocialIcon } from 'react-social-icons';

 class Footer extends Component {




    render() {

    return(
        <footer className="footer">
          <h5 > 
            Get in Touch:
          </h5>
          <div className="socialIcon">
          
            <div>
              <SocialIcon url="https://www.linkedin.com/in/charlie-jergins/" style={{ height: 100, width: 100 }}/>
            </div>
         
            <div>
               <SocialIcon url="https://github.com/charlesbadjr" style={{ height: 100, width: 100 }}/>
            </div>
            
            <div >
            <SocialIcon url="http://facebook.com/EdwardoCharlaldo" style={{ height: 100, width: 100 }}/>
            </div>
            
            <div>
            <SocialIcon url="https://twitter.com/chuckjergins" style={{ height: 100, width: 100 }}/>
            </div>
            
            <div>
            <SocialIcon url="https://codepen.io/Charlesbadjr/" color="blue" style={{ height: 100, width: 100 }}/>
            </div>
            
            <div>
            <SocialIcon url="jerginscharlie@gmail.com" style={{ height: 100, width: 100 }}/>
            </div>

          </div>
          <h6> 
            Powered By Coffee
          </h6>
        </footer>
    );   
  }
 }

export default Footer;
