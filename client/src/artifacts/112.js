import React from 'react';
import Artifact from '../images/112artifact.png';


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

const Artifact2 = () => {

    return (
        <div id='artifact2' className='jumbotron'>
            <img style={artifactStyle} src={Artifact} alt='' />
            <div className="card text-white bg-secondary mb-3" style={textStyle}>
                <div className="card-header">Quiz</div>
                <div className="card-body">
                <h4 className="card-title">A simple quiz with results saved</h4>
                <p className="card-text">HTML, CSS, Javascript, JQuery.</p>
                <a style={{color: 'black'}} href='http://deepblue.cs.camosun.bc.ca/~cst161/121/index.html'>Link to Site</a>
                </div>
            </div>
        </div>
    )
}

export default Artifact2