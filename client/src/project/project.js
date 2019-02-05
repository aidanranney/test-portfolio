import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import Result from './result';


class Project extends Component {
    constructor(props){
        super(props);
        this.state = {
            selectedFile: null,
            image: null,
            progressIndicator: 0,
            showResult: false,
            description: ''
        }
    }

    fileChangedHandler = (event) => {
        this.setState({selectedFile: event.target.files[0]});
        let reader = new FileReader();
        reader.onload = (e) => {
            this.setState({image: e.target.result});
        };
        reader.readAsDataURL(event.target.files[0]);
    }

    uploadHandler = () => {
        this.setState({progressIndicator: 25});
        console.log(this.state.selectedFile);
        let formData = new FormData();
        formData.append('image', this.state.selectedFile)
        fetch('https://arusers.herokuapp.com/api/upload', {
            method: 'POST',
            body: formData
        })
        .then(res => {
            this.setState({progressIndicator: 75})
            return res.json();
        })
        .then(result => {
            console.log(JSON.stringify(result));
            this.setState({progressIndicator: 90});
            return JSON.parse(result.response.text)
            })
        .then(description => {
            console.log(JSON.stringify(description.BestOutcome))
            this.setState({progressIndicator: 100, showResult: true, description: description.BestOutcome.Description});
        })
        .catch(err => {console.log(err);})
     }

    isUploading() {
        if (this.state.progressIndicator > 0 && this.state.progressIndicator < 100) {
            return <p>Please wait... image is uploading</p>
        } else if (this.state.progressIndicator === 100) {
            return (
                <Result description={this.state.description} image={this.state.image} clickHandler={this.passClickHandler} />
                )
        } else {
            return null
        }
    }

    passClickHandler = () => {
        this.setState({progressIndicator: 0});
      }

    render() {
        return (
            <div id='project' className='jumbotron'>
                <h1 className='display-4'>Our sophisticated deep learning machines have the ability to
                describe your pictures in far, far, far less than a thousand words.</h1>
                <br />
                <h2>Would you like them to describe an image?</h2>
                <br />
                <hr className='my-4' />
                <h3>Choose an image to upload.</h3>
                <br />
                <input size='60' name='image' type='file' onChange={this.fileChangedHandler} />
                <br />
                <br />
                <button className="btn btn-primary btn-lg" onClick={this.uploadHandler}>Upload</button>
                <br />
                <br />
                <div id="progressBar" className="progress" style={{width: '40%'}}>
                    <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow={this.state.progressIndicator} aria-valuemin="0" aria-valuemax="100" style={{width: this.state.progressIndicator +'%'}}>
                    </div>
                </div>  
            {this.isUploading()}
            </div>                 
        )
    }
}

export default withRouter(Project);