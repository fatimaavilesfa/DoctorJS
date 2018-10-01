import React, { Component } from "react";
import injectTapEventPlugin from "react-tap-event-plugin";

import Loginscreen from "./components/login/Loginscreen.js";

injectTapEventPlugin();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginPage: [],
      uploadScreen: []
    };
  }
  UNSAFE_componentWillMount() {
    var loginPage = [];
    loginPage.push(<Loginscreen parentContext={this} />);
    this.setState({
      loginPage: loginPage
    });
  }
  render() {
    return (
      <div className="App">
        {this.state.loginPage}
        {this.state.uploadScreen}
      </div>
    );

  }
}

export default App;
