import React, { Component } from 'react';
import { StyleSheet, Image, View } from 'react-native';
import Registro from './src/screens/Registro';
import Registro_P from './src/screens/R_particular';
import SwithcUsuario from './src/screens/S_user';
import Prestador from './src/screens/Prestador';
import Repru from './src/screens/regpru';
import Nueva from './src/screens/Untitled2';
/* import { Router, Scene } from 'react-native-router-flux'; */

export default class MainActivity extends Component{
  
    
    render(){  

      return ( 
       /*  <Router>
              
        <Scene key="root">
          <Scene key="home" component={Registro} title="Registro"/>
          <Scene key="registro_p" component={Registro_P} title="Registro Particular"/>
          <Scene key="Sitchuser" component={SwithcUsuario} title="Switch Usuario"/>
    
        </Scene>
      </Router> */
      <Nueva/>
        );
      }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#008b8b',
    alignItems: 'center',
    justifyContent: 'center',
  },
  splash:{
    height:'100%',
    width:'100%',
  },
  
});
