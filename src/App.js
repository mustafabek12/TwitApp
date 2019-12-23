import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './reducers';
import Router from './router';

export default class App extends Component {
  componentWillMount(){
    const firebaseConfig = {
      apiKey: "AIzaSyD1U2xf4MglmjGPU3hgUPZK3WgYYYllLRE",
      authDomain: "tweetterklon.firebaseapp.com",
      databaseURL: "https://tweetterklon.firebaseio.com",
      projectId: "tweetterklon",
      storageBucket: "tweetterklon.appspot.com",
      messagingSenderId: "664720181789",
      appId: "1:664720181789:web:23041a003f5f2311bc54f4",
      measurementId: "G-DJLYX4E6YQ"
    };
    // Initialize Firebase
     //if(!firebase.apps.length){
      firebase.initializeApp(firebaseConfig);
    //}
    
    
    //firebase.analytics();
  }
  render() {
    const store=createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
          <Router></Router>
       </Provider>
    );
  }
}
