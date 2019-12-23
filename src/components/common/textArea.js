import React, {Component} from 'react';
import {TextInput, View,StyleSheet} from 'react-native';

const TextArea = ({placeholder,onChangeText,value}) => {
  return (
      <View style={styles.textAreaWrapper}>
        <TextInput placeholder={placeholder}
                    onChangeText={onChangeText}
                    multiline={true}
                    value={value}
                    style={styles.textArea}>

        </TextInput>
      </View>
  )
};
const styles=StyleSheet.create({
    textAreaWrapper:{
        borderWidth:1,
        borderColor:'#cfd8dc',
        height:200,
        
    },
    textArea:{
        height:200,
        color:'#7b8d93',
        fontSize:18
    }

})

export {TextArea}
