import React, { Component } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, View, Platform,Text,Image } from 'react-native';
import { Input, Item, Button, Label} from 'native-base'
//import Icon from 'react-native-vector-icons/FontAwesome';
import { CheckBox } from 'react-native-elements'; 

import { Actions } from 'react-native-router-flux';

export default class MainActivity extends Component  {

 
  static navigationOptions =
  {
     title: 'Registro',
  };


  
  render(){  

  return ( 
    

    <View style={styles.MainContainer}>
       <View style={{ flex: 1, flexDirection: 'column' }}>
        <View style={{ width: 360, height: 150, backgroundColor: '#076076' }}>
        <View style={{flex:1}}>
                  
                    <Text style={styles.nombre1}>Nombre ApellidoPaterno</Text>
                    <Text style={styles.nombre2}>Lic.</Text>
                    
      
                </View>
                 <View style={{marginBottom:40,marginLeft:30}}>
                <Image source={require('../../assets/icon.png')} style={{borderRadius:30,alignItems:'flex-start', width:70,height:70,marginTop:30,}} />
                </View> 
        </View>
        
                <View style={{ width: 360, height: 500, backgroundColor: 'white',borderRadius:20 }} >
                <View style={{flex:1}}>
                   <Text style={{marginLeft:40,marginTop:30, alignContent:'flex-start',textAlign:'left',fontSize:25,fontWeight: 'bold' }}>
                    Hola!
                    </Text>
                    <Text style={styles.hola}>Estas a un paso</Text>
                    <Text style={styles.hola}>de unirte!</Text>
      
                </View>
                <View style={{marginBottom:50,marginLeft:250}}>
                <Image source={require('../../assets/icon.png')} style={{alignItems:'flex-start', width:50,height:50,marginTop:30,}} />
                </View>
           
            <LinearGradient
             colors={['#076076', '#338c8c', '#4ebfbf']}
            style={{ height: 415,borderRadius:20 }} >
                                
                            <Item floatingLabel style={styles.Items}>
                                <Label style={styles.TextStyle}>Email:</Label>
                                <Input
                                    Required
                                    keyboardType="email-address"
                                    autoCorrect={false}
                                    autoCapitalize="none"
                                   
                                />

                            </Item>

                            <Item floatingLabel style={styles.Items}>
                                <Label style={styles.TextStyle}>Telefono:</Label>
                              {/*   <Icon
                                    name='user'
                                    size={50}
                                    color='white'
                                  />
                                <Input */}
                                
                                
                                Required
                                    keyboardType="phone-pad"  
                                    autoCorrect={false}
                                    autoCapitalize="none"
                                    
                                />

                            </Item>

                            <Item floatingLabel style={styles.Items}>
                                <Label style={styles.TextStyle}>Fecha de Nacimiento:</Label>
                               
                                 }
                                <Input
                                
                                  
                                Required
                                    
                                    autoCorrect={false}
                                    autoCapitalize="none"
                                    
                                />

                            </Item>

                
                    
                            <Button style={{margin:10,width:340,height:60,borderRadius:10,backgroundColor:'#076076', }}
                                full
                               /*  onPress= {() => {Actions.Registro_p(); }} */
                                
                                >  
                                
                                <Text style={{ color: 'white',textAlign:'center',fontSize:30 }}>Continuar</Text>
                            </Button>
                            
                            <CheckBox 
                              
                              checkedColor={'white'}
                              title={'Acepto terminos y condiciones'}
                              style={{backgroundColor:'transparent',color:'transparent'}}
                              color={'transparent'}
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
      hola:{
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
  