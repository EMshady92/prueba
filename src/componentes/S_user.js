import React, { Component } from 'react';
import { StyleSheet, View,  Platform,Text,Image, Switch } from 'react-native';
import {  Button} from 'native-base'


export default class S_user extends Component  {

 
  static navigationOptions =
  {
     title: 'swich_user',
  };


  
  render(){  

  return ( 
    

    <View style={styles.MainContainer}>
       <View style={{ flex: 1, flexDirection: 'column' }}>
        <View style={{ width: 360, height: 200, backgroundColor: '#076076' }}>
        <View style={{flex:1}}>
            
        <View style={{flex:1}}>
                   <Text style={{color:'white',marginLeft:40,marginTop:30, alignContent:'flex-start',textAlign:'left',fontSize:20,fontWeight: 'bold' }}>
                    ¿Sabias?{"\n"}
                    </Text>
                    <Text style={styles.hola}>Como usuario Doofit podés tener<Text style={{fontWeight: 'bold'}}>Dos</Text></Text>
                    <Text style={styles.hola}><Text style={{fontWeight: 'bold'}}>Perfiles</Text> como usuario o prestador de</Text>
                    <Text style={styles.hola}>servicios, los cuales podés intercambiar</Text>
                    <Text style={styles.hola}><Text style={{fontWeight: 'bold'}}>muy fácilmente.</Text></Text>
      
        </View>
        <View style={{marginBottom:150,marginLeft:250}}>
                <Image source={require('../../assets/icon.png')} style={{alignItems:'flex-start', width:50,height:50,marginTop:30,}} />
        </View>  
          
                </View>
                 
      
                </View>
                
        
        
                <View style={{ width: 360, height: 570, backgroundColor: 'white',borderRadius:20 }} >
                <View style={{flex:1}}>
                    <View style={{flex:1}}>
                      <Text style={{marginRight:40,marginTop:30,textAlign:'right',fontSize:18,fontWeight: 'bold' }}>
                        Luis Armando Arevalo
                        </Text>
                       <Switch
                        style={{marginRight:30,marginTop:10}}
                       />
                       <Text style={{marginRight:10,marginTop:5,textAlign:'right',fontSize:14, }}>
                        Usuario/Prestador
                        </Text>
          
                    </View>
                    <View style={{marginBottom:50,marginLeft:40}}>
                    <Image source={require('../../assets/icon.png')} style={{ width:70,height:70,marginTop:30,borderRadius:30,borderWidth:5,borderColor:'#076076'}} />
                    </View>
              
                 </View>
              
              
           
            <View
          
            style={{ height: 455,borderTopRightRadius:20, borderTopLeftRadius:20,backgroundColor:'#f2b56b' }} >
                               
                             
                    <View style={{marginLeft:40}}>
                    <Image source={require('../../assets/icon.png')} style={{ width:270,height:200,marginTop:30}} />
                    </View>


                
                    
                            <Button style={{margin:10,width:340,height:50,borderRadius:10,backgroundColor:'#076076', }}
                                full
                                //onPress= {() => {Actions.show(); }}
                                
                                >  
                                
                                <Text style={{ color: 'white',textAlign:'center',fontSize:30 }}>Acceder a clases!</Text>
                            </Button>
                            
                            
                            
                           
            </View>
        
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
  