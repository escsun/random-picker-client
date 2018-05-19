import React from 'react';
import ReactDOM from 'react-dom';
import {MuiThemeProvider} from '@material-ui/core/styles';
import {Provider} from 'react-redux';
import './index.css';
import theme from './utils/theme';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './core/store';

const store = configureStore();

const render = (Component) => {
  ReactDOM.render(
    <Provider store={store}>
      <MuiThemeProvider theme={theme}>
        <Component/>
      </MuiThemeProvider>
    </Provider>,
    document.getElementById('root')
  );
};

render(App);
registerServiceWorker();
