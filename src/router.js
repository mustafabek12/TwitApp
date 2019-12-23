import React from 'react';
import {StyleSheet} from 'react-native';
import firebase from 'firebase';
import {Scene, Router, Actions} from 'react-native-router-flux';
import LoginForm from './components/loginForm';
import Tweets from './components/tweets';
import NewTweet from './components/newTweet';
import UpdateTweet from './components/updateTweet';

const RouterComp = () => {
  return (
    <Router titleStyle={{color: '#e87b79'}}>
      <Scene key="root" hideNavBar={true}>
        <Scene key="auth">
          <Scene
            key="login"
            component={LoginForm}
            title="Login"
            hideNavBar={true}
            ></Scene>
        </Scene>
        <Scene key="main" 
        style={styles.navigationBarTitleStyle} >
          <Scene key="tweets" component={Tweets} title="Tweets" 
          rightTitle='New'
          onRight={()=>Actions.newTweet()}
          onLeft={()=>{
            firebase.auth().signOut();
            firebase.auth();
          }}
          leftTitle='Logout'
           ></Scene>
          <Scene
          key="newTweet"
          component={NewTweet}
          title="New Tweet"></Scene>
        <Scene
          key="updateTweet"
          component={UpdateTweet}
          title="Update / Delete Tweet"></Scene>
        </Scene>
      </Scene>
    </Router>
  );
};

const styles = StyleSheet.create({
  navigationBarTitleStyle: {
    // centering for Android
    flex: 1,
    textAlign: 'center',
  },
});

export default RouterComp;
