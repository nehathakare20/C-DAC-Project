import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from "react-redux";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/Styles";
import { applyMiddleware, compose, createStore } from 'redux';
import thunk from "redux-thunk";


const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;

const store = createStore(
 
  composeEnhancers(applyMiddleware(thunk))
);

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#b3e5fc",
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
  <Provider store={store}>
  <ThemeProvider theme={theme}>
  <BrowserRouter>
    <App />
    </BrowserRouter>
    </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();