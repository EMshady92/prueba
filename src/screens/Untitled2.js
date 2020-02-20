import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import Svg, { Ellipse } from "react-native-svg";
import MaterialSwitch3 from "../components/MaterialSwitch3";
import MaterialButtonPrimary from "../components/MaterialButtonPrimary";

function Untitled2(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rect1StackColumn}>
        <View style={styles.rect1Stack}>
          <View style={styles.rect1}>
            <View style={styles.ellipse1StackRow}>
              <View style={styles.ellipse1Stack}>
                {/* <Svg viewBox="0 0 100.00 100.21" style={styles.ellipse1}>
                  <Ellipse
                    strokeWidth={61}
                    fill="rgba(230, 230, 230,1)"
                    stroke="rgba(51,140,140,1)"
                    cx={50}
                    cy={50}
                    rx={20}
                    ry={20}
                  ></Ellipse>
                </Svg> */}
                <Image
                  source={require("../../assets/images/user1.png")}
                  resizeMode="contain"
                  style={styles.image3}
                ></Image>
              </View>
              <View style={styles.contrasena1ColumnColumn}>
                <View style={styles.contrasena1Column}>
                  <Text style={styles.contrasena1}>Luís Armando Arevalo</Text>
                  <MaterialSwitch3
                    style={styles.materialSwitch3}
                  ></MaterialSwitch3>
                </View>
                <View style={styles.contrasena1ColumnFiller}></View>
                <Text style={styles.usuarioPrestador}>Usuario / Prestador</Text>
              </View>
            </View>
          </View>
          <View style={styles.rect2}>
            <View style={styles.materialButtonPrimary1Stack}>
              <MaterialButtonPrimary
                style={styles.materialButtonPrimary1}
              ></MaterialButtonPrimary>
              <Image
                source={require("../../assets/images/grupo.png")}
                resizeMode="contain"
                style={styles.image2}
              ></Image>
            </View>
          </View>
        </View>
        <View style={styles.sabiasRow}>
          <Text style={styles.sabias}>¿Sabías?</Text>
          <Image
            source={require("../../assets/images/logo.png")}
            resizeMode="contain"
            style={styles.image1}
          ></Image>
          <Text style={styles.doofit1}>doofit</Text>
        </View>
      </View>
      <View style={styles.rect1StackColumnFiller}></View>
      <Text style={styles.por1}>
        Como usuario Dootfit podés tener dos perfiles, como usuario o prestador
        de servicios, los cuales podés intercambiar {"\n"}muy fácilmente.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(7,96,118,1)"
  },
  rect1: {
    width: 362,
    height: 480,
    backgroundColor: "rgba(230, 230, 230,1)",
    position: "absolute",
    borderRadius: 27,
    borderColor: "#000000",
    borderWidth: 0,
    borderStyle: "dashed",
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
    left: 1,
    top: 0
  },
  ellipse1: {
    top: 10,
    left: 0,
    width: 100,
    height: 100,
    position: "absolute"
  },
  image3: {
    top: 0,
    left: 6,
    width: 88,
    height: 120,
    position: "absolute",
    borderColor: "#000000",
    borderWidth: 0
  },
  ellipse1Stack: {
    width: 100,
    height: 120
  },
  contrasena1: {
    color: "rgba(33,33,33,1)",
    fontSize: 20,
    
  },
  materialSwitch3: {
    width: 45,
    height: 23,
    marginTop: 18,
    marginLeft: 99
  },
  contrasena1Column: {
    width: 212
  },
  contrasena1ColumnFiller: {
    flex: 1
  },
  usuarioPrestador: {
    width: 155,
    height: 21,
    color: "rgba(0,0,0,1)",
    fontSize: 15,
    marginLeft: 57
  },
  contrasena1ColumnColumn: {
    width: 212,
    backgroundColor:'transparent',
    marginLeft: 18,
    marginTop: 11,
    marginBottom: 16
  },
  ellipse1StackRow: {
    height: 120,
    flexDirection: "row",
    marginTop: 6,
    marginLeft: 31,
    marginRight: 1
  },
  rect2: {
    top: 126,
    left: 0,
    width: 362,
    height: 463,
    backgroundColor: "rgba(242,181,107,1)",
    position: "absolute",
    borderRadius: 27,
    borderColor: "#000000",
    borderWidth: 0,
    borderStyle: "dashed",
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0
  },
  materialButtonPrimary1: {
    top: 171,
    left: 0,
    width: 284,
    height: 36,
    position: "absolute"
  },
  image2: {
    top: 0,
    left: 36,
    width: 200,
    height: 200,
    position: "absolute"
  },
  materialButtonPrimary1Stack: {
    width: 284,
    height: 207,
    marginTop: 32,
    marginLeft: 46
  },
  rect1Stack: {
    width: 363,
    height: 389,
    marginTop: 192
  },
  sabias: {
    width: 180,
    height: 42,
    color: "rgba(245,240,240,1)",
    fontSize: 35,
    textAlign: "center",
    marginTop: 23
  },
  image1: {
    width: 50,
    height: 60,
    marginLeft: 17
  },
  doofit1: {
    color: "rgba(255,255,255,1)",
    fontSize: 35,
    marginLeft: 11,
    marginTop: 13
  },
  sabiasRow: {
    height: 65,
    flexDirection: "row",
    marginTop: -581,
    marginLeft: 2,
    marginRight: 15
  },
  rect1StackColumn: {
    marginTop: 19,
    marginLeft: -2,
    marginRight: -1
  },
  rect1StackColumnFiller: {
    flex: 1
  },
  por1: {
    width: 264,
    height: 180,
    color: "rgba(255,255,255,1)",
    fontSize: 15,
    marginBottom: 408,
    marginLeft: 16
  }
});

export default Untitled2;
