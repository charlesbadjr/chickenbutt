import React, { Component } from 'react';
import { Image } from 'semantic-ui-react';
import Family from './Styles/Family.png';

// may want to set Family as BG add other fotos to forground position relative. 

class ChuckFam extends Component {

    render() {
       return(
           <div className="family_Photo">
               
               <div >
                  <Image src={Family} alt="photo of Charlie family" />
               </div>
            </div>
    );
  }
}

export default ChuckFam;


