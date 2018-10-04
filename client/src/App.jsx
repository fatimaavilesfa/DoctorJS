import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Loginscreen from './components/login/Loginscreen.js';
import UploadScreen from './components/login/PrimaryScreen';
import Logout from '../src/components/login/Logout.js';
injectTapEventPlugin();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginPage: [],
      uploadScreen: [],
      username: '',
      password: '',
      isLogin: false,
    };
    this.logout = this.logout.bind(this);
  }
  logout() {
    console.log('LogOut func');
    this.setState({
      email: '',
      password: '',
      isLogin: false,
    });
    console.log(this.state);
  }
  componentDidMount() {
    var loginPage = [];
    var uploadScreen = [];
    loginPage.push(<Loginscreen parentContext={this} />);
    uploadScreen.push(<UploadScreen parentContext={this} />);
    this.setState({
      loginPage: loginPage,
      uploadScreen: uploadScreen,
    });
    console.log(this.state);
  }

  render() {
    const { isLoggedIn } = this.state;
    const LoggedIn = isLoggedIn && <UploadScreen />;
    const LoggedOut = !isLoggedIn && <Loginscreen />;
    return (
      <MuiThemeProvider>
        <div>
          <AppBar title="Welcome to DoctorJS" />
          <Logout logout={this.logout} />
          <div className="App">
            {this.state.isLogin
              ? this.state.uploadScreen
              : this.state.loginPage}
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
