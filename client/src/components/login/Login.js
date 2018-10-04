import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import axios from 'axios';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }
  handleClick() {
    var apiBaseUrl = 'http://localhost:3000/api/';
    var self = this;
    var payload = {
      email: this.state.username,
      password: this.state.password,
    };
    axios
      .post(apiBaseUrl + 'login', payload)
      .then(function(response) {
        console.log(response);
        if (response.data.code == 200) {
          console.log('Login Succesful');
          var upLoadScreen = [];
          upLoadScreen.push(
            <UploadScreen appContext={self.props.appContext} />
          );
          self.props.appContext.setState({
            loginPage: [],
            uploadScreen: upLoadScreen,
          });
        } else if (response.data.code == 204) {
          console.log('Username password do not match');
          alert('username password do not match');
        } else {
          console.log('Username does not exists');
          alert('Username does not exist');
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  render() {
    return (
      <div>
        <div>
          <AppBar title="Welcome to DoctorJS" />
          <TextField
            hintText="Enter your Username"
            floatingLabelText="Username"
            onChange={newValue => this.setState({ username: newValue })}
          />
          <br />
          <TextField
            type="password"
            hintText="Enter your password"
            floatingLabelText="Password"
            onChange={newValue => this.setState({ password: newValue })}
          />
          <br />
          <RaisedButton
            label="Submit"
            primary={true}
            style={style}
            onClick={this.handleClick}
          />
        </div>
      </div>
    );
  }
}
const style = {
  margin: 15,
};
export default Login;
