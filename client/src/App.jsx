import React, { Component } from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import Loginscreen from './components/login/LoginScreen';
import UploadScreen from './components/login/PrimaryScreen';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      isLoggedIn: false,
    };
    this.logOut = this.logOut.bind(this);
  }

  componentDidMount() {}

  logOut(e) {
    e.preventDefault();
    console.log('====================================');
    console.log('Firing LogOut Func');
    console.log('====================================');
    this.setState({
      username: '',
      email: '',
      isLoggedIn: false,
    });
    console.log(this.state);
  }

  render() {
    const { isLoggedIn } = this.state;
    const LoggedIn = isLoggedIn && <UploadScreen />;
    const LoggedOut = !isLoggedIn && <Loginscreen />;
    return (
      <MuiThemeProvider>
        <div className="App">
          {LoggedOut}
          {LoggedIn}
          <button onClick={this.logOut} />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
