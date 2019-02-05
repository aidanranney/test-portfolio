import React from 'react';

const Result = (props) => {

    return (
        <div id='result' className='jumbotron'>
                <div className='container'>
                    <h1 className='display-3'>{props.description}</h1>
                        <div className='row'>
                            <div style={{maxWidth: '60%'}}>
                            <img id='yourImage' alt={props.description} src={props.image} style={{
                                position: 'relative',
                                maxWidth: '100%',
                                height: 'auto'
                            }} />
                            </div>
                        </div>
                </div>
                <div className='row'>
                    <hr className='my-4' />
                    <button onClick={props.clickHandler} type="button" className="btn btn-primary btn-lg" >Try Again</button>
                </div>
        </div>
    )
}

export default Result;