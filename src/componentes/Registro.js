import React, { Component } from 'react';

import { StyleSheet, View, Alert, TextInput, Platform,Text,Image, TouchableOpacity, ListView, ActivityIndicator } from 'react-native';
import { Container, Content, Header, Form, Input, Item, Button, Label} from 'native-base'
//import { StackNavigator } from 'react-navigation';

//import {createAppContainer} from 'react-navigation';
//import {createStackNavigator} from 'react-navigation-stack';

import { Actions } from 'react-native-router-flux';
import Loading from 'react-native-whc-loading';

export default class MainActivity extends Component  {

 
  static navigationOptions =
  {
     title: 'Registro',
  };

/* constructor(props) {

   super(props)

   this.state = {

     TextInput_Student_Name: '',
     TextInput_Student_Class: '',
     TextInput_Student_PhoneNumber: '',
     TextInput_Student_Email: '',

   }

 } */

 /* InsertStudentRecordsToServer = () =>{
  this.refs.loading.show(); //abre animacion cargando
      fetch('http://www.tiempocompleto-zacatecas.com/slimshady92/InsertStudentData.php', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({

        student_name : this.state.TextInput_Student_Name,

        student_class : this.state.TextInput_Student_Class,

        student_phone : this.state.TextInput_Student_PhoneNumber,

        student_email: this.state.TextInput_Student_Email

      })
   
      }).then((response) => response.json())
          .then((responseJson) => {

            // Showing response message coming from server after inserting records.
            setTimeout(()=>{
              this.refs.loading.close(); //cierra animacion cargando despues de 2 segundos
              Alert.alert(responseJson);
              this.handleClick = Actions.show();
            }, 2000);
         
          }).catch((error) => {
            console.error(error);
          });

} */

  
  render(){  

  return ( 
    

    <View style={styles.MainContainer}>
       <View style={{ flex: 1, flexDirection: 'column' }}>
        <View style={{ width: 360, height: 150, backgroundColor: '076076' }}>

        </View>
        
        <View style={{ width: 360, height: 250, backgroundColor: 'skyblue',borderRadius:20 }} >
            <View style={{marginTop:150, height: 400, backgroundColor: 'steelblue',borderRadius:20 }} >
                                
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
                                <Input
                                Required
                                    keyboardType="phone-pad"  
                                    autoCorrect={false}
                                    autoCapitalize="none"
                                    
                                />

                            </Item>

                            <Item floatingLabel style={styles.Items}>
                                <Label style={styles.TextStyle}>Fecha de Nacimiento:</Label>
                                <Input
                                Required
                                    
                                    autoCorrect={false}
                                    autoCapitalize="none"
                                    
                                />

                            </Item>

                
                    
                            <Button style={{margin:10,width:340,height:60,borderRadius:10 }}
                                full

                                primary
                                onPress= {() => {Actions.show(); }}
                                
                                >  
                                
                                <Text style={{ color: 'white',textAlign:'center',fontSize:30 }}>Continuar</Text>
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
      header:{
          flex:1,
          backgroundColor:'#fff',
      },
      textheader:{
        fontSize: 20, 
        textAlign: 'center',
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
  