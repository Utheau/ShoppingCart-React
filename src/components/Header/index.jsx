import React from 'react';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router-dom';

const style = {
  margin: 12
};
const buttons = (
  <div>
    <Link to='/bill'><RaisedButton label="Checkout" primary={true} style={style} /></Link>
    <Link to='/'><RaisedButton label="Home" primary={true} style={style} /></Link>
  </div>
)

const AppHeader = () => {
  return (
    <AppBar title='Shopping Basket'
      showMenuIconButton={false}
      titleStyle={{ textAlign: "left" }}
      iconElementRight={buttons} />
  )
}

export default AppHeader;
