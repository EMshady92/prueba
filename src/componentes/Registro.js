import React from 'react';
import {TextInput,Image,View,StyleSheet} from 'react-native';
import { LinearGradient } from 'expo';

export default () => {
     <View style={styles.footer}> 
     <LinearGradient
           colors={['#448AFF', '#9E9E9E', '#FFEB3B', '#FF5722']}
           style={{flex: 1}}
     /> 
     <TextInput>hola</TextInput>
  </View>
}

const styles = StyleSheet.create({ 
    input:{
        flex:1,
        borderWidth:2,
        borderRadius:5,
        padding:15 
      },
    footer:{
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'center'
    }, 
  });   