import React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import Registro from './src/componentes/Registro'
export default function App() {
  return (
    
      <Registro/>
    
  );
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
