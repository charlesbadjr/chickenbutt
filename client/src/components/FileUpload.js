import React, { Component } from 'react';
import axios from 'axios';
import {Button, Progress} from 'Semantic-UI-React';




class FileUpload extends Component {
  state = {
    selectedFile: null, percent: 33
  }

  fileSelectedHandler = event => {
  this.setState({
    selectedFile: event.target.files[0]
  })
}

increment = () =>
    this.setState({
      percent: this.state.percent >= 100 ? 0 : this.state.percent + 20,
 })

fileUploadHandler = () => {
  const fd = new FormData();
  fd.append('Image', this.state.selectedFile, this.state.selectedFile.name);
  axios.post({BlueFileSystem}, fd );

  onUploadProgress: progressEvent => {
    console.log('Upload Progress:' 
    + Math.round(progressEvent.loaded / progressEvent.total * 100 ))
  }
  then(res => {
  console.log(res);
  });
}

  render() {
    return (
      <div className="upload_File"> 

         <div>
             <input type="file" style={{display: 'none'}} 
             onChange={this.fileSelectedHandler}

             ref={fileInput => this.fileInput = fileInput} />
             < button onClick={() => this.fileInput.click()} > Browse </button>
             < button onClick={this.fileUploadHandler} > Upload File </button>
         </div>
        <div>
           <Progress percent={this.state.percent} indicating />
           <Button onClick={this.increment}>Progress</Button>
        </div>
     </div>
    
      );
   }
}


export default FileUpload;
