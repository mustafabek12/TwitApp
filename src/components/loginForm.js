import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {Input, MyButton, Spinner} from './common';
import {emailChanged,passwordChanged,loginUser, isLoggedIn  } from '../actions';

class LoginForm extends Component {

  componentDidMount(){
    if(this.props.fullLoading){
      this.props.isLoggedIn();
    }
    
  }
  onButtonClicked() {
    const {email, password} = this.props;
    
this.props.loginUser(email, password);
  }

  onEmailChanged(text){
    this.props.emailChanged(text);
  }

  onPasswordChanged(text){
    this.props.passwordChanged(text);
  }
  render() {
    const {error, loading, fullLoading} = this.props;
    if (fullLoading) {
      return(
        <Spinner></Spinner>
      )
    }
    const errMsg = error ? (
      <Text style={styles.errorStyle}>{error}</Text>
    ) : null;
    
    return (
      <View style={styles.loginContainer}>
        <View>
          <Input
            text="Email"
            inputPlaceHolder="Enter Email"
            onChangeText={this.onEmailChanged.bind(this)}
            value={this.props.email}
          />
        </View>
        <View>
          <Input
            text="Password"
            inputPlaceHolder="Enter Password"
            onChangeText={this.onPasswordChanged.bind(this)}
            secureTextEntry
            value={this.props.password}
          />
        </View>
        {errMsg}
        <MyButton spinner={loading}                  
        title='Login'         
  onPress={this.onButtonClicked.bind(this)}
  color='#e87b79'></MyButton>
      </View>
    ) 
  }
}
const styles = StyleSheet.create({
  loginContainer:{
    flex : 1, justifyContent:'center', padding:30
  },
  errorStyle: {
    fontSize: 20,
    color: 'red',
    paddingTop: 5,
    alignSelf: 'center',
  },
});

const mapStateToProps=state=>{
  const {email, password,loading,error, fullLoading}=state.auth;
  return{
    email,
    password,
    loading,
    error,
    fullLoading,
  }
}
export default connect(mapStateToProps, {emailChanged, passwordChanged,loginUser,isLoggedIn})(LoginForm);
 