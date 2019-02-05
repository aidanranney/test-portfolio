import React from 'react';
import backdrop from './images/backdrop.jpeg';

const Welcome = (props) => {

    return (
        <div id='welcome'>
            <img alt='' className='bg' src={backdrop} style={{
            position: 'relative',
            zIndex: '-1',
            maxWidth:'100%',
            height: 'auto',
            opacity: '0.8'
            }} />
            <div style={{
            position: 'absolute',
            top: '20%',
            left: '5%'
            }}>
            <h1>{props.privLevel < 2 ? 'Hi, my name is Aidan.' : 'Hello, ' + props.username}
            </h1>
            <br />
            <br />
            <br />
            <h3>I'm a student and beginning developer</h3>
            <h4>{props.privLevel < 2 ? 'Log in to see some examples of my work.' : 'Explore above to see some examples of my work.'}
            </h4>
            </div>
        </div>
    )
}

export default Welcome;