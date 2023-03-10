import React from 'react';
import ReactDOM from 'react-dom/client';
import 'normalize.css';
import App from './app';
import { GlobalStyles } from './global-styles';
import { firebase } from './lib/firebase.prod';
import { FirebaseContext } from './context/firebase';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<>
  <FirebaseContext.Provider value={{firebase}}>
      <GlobalStyles />
      <App />
  </FirebaseContext.Provider>

</>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
