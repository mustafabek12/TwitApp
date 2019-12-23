import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import {connect } from 'react-redux'

import {TextArea, MyButton} from './common'
import {changeTweet, sendTweet} from '../actions'

 class NewTweet extends Component {
onChangeTweet(tweet){
     this.props.changeTweet(tweet)
}

sendTweet(){
    this.props.sendTweet(this.props.tweet)
}
    render() {
        return (
            <View style={sytles.newTweetContainer}>
                <TextArea placeholder='Type here...'
                onChangeText={this.onChangeTweet.bind(this)}></TextArea>
                <MyButton spinner={false} 
                title='Tweet'
                onPress= {this.sendTweet.bind(this)}
                color='#e87b79'></MyButton>
            </View>
        )
    }
}
const sytles=StyleSheet.create({
    newTweetContainer:{
        flex:1,
        backgroundColor:'white',
        padding:15,
    }
})

const mapStateToProps=state=>{
    const {tweet}= state.tweetForm;
    return{
        tweet
    }
}
export default connect(mapStateToProps, {changeTweet,sendTweet}) (NewTweet)
