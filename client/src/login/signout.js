import React from 'react'

const handleSubmit = () => {
    window.location.reload();
}

const SignOut = (props) => {

    if (!props.show) {
        return null;
    } else {

        const backdropStyle = {
            position: 'fixed',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: 'rgba(0,0,0,0.3)',
            padding: 50
          };

          const modalStyle = {
            position: 'absolute',
            top: '30%',
            left: '40%',
            backgroundColor: '#fff',
            borderRadius: 5,
            maxWidth: 500,
            height: 'auto',
            margin: 'auto',
            padding: 30
          };

        return (
            <div className='backdrop' style={backdropStyle}>
                <div style={modalStyle}>
                    <form>
                        <legend>Sign Out</legend>
                            <br />
                            <p>Click to log out.</p>
                            <br />
                            <button type="submit" className="btn btn-outline-primary" onClick={handleSubmit}>Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default SignOut;