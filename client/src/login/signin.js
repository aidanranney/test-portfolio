import React, {Component} from 'react'

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            username: 'your username',
            password: 'your password'
        };
        this.handleUsername = this.handleUsername.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleHTTPErrors(response) {
        if (!response.ok) throw Error(response.status + ': ' + response.statusText);
        return response;
    }

    handleUsername(e) {
        this.setState({username: e.target.value});
    }
    handlePassword(e) {
        this.setState({password: e.target.value});
    }
    handleSubmit() {
        fetch('https://arusers.herokuapp.com/api/login', {
        method: 'POST',
        body: JSON.stringify(this.state),
        headers: {
            'Content-type': 'application/json'
        }
        })
        .then(res => this.handleHTTPErrors(res))
        .then(res => res.json())
        .then(result => this.props.passUserInfo(result))
        .then(() => this.props.toggle())
        .catch(error => {console.log(error);})
    }

    render() {

        if (!this.props.show) {
            return null;
        }

        const backdropStyle = {
            position: 'fixed',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: 'rgba(0,0,0,0.3)',
            padding: 50,
            zIndex: 5
          };

          const modalStyle = {
            position: 'fixed',
            top: '30%',
            left: '40%',
            backgroundColor: '#fff',
            borderRadius: 5,
            maxWidth: 500,
            minHeight: 300,
            margin: 'auto',
            padding: 30,
            zIndex: 6
          };

        return (
            <div style={backdropStyle}>
                <div style={modalStyle}>
                    <form>
                        <legend>Sign In</legend>
                        <div className='form-group'>
                            <label htmlFor='inputusername'>Username</label>
                            <input type='username' className='form-control' id='inputusername' placeholder='Enter username' onChange={this.handleUsername} />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='inputpassword'>Password</label>
                            <input type='password' className='form-control' id='inputpassword' placeholder='Enter password' onChange={this.handlePassword} />
                        </div>
                        <button type="button" className="btn btn-outline-primary" onClick={this.handleSubmit}>Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default SignIn;