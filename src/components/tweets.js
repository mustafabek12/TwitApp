import _ from 'lodash';
import React, {Component} from 'react';
import {Text, View, FlatList,StyleSheet, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {Actions} from 'react-native-router-flux'
import {fetchTweet, isLoggedIn} from '../actions';
import {Card} from './common';

class Tweets extends Component {
   componentDidMount() {
    this.props.fetchTweet();
  }
  renderItem({item}) {
    return (
      <TouchableOpacity key={item.uid}
                        onPress={()=>{
                          Actions.updateTweet({
                            tweet:item
                          })
                        }}>
        <Card>
        <Text style={styles.tweetStyle}>{item.tweet}</Text>
        <Text style={styles.emailStyle}>{item.email}</Text>
      </Card>
      </TouchableOpacity>      
    );
  }
  render() {
    const {tweetList} = this.props;
    return (
      <View style={styles.tweetListContainer}>
        <FlatList
          data={tweetList}
          renderItem={this.renderItem}
          keyExtractor={(item) => item.uid}></FlatList>
      </View>
    );
  }
}
const styles =StyleSheet.create({
tweetListContainer:{
  flex:1,
  backgroundColor:'white',
  padding:10
},
tweetStyle:{
  color:'#7b8d93',
  fontSize:18,
  paddingTop:5,
},
emailStyle:{
  color:'#AAb1b4',
  fontSize:14,
  alignSelf:'flex-end',
  paddingTop:3
}
})

const mapStateToProps = state => {
  const tweetList = _.map(state.tweetList, (val, uid) => {
    return {...val, uid};
  });
  return {
    tweetList
  };
};
export default connect(
  mapStateToProps,
  {fetchTweet})(Tweets);
