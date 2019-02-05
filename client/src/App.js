import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import NavBar from './navbar/navbar';
import Resume from './resume/resume';
import Project from './project/project';
import Welcome from './welcome';
import Artifact1 from './artifacts/111';
import Artifact2 from './artifacts/112';
import Artifact3 from './artifacts/199';

import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: 'public',
      privLevel: 1
    };
  }

  passUserInfo = (user) => {
    this.setState({username: user.username, privLevel: user.privLevel});
  }

  render() {
    return (
      <div>
        <NavBar username={this.state.username} privLevel={this.state.privLevel} passUserInfo={this.passUserInfo} />
        <Route path='/' exact render={(props) => <Welcome {...props} username={this.state.username} privLevel={this.state.privLevel} />} />
        <Route path='/project' component={Project} />
        <Route path='/resume' component={Resume} />
        <Route path='/artifact1' component={Artifact1} />
        <Route path='/artifact2' component={Artifact2} />
        <Route path='/artifact3' component={Artifact3} />
        <p>Copyright &copy; 2018 Aidan Ranney</p>
      </div>
    );
  }
}

export default App;