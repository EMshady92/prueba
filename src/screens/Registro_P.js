import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  ImageBackground,
  StatusBar
} from "react-native";
import Svg, { Ellipse } from "react-native-svg";
import EntypoIcon from "react-native-vector-icons/Entypo";
import MaterialButtonShare from "../components/MaterialButtonShare";
import MaterialRadio from "../components/MaterialRadio";
import MaterialRadio1 from "../components/MaterialRadio1";
import FeatherIcon from "react-native-vector-icons/Feather";
import MaterialFixedLabelTextbox from "../components/MaterialFixedLabelTextbox";
import MaterialButtonPrimary from "../components/MaterialButtonPrimaryRParticular";
import MaterialCheckboxWithLabel from "../components/MaterialCheckboxWithLabelRParticular";

function Untitled1(props) {
  return (
    <View style={styles.container}>
      <View style={styles.holaColumnRow}>
        <View style={styles.holaColumn}>
          <Text style={styles.hola}>Hola!.</Text>
          <View style={styles.holaFiller}></View>
          <Text style={styles.por}>
            Por favor completá la{"\n"} siguiente información
          </Text>
        </View>
        <Image
          source={require("../../assets/images/logo.png")}
          resizeMode="contain"
          style={styles.image}
        ></Image>
        <Text style={styles.doofit}>doofit</Text>
      </View>
      <View style={styles.rect3Stack}>
        <View style={styles.rect3}>
          <View style={styles.ellipseStackRow}>
            <View style={styles.ellipseStack}>
              {/* <Svg viewBox="0 0 63.97 64.21" style={styles.ellipse}>
                <Ellipse
                  strokeWidth={61}
                  fill="rgba(230, 230, 230,1)"
                  stroke="rgba(51,140,140,1)"
                  cx={32}
                  cy={32}
                  rx={1}
                  ry={2}
                ></Ellipse>
              </Svg> */}
              <EntypoIcon name="camera" style={styles.icon}></EntypoIcon>
              <MaterialButtonShare
                icon1Name="plus-circle"
                style={styles.materialButtonShare}
              ></MaterialButtonShare>
            </View>
            <View style={styles.materialRadioColumn}>
              <MaterialRadio style={styles.materialRadio}></MaterialRadio>
              <MaterialRadio1 style={styles.materialRadio1}></MaterialRadio1>
            </View>
            <View style={styles.endWrapperFillerColumn}>
              <View style={styles.endWrapperFiller}></View>
              <View style={styles.soyColumn}>
                <Text style={styles.soy}>Soy usuario particular</Text>
                <Text style={styles.soyPrestador}>Soy prestador</Text>
              </View>
            </View>
          </View>
        </View>
        <ImageBackground
          style={styles.rect2}
          imageStyle={styles.rect2_imageStyle}
          source={require("../../assets/images/Gradient_WVonoFG.png")}
        >
          <View style={styles.icon2Row}>
            <FeatherIcon name="user" style={styles.icon2}></FeatherIcon>
            <MaterialFixedLabelTextbox
              text1="Nombre"
              style={styles.materialFixedLabelTextbox}
            ></MaterialFixedLabelTextbox>
          </View>
          <View style={styles.icon3Row}>
            <FeatherIcon name="user" style={styles.icon3}></FeatherIcon>
            <MaterialFixedLabelTextbox
              text1="Apellido"
              style={styles.materialFixedLabelTextbox2}
            ></MaterialFixedLabelTextbox>
          </View>
          <View style={styles.icon4Row}>
            <FeatherIcon name="mail" style={styles.icon4}></FeatherIcon>
            <MaterialFixedLabelTextbox
              text1="Email"
              style={styles.materialFixedLabelTextbox3}
            ></MaterialFixedLabelTextbox>
          </View>
          <View style={styles.icon5Row}>
            <FeatherIcon name="user" style={styles.icon5}></FeatherIcon>
            <MaterialFixedLabelTextbox
              text1="Teléfono"
              style={styles.materialFixedLabelTextbox4}
            ></MaterialFixedLabelTextbox>
          </View>
          <View style={styles.icon6Row}>
            <FeatherIcon name="user" style={styles.icon6}></FeatherIcon>
            <MaterialFixedLabelTextbox
              text1="Fecha"
              style={styles.materialFixedLabelTextbox5}
            ></MaterialFixedLabelTextbox>
          </View>
          <MaterialButtonPrimary
            style={styles.materialButtonPrimary}
          ></MaterialButtonPrimary>
          <MaterialCheckboxWithLabel
            text1=""
            style={styles.checkBoxAceptoTerminos}
          ></MaterialCheckboxWithLabel>
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
    textAlign: "center"
  },
  holaFiller: {
    flex: 1
  },
  por: {
    width: 155,
    height: 45,
    color: "rgba(255,255,255,1)",
    fontSize: 15,
    /* fontFamily: "roboto-100", */
    marginLeft: 20
  },
  holaColumn: {
    width: 175,
    marginTop: 10
  },
  image: {
    width: 50,
    height: 60
  },
  doofit: {
    color: "rgba(255,255,255,1)",
    fontSize: 35,
    /* fontFamily: "calibri-bold", */
    marginLeft: 22
  },
  holaColumnRow: {
    height: 97,
    flexDirection: "row",
    marginTop: 32,
    marginLeft: 11,
    marginRight: 14
  },
  rect3: {
    top: 0,
    left: 0,
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
  ellipse: {
    top: 0,
    left: 0,
    width: 64,
    height: 64,
    position: "absolute"
  },
  icon: {
    position: "absolute",
    color: "rgba(128,128,128,0.42)",
    fontSize: 42,
    right: 14,
    bottom: 21,
    height: 42,
    width: 42
  },
  materialButtonShare: {
    top: 32,
    left: 27,
    width: 40,
    height: 40,
    backgroundColor: "rgba(15,15, 15,0)",
    position: "absolute",
    borderColor: "#000000",
    borderWidth: 0,
    borderStyle: "dotted",
    shadowOpacity: 0.01,
    overflow: "visible"
  },
  ellipseStack: {
    width: 67,
    height: 72,
    marginTop: 6
  },
  materialRadio: {
    width: 25,
    height: 25,
    borderRadius: 100,
    overflow: "scroll"
  },
  materialRadio1: {
    width: 25,
    height: 25,
    marginTop: 9,
    marginLeft: 3
  },
  materialRadioColumn: {
    width: 28,
    marginLeft: 50,
    marginBottom: 19
  },
  endWrapperFiller: {
    flex: 1
  },
  soy: {
    width: 155,
    height: 21,
    color: "rgba(0,0,0,1)",
    fontSize: 15,
    /* fontFamily: "roboto-regular", */
    marginBottom: 12
  },
  soyPrestador: {
    width: 155,
    height: 21,
    color: "rgba(0,0,0,1)",
    fontSize: 15,
    /* fontFamily: "roboto-regular" */
  },
  soyColumn: {
    width: 155
  },
  endWrapperFillerColumn: {
    width: 155,
    marginLeft: 9,
    marginTop: 5,
    marginBottom: 19
  },
  ellipseStackRow: {
    height: 78,
    flexDirection: "row",
    marginTop: 6,
    marginLeft: 34,
    marginRight: 19
  },
  rect2: {
    top: 91,
    left: 2,
    width: 360,
    height: 359,
    position: "absolute",
    borderRadius: 34,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
    overflow: "hidden"
  },
  rect2_imageStyle: {},
  icon2: {
    color: "rgba(255,255,255,1)",
    fontSize: 42,
    height: 42,
    width: 42,
    marginTop: 1
  },
  materialFixedLabelTextbox: {
    width: 253,
    height: 43,
    backgroundColor: "rgba(230, 230, 230,1)",
    borderRadius: 11,
    shadowOpacity: 1,
    marginLeft: 9
  },
  icon2Row: {
    height: 43,
    flexDirection: "row",
    marginTop: 5,
    marginLeft: 22,
    marginRight: 34
  },
  icon3: {
    color: "rgba(255,255,255,1)",
    fontSize: 42,
    height: 42,
    width: 42,
    marginTop: 1
  },
  materialFixedLabelTextbox2: {
    width: 253,
    height: 43,
    backgroundColor: "rgba(230, 230, 230,1)",
    borderRadius: 11,
    shadowOpacity: 1,
    marginLeft: 9
  },
  icon3Row: {
    height: 43,
    flexDirection: "row",
    marginTop: 10,
    marginLeft: 22,
    marginRight: 34
  },
  icon4: {
    color: "rgba(255,255,255,1)",
    fontSize: 42,
    height: 42,
    width: 42,
    marginTop: 1
  },
  materialFixedLabelTextbox3: {
    width: 253,
    height: 43,
    backgroundColor: "rgba(230, 230, 230,1)",
    borderRadius: 11,
    shadowOpacity: 1,
    marginLeft: 11
  },
  icon4Row: {
    height: 43,
    flexDirection: "row",
    marginTop: 11,
    marginLeft: 20,
    marginRight: 34
  },
  icon5: {
    color: "rgba(255,255,255,1)",
    fontSize: 42,
    height: 42,
    width: 42
  },
  materialFixedLabelTextbox4: {
    width: 253,
    height: 43,
    backgroundColor: "rgba(230, 230, 230,1)",
    borderRadius: 11,
    shadowOpacity: 1,
    marginLeft: 8
  },
  icon5Row: {
    height: 43,
    flexDirection: "row",
    marginTop: 11,
    marginLeft: 23,
    marginRight: 34
  },
  icon6: {
    color: "rgba(255,255,255,1)",
    fontSize: 42,
    height: 42,
    width: 42
  },
  materialFixedLabelTextbox5: {
    width: 253,
    height: 43,
    backgroundColor: "rgba(230, 230, 230,1)",
    borderRadius: 11,
    shadowOpacity: 1,
    marginLeft: 8,
    marginTop: 5
  },
  icon6Row: {
    height: 48,
    flexDirection: "row",
    marginTop: 9,
    marginLeft: 23,
    marginRight: 34
  },
  materialButtonPrimary: {
    width: 284,
    height: 36,
    marginTop: 22,
    marginLeft: 41
  },
  checkBoxAceptoTerminos: {
    width: 236,
    height: 27,
    marginTop: 8,
    marginLeft: 65
  },
  rect3Stack: {
    width: 362,
    height: 450,
    marginTop: 21,
    marginLeft: -2
  }
});

export default Untitled1;
