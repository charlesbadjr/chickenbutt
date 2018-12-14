import React, { Component } from 'react';
import { Image, Button } from 'semantic-ui-react';
import Spotify2 from './Styles/Spotify2.png';



class Songlist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: "",
      deviceId: "",
      loggedIn: false,
      error: "",
      trackName: "Track Name",
      artistName: "Artist Name",
      albumName: "Album Name",
      playing: false,
      position: 0,
      duration: 0,
    }}

 componentDidMount = () => {

  // axios calls to rails app. asks for token.
  //axios.get{./api/spotify}
 }

// upon mount call to spotify for most listened to
// getPlaylist 

// push to this.state




linkTOSONG = () => {

}

render() {
    return(
      <div  className="songs">
        <button href="https://open.spotify.com/album/3a0UOgDWw2pTajw85QPMiz"  >   
             <Image src={Spotify2} alt="spotifyLogo" />
        </button>
         <div >
         <h1> What Im Listening to: </h1>
             <ul className="song_List" >
                <li>
                 <Button color="green" > {this.state.song[0]} by {this.state.band[0]} 
                  </Button> </li>
                <li> 
                <Button color="green" >{this.state.song[1]} by {this.state.band[1]} 
                  </Button></li>
                <li> 
                <Button color="green" >{this.state.song[2]} by {this.state.band[2]} 
                  </Button></li>
                <li> 
                <Button color="green" >{this.state.song[3]} by {this.state.band[3]} 
                  </Button></li>
                <li> 
                <Button color="green" > {this.state.song[4]} by {this.state.band[4]} 
                  </Button></li>
              </ul>

         </div>   
      </div>
    );
}

}

export default Songlist; 