import React from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import RaisedButton from "material-ui/RaisedButton";

const Logout = props => (
  <div>
    <MuiThemeProvider>
      <RaisedButton
        label="Logout"
        primary={true}
        onClick={props.logout}
        style={style}
      />
    </MuiThemeProvider>
  </div>
);
const style = {
  margin: 15
};
export default Logout;
