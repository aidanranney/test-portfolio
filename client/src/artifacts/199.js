import React from 'react';
import Artifact from '../images/199artifact.png';


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

const Artifact3 = () => {

    return (
        <div id='artifact3' className='jumbotron'>
            <img style={artifactStyle} src={Artifact} alt='' />
            <div className="card text-white bg-secondary mb-3" style={textStyle}>
                <div className="card-header">Mick's Licks</div>
                <div className="card-body">
                <h4 className="card-title">An e-Commerce solution for selling records.</h4>
                <p className="card-text">LAMP Stack. HTML, CSS, Javascript, PHP.</p>
                <a style={{color: 'black'}} href='http://deepblue.cs.camosun.bc.ca/~cst161/shopping-cart/web/index.php'>Link to Site</a>
                </div>
            </div>
        </div>
    )
}

export default Artifact3