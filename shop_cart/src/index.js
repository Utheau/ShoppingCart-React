import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/index';
import Bill from './components/Bill/index';
import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store';

injectTapEventPlugin();
ReactDOM.render(
  <Provider store={store}>
  <MuiThemeProvider >
    <Router>
      <Switch>
      <Route exact path="/" component={ App }/>
      <Route exact path="/bill" component={ Bill }/>
      </Switch>
    </Router>
  </MuiThemeProvider>
</Provider>, document.getElementById('root'));
registerServiceWorker();
