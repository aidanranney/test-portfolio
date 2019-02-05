import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import SignIn from '../login/signin';
import SignOut from '../login/signout';

class NavBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoginOpen: false,
      isLogoutOpen: false
    }
  };

  toggleLoginModal = () => {
    this.setState({
      isLoginOpen: !this.state.isLoginOpen
    });
  };

  toggleLogoutModal = () => {
    this.setState({
      isLogoutOpen: !this.state.isLogoutOpen
    });
  };

  userLogin() {
    if (this.props.username === 'public') {
      return (
        <Link className="navbar-brand" onClick={this.toggleLoginModal} to='/'>
        Log In
        </Link>
      );
    } else if (this.props.privLevel > 1) {
      return (
        <Link className="navbar-brand" onClick={this.toggleLogoutModal} to='/'>
          {this.props.username}
        </Link>
      );
    }
  }
  
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
          <ul className='navbar-nav mr-auto' >
          <li>
          <Link className="navbar-brand"to="/">Aidan Ranney</Link>
          </li>
          <li style={{margin: '0 0 3px 0'}}>
          {this.props.privLevel > 1 ? <Link className="navbar-brand" to='/resume' >Resume</Link> : null}
          </li>
          <li style={{margin: '0 0 3px 0'}}>
          {this.props.privLevel > 1 ? <Link className="navbar-brand" to='/Artifact1' >111 Project</Link> : null}
          </li>
          <li style={{margin: '0 0 3px 0'}}>
          {this.props.privLevel > 1 ? <Link className="navbar-brand" to='/Artifact2' >121 Project</Link> : null}
          </li>
          <li style={{margin: '0 0 3px 0'}}>
          {this.props.privLevel > 1 ? <Link className="navbar-brand" to='/Artifact3' >199 Project</Link> : null}
          </li>
          <li style={{margin: '0 0 3px 0'}}> 
          {this.props.privLevel > 2 ? <Link className="navbar-brand" to='/project'>JSON's Project</Link> : null}
          </li>
          </ul>
          {this.userLogin()}    
        </nav>
        <SignIn show={this.state.isLoginOpen} toggle={this.toggleLoginModal} className='modal' passUserInfo={this.props.passUserInfo} />
        <SignOut show={this.state.isLogoutOpen} className='modal' passUserInfo={this.props.passUserInfo} />
      </div>
    )
  };
}

export default NavBar;