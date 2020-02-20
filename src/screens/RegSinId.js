import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  ImageBackground,
  StatusBar
} from "react-native";
import MaterialCheckbox from "../components/MaterialCheckbox";
import MaterialButtonPrimary from "../components/MaterialButtonPrimarySinId";
import MaterialCheckboxWithLabel from "../components/MaterialCheckboxWithLabelSinId";
import MaterialButtonLight from "../components/MaterialButtonLight";
import MaterialButtonDanger from "../components/MaterialButtonDanger";

function Untitled(props) {
  return (
    <View style={styles.container}>
      <View style={styles.holaRow}>
        <Text style={styles.hola}>Hola!.</Text>
        <Image
          source={require("../../assets/images/logo.png")}
          resizeMode="contain"
          style={styles.image}
        ></Image>
        <Text style={styles.doofit}>doofit</Text>
      </View>
      <Text style={styles.loremIpsum}>Estas a un paso de unirte!</Text>
      <View style={styles.rect3Stack}>
        <View style={styles.rect3}>
          <Text style={styles.usuario}>Usuario</Text>
          <TextInput
            placeholder="Ingrese usuario"
            autoFocus={true}
            autoCorrect={true}
            keyboardAppearance="default"
            style={styles.textInput}
          ></TextInput>
          <Text style={styles.contrasena}>Contraseña</Text>
          <View style={styles.textInput2StackStack}>
            <View style={styles.textInput2Stack}>
              <TextInput
                placeholder="Ingrese Contraseña"
                secureTextEntry={true}
                style={styles.textInput2}
              ></TextInput>
              <MaterialCheckbox
                button1="Untitled1"
                style={styles.materialCheckbox}
              ></MaterialCheckbox>
            </View>
            <Text style={styles.olvideMiContrasena}>Olvide mi Contraseña</Text>
            <Text style={styles.olvideMiContrasena2}>Mantener sesión</Text>
          </View>
          <MaterialButtonPrimary
            style={styles.materialButtonPrimary}
          ></MaterialButtonPrimary>
          <MaterialCheckboxWithLabel
            text1=""
            button1="Untitled2"
            style={styles.checkBoxAceptoTerminos}
          ></MaterialCheckboxWithLabel>
        </View>
        <ImageBackground
          style={styles.rect2}
          imageStyle={styles.rect2_imageStyle}
          source={require("../../assets/images/Gradient_WVonoFG.png")}
        >
          <View style={styles.soyNuevoRow}>
            <Text style={styles.soyNuevo}>Soy nuevo!</Text>
            <Text style={styles.queEsDoofit}>¿Qué es Doofit?</Text>
          </View>
          <Text style={styles.queEsDoofit2}>
            Desde una empresa, ingresari ID
          </Text>
          <MaterialButtonLight
            style={styles.materialButtonLight}
          ></MaterialButtonLight>
          <MaterialButtonDanger
            style={styles.materialButtonDanger}
          ></MaterialButtonDanger>
        </ImageBackground>
      </View>
      <StatusBar
        animated={true}
        barStyle="light-content"
        hidden={false}
      ></StatusBar>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(7,96,118,1)"
  },
  hola: {
    width: 136,
    height: 42,
    color: "rgba(245,240,240,1)",
    fontSize: 35,
    /* fontFamily: "roboto-700", */
    textAlign: "center",
    marginTop: 10
  },
  image: {
    width: 50,
    height: 60,
    marginLeft: 39
  },
  doofit: {
    color: "rgba(255,255,255,1)",
    fontSize: 35,
    /* fontFamily: "calibri-bold", */
    marginLeft: 22
  },
  holaRow: {
    height: 60,
    flexDirection: "row",
    marginTop: 32,
    marginLeft: 11,
    marginRight: 14
  },
  loremIpsum: {
    color: "rgba(255,255,255,1)",
    fontSize: 15,
    /* fontFamily: "roboto-100", */
    marginTop: 4,
    marginLeft: 31
  },
  rect3: {
    top: 0,
    left: 11,
    width: 362,
    height: 257,
    backgroundColor: "rgba(230, 230, 230,1)",
    position: "absolute",
    borderRadius: 27,
    borderColor: "#000000",
    borderWidth: 0,
    borderStyle: "dashed",
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0
  },
  usuario: {
    color: "rgba(84,84,84,1)",
    fontSize: 20,
    /* fontFamily: "roboto-regular", */
    marginTop: 11,
    marginLeft: 25
  },
  textInput: {
    width: 301,
    height: 36,
    color: "#121212",
   /*  fontFamily: "roboto-regular", */
    marginLeft: 24
  },
  contrasena: {
    color: "rgba(84,84,84,1)",
    fontSize: 20,
    /* fontFamily: "roboto-regular", */
    marginLeft: 24
  },
  textInput2: {
    top: 0,
    left: 0,
    width: 301,
    height: 36,
    color: "#121212",
    position: "absolute",
    /* fontFamily: "roboto-regular" */
  },
  materialCheckbox: {
    top: 26,
    left: 190,
    width: 28,
    height: 38,
    position: "absolute"
  },
  textInput2Stack: {
    top: 0,
    left: 0,
    width: 301,
    height: 64,
    position: "absolute"
  },
  olvideMiContrasena: {
    top: 45,
    left: 2,
    color: "rgba(84,84,84,1)",
    position: "absolute",
    fontSize: 10,
    /* fontFamily: "roboto-regular", */
    textDecoration: "underline"
  },
  olvideMiContrasena2: {
    top: 42,
    left: 220,
    color: "rgba(84,84,84,1)",
    position: "absolute",
    fontSize: 10,
   /*  fontFamily: "roboto-regular" */
  },
  textInput2StackStack: {
    width: 301,
    height: 64,
    marginLeft: 24
  },
  materialButtonPrimary: {
    width: 284,
    height: 36,
    marginLeft: 40
  },
  checkBoxAceptoTerminos: {
    width: 287,
    height: 27,
    marginLeft: 37
  },
  rect2: {
    top: 245,
    left: 0,
    width: 387,
    height: 250,
    position: "absolute",
    borderRadius: 34,
    overflow: "hidden"
  },
  rect2_imageStyle: {},
  soyNuevo: {
    width: 147,
    height: 51,
    color: "rgba(245,240,240,1)",
    fontSize: 30,
    /* fontFamily: "roboto-700", */
    textAlign: "center"
  },
  queEsDoofit: {
    width: 161,
    height: 39,
    color: "rgba(255,255,255,1)",
    fontSize: 15,
    /* fontFamily: "roboto-100", */
    marginLeft: 27,
    marginTop: 12
  },
  soyNuevoRow: {
    height: 51,
    flexDirection: "row",
    marginTop: 12,
    marginLeft: 38,
    marginRight: 14
  },
  queEsDoofit2: {
    color: "rgba(255,255,255,1)",
    fontSize: 15,
    /* fontFamily: "roboto-regular", */
    marginLeft: 35
  },
  materialButtonLight: {
    width: 284,
    height: 36,
    borderRadius: 8,
    marginTop: 11,
    marginLeft: 49
  },
  materialButtonDanger: {
    width: 284,
    height: 37,
    borderRadius: 8,
    marginTop: 12,
    marginLeft: 49
  },
  rect3Stack: {
    width: 387,
    height: 495,
    marginTop: 27,
    marginLeft: -13
  }
});

export default Untitled;
