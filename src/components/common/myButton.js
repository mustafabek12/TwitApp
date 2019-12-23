import React from 'react'
import { View, Button, StyleSheet } from 'react-native'
import {Spinner} from './spinner'

const MyButton = ({spinner,title,onPress,color, backgroundColor}) => {
    const content = spinner ? (
        <Spinner></Spinner>
    ) : (
        <Button
        onPress={onPress}
        color={color}
        title={title}></Button>
    )
    let {buttonWrapper}=styles;
    buttonWrapper={...buttonWrapper, backgroundColor:backgroundColor || '#e87b79' }

    return (
        <View style={buttonWrapper}> 
            {content}
        </View>
    )
}
const styles=StyleSheet.create({
    buttonWrapper:{
        marginTop:20,
        height:49,
        //borderRadius:20,
        justifyContent:'center',
        fontSize:18,
        // backgroundColor:'#eff0ee'
    }
})
export {MyButton}
