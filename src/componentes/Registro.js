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
            <View style={{ flex:1.5, backgroundColor: '076076'}} />
            <View style={{ flex:2,width:360, backgroundColor: 'white',borderRadius:10 }}>
            <View style={{flex:3, backgroundColor: 'steelblue' }}>
                            <Item floatingLabel style={styles.Items }>
                            <Label>Email:</Label>
                                <Input
                                Required
                                    clearButtonMode="always"
                                    autoCorrect={false}
                                    autoCapitalize="none"
                                    onChangeText={TextInputValue => this.setState({ TextInput_Student_Name: TextInputValue })}
                                />

                            </Item>


                        <Item floatingLabel style={styles.Items}>
                                <Label>Telefono:</Label>
                                <Input
                                Required
                                    keyboardType="phone-pad"  
                                    autoCorrect={false}
                                    autoCapitalize="none"
                                    onChangeText={TextInputValue => this.setState({ TextInput_Student_PhoneNumber: TextInputValue })}
                                />

                        </Item>
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
        textAlign:'center',
      },
    
      rowViewContainer: {
        fontSize: 20,
        paddingRight: 10,
        paddingTop: 10,
        paddingBottom: 10,
      },
  });
  