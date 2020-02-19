import React, { Component } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, View, Alert, TextInput, Platform,Text,Image, TouchableOpacity, ListView, ActivityIndicator } from 'react-native';
import { Container, Content, Header, Form, Input, Item, Button, Label} from 'native-base'
//import Icon from 'react-native-vector-icons/FontAwesome';
import { CheckBox } from 'react-native-elements'; 

import { Actions } from 'react-native-router-flux';

export default class Registro_P extends Component  {

 
  static navigationOptions =
  {
     title: 'Registro_P',
  };


  
  render(){  

  return ( 
    

    <View style={styles.MainContainer}>
       <View style={{ flex: 1, flexDirection: 'column' }}>
        <View style={{ width: 360, height: 120, backgroundColor: '#076076' }}>
        <View style={{flex:1}}>
            
        <View style={{flex:1}}>
                   <Text style={{marginLeft:40,marginTop:30, alignContent:'flex-start',textAlign:'left',fontSize:25,fontWeight: 'bold' }}>
                    Hola!
                    </Text>
                    <Text style={styles.hola}>Por favor completa la</Text>
                    <Text style={styles.hola}>siguiente información</Text>
      
        </View>
        <View style={{marginBottom:50,marginLeft:250}}>
                <Image source={require('../../assets/icon.png')} style={{alignItems:'flex-start', width:50,height:50,marginTop:30,}} />
        </View>  
          
                </View>
                 
      
                </View>
                
        
        
                <View style={{ width: 360, height: 560, backgroundColor: 'white',borderRadius:20 }} >
                <View style={{flex:1}}>
               
                <View style={{flex:1}}>
                <CheckBox 
                              checkedIcon='dot-circle-o'
                              uncheckedIcon='circle-o'
                              checkedColor={'white'}
                              title={'Soy usuario partícular'}
                              containerStyle={{backgroundColor: 'transparent', width:150,height:20, marginLeft:160, marginTop:30}}
                            />
                            <CheckBox 
                            checkedIcon='dot-circle-o'
                            uncheckedIcon='circle-o'
                              checkedColor={'white'}
                              title={'Soy prestador'}
                              containerStyle={{backgroundColor: 'transparent', width:150,height:20, marginLeft:160}}
                            />
      
        </View>
        <View style={{marginBottom:150,marginLeft:30}}>
                <Image source={require('../../assets/icon.png')} style={{alignItems:'flex-start', width:60,height:60,marginTop:30,borderRadius:20, borderWidth:3, borderColor: '#d6d7da'}} />
        </View>                  
        </View>
              
              
           
            <LinearGradient
             colors={['#076076', '#338c8c', '#4ebfbf']}
            style={{ height: 455,borderTopRightRadius:20, borderTopLeftRadius:20 }} >
                               
                                <TextInput placeholder="Nombre" placeholderTextColor="gray"
                                    leftIcon="thumbsup"
                                    style={styles.textin}>
                                    </TextInput>

                                    <TextInput placeholder="Apellido" placeholderTextColor="gray"
                                    leftIcon="thumbsup"
                                    style={styles.textin}>
                                    </TextInput>

                                    <TextInput placeholder="Email" placeholderTextColor="gray"
                                    leftIcon="thumbsup"
                                    style={styles.textin}>
                                    </TextInput>

                                    <TextInput placeholder="Teléfono" placeholderTextColor="gray"
                                    leftIcon="thumbsup"
                                    style={styles.textin}>
                                    </TextInput>

                                    <TextInput placeholder="Fecha de nacimiento" placeholderTextColor="gray"
                                    leftIcon="thumbsup"
                                    style={styles.textin}>
                                    </TextInput>

                           


                
                    
                            <Button style={{margin:10,width:340,height:50,borderRadius:10,backgroundColor:'#076076', }}
                                full
                                //onPress= {() => {Actions.show(); }}
                                
                                >  
                                
                                <Text style={{ color: 'white',textAlign:'center',fontSize:30 }}>Continuar</Text>
                            </Button>
                            
                            <CheckBox 

                              containerStyle={{backgroundColor: 'white', width:250,height:20, alignContent:'center', marginLeft:50}}
                              title={'Acepto terminos y condiciones'}
                              
                            />
                           
            </LinearGradient>
        
        </View> 
      </View>
        
    </View>
    );
  }
}


const styles = StyleSheet.create({
    
    MainContainer :{

        flex:1,
        backgroundColor: '#076076',
    
      },
    
      MainContainer_For_Show_StudentList_Activity :{
        
        flex:1,
        paddingTop: (Platform.OS == 'ios') ? 20 : 0,
        marginLeft: 5,
        marginRight: 5
        
        },
        nombre1:{
          color:'white',
          marginRight:20,
          marginTop:50,  
          textAlign:'right',
          fontSize:15,
        }, 
        nombre2:{
          color:'white',
          marginRight:160,  
          textAlign:'right',
          fontSize:15,
        }, 
      textheader:{
        fontSize: 20, 
        textAlign: 'center',
      },
      textin:{
        marginLeft:30,
        width:300,
        borderRadius:10,
        marginTop:30,
        backgroundColor:'white',
        padding:4   ,
      },
      hola:{
        color:'white',  
        marginLeft:40,
        fontSize:15,
      },  
      Items:{
        margin:10,
      },  
      
      TextStyle:{
        color:'#fff',
      },
    
      rowViewContainer: {
        fontSize: 20,
        paddingRight: 10,
        paddingTop: 10,
        paddingBottom: 10,
      },
  });
  