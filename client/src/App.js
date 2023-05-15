import React, { Component } from 'react';
import Main from './Components/MainCmp';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { appStore } from './Redux/Store';
import { GoogleOAuthProvider } from '@react-oauth/google';

const store = appStore();

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <GoogleOAuthProvider clientId='298984122139-49vss2p28pvntciijhscfqcn58ojfr6e.apps.googleusercontent.com'>
          <BrowserRouter>
            <div className="App">
              <Main />
            </div>
          </BrowserRouter>
        </GoogleOAuthProvider>
      </Provider>
    );
  }
}

export default App;