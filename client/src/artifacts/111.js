import React from 'react';
import Artifact from '../images/111artifact.png';


const artifactStyle = {
    position: 'relative',
    maxWidth: '70%',
    height: 'auto',
    left: '2%',
    opacity: '.9'
}

const textStyle = {
    position: 'relative',
    maxWidth: '30rem',
    left: '50%',
    bottom: '100px'
}

const Artifact1 = () => {

    return (
        <div id='artifact1' className='jumbotron'>
            <img style={artifactStyle} src={Artifact} alt='' />
            <div className="card text-white bg-secondary mb-3" style={textStyle}>
                <div className="card-header">Quiz</div>
                <div className="card-body">
                <h4 className="card-title">A Snowboarding Webiste</h4>
                <p className="card-text">HTML, CSS</p>
                <a style={{color: 'black'}} href='http://deepblue.cs.camosun.bc.ca/~cst161/111/wls/index.html'>Link to Site</a>
                </div>
            </div>
        </div>
    )
}

export default Artifact1