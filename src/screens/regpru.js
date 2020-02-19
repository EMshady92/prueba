import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  ImageBackground,
  StatusBar
} from "react-native";
import MaterialIconTextbox from "../components/MaterialIconTextbox";
import MaterialButtonSuccess from "../components/MaterialButtonSuccess";
import MaterialCheckboxWithLabel from "../components/MaterialCheckboxWithLabel";
//import Svg, { Ellipse } from "react-native-svg";

function Regpru(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rectStack}>
        <View style={styles.rect}>
          <View style={styles.holaColumnRow}>
            <View style={styles.holaColumn}>
              <Text style={styles.hola}>HOLA!,</Text>
              <Text style={styles.loremIpsum}>Estás a un paso de unirte!</Text>
            </View>
            <Image
              source={require("../../assets/images/Grupo__2_objetos_(1).png")}
              resizeMode="contain"
              style={styles.image3}
            ></Image>
          </View>
        </View>
        <ImageBackground
          style={styles.rect2}
          imageStyle={styles.rect2_imageStyle}
          source={require("../../assets/images/Gradient_lpFq5sj.png")}
        >
          <Text style={styles.email1}>Email</Text>
          <View style={styles.materialIconTextboxRow}>
            <MaterialIconTextbox
              textInput1=""
              icon1Name="email-open-outline"
              style={styles.materialIconTextbox}
            ></MaterialIconTextbox>
            <Image
              source={require("../../assets/images/Grupo__2_objetos1.png")}
              resizeMode="contain"
              style={styles.image4}
            ></Image>
          </View>
          <Text style={styles.telefono}>Teléfono</Text>
          <View style={styles.materialIconTextbox1Row}>
            <MaterialIconTextbox
              textInput1=""
              icon1Name="cellphone"
              style={styles.materialIconTextbox1}
            ></MaterialIconTextbox>
            <Image
              source={require("../../assets/images/Grupo__2_objetos1.png")}
              resizeMode="contain"
              style={styles.image5}
            ></Image>
          </View>
          <Text style={styles.fechaDeNacimineto}>Fecha de nacimineto</Text>
          <View style={styles.materialIconTextbox2Stack}>
            <MaterialIconTextbox
              textInput1=""
              icon1Name="account"
              style={styles.materialIconTextbox2}
            ></MaterialIconTextbox>
            <Image
              source={require("../../assets/images/Grupo__2_objetos1.png")}
              resizeMode="contain"
              style={styles.image6}
            ></Image>
          </View>
          <MaterialButtonSuccess
            style={styles.materialButtonSuccess}
          ></MaterialButtonSuccess>
          <MaterialCheckboxWithLabel
            style={styles.materialCheckboxWithLabel}
          ></MaterialCheckboxWithLabel>
        </ImageBackground>
      </View>
      <View style={styles.imageStackRow}>
        <View style={styles.imageStack}>
          <ImageBackground
            source={require("../../assets/images/Mapa_de_bits_(1)_(1).png")}
            resizeMode="contain"
            style={styles.image}
            imageStyle={styles.image_imageStyle}
          >
            <Image
              source={require("../../assets/images/Grupo__2_objetos.png")}
              resizeMode="contain"
              style={styles.image2}
            ></Image>
          </ImageBackground>
        {/*   <Svg viewBox="0 0 105.52 104.51" style={styles.ellipse}>
            <Ellipse
              strokeWidth={6}
              fill="rgba(230, 230, 230,0)"
              stroke="rgba(78,191,191,1)"
              cx={53}
              cy={52}
              rx={50}
              ry={49}
            ></Ellipse>
          </Svg> */}
        </View>
        <View style={styles.emiliaStack}>
          <Text style={styles.emilia}>María Emlia Gutierréz</Text>
          <Text style={styles.icbc}>ICBC</Text>
        </View>
      </View>
      <StatusBar hidden={true}></StatusBar>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#076076"
  },
  rect: {
    top: 0,
    left: 0,
    width: 430,
    height: '100%',
    backgroundColor: "white",
    position: "absolute",
    borderTopLeftRadius:80,
    borderTopRightRadius:80
  },
  hola: {
    width: 102,
    height: 45,
    fontSize: 30,
    fontWeight:'bold',
    lineHeight: 55,
    marginLeft: 3
  },
  loremIpsum: {
    width: 185,
    height: 85,
    color: "rgba(8,8,8,1)",
    fontSize: 25,
    lineHeight: 40
  },
  holaColumn: {
    width: 185,
    marginTop: 5
  },
  image3: {
    width: 126,
    height: 51,
    marginLeft: 4
  },
  holaColumnRow: {
    height: 135,
    flexDirection: "row",
    marginTop: 31,
    marginLeft: 40,
    marginRight: 41
  },
  rect2: {
    top: 167,
    left: 11,
    width: 430,
    height: '100%',
    position: "absolute",
    borderTopLeftRadius: 80,
    borderTopRightRadius: 80,
    overflow: "hidden"
  },
  rect2_imageStyle: {},
  email1: {
    width: 70,
    height: 33,
    color: "white",
    fontSize: 25,
    lineHeight: 40,
    marginTop: 37,
    marginLeft: 32
  },
  materialIconTextbox: {
    width: 293,
    height: 43,
    backgroundColor: "transparent",
    shadowOpacity: 0.01
  },
  image4: {
    width: 87,
    height: 27,
    marginTop: 16
  },
  materialIconTextboxRow: {
    height: 43,
    flexDirection: "row",
    marginLeft: 32,
    marginRight: 34
  },
  telefono: {
    width: 106,
    height: 33,
    color: "rgba(255,255,255,1)",
    fontSize: 25,
    lineHeight: 40,
    marginTop: 10,
    marginLeft: 32
  },
  materialIconTextbox1: {
    width: 293,
    height: 43,
    backgroundColor: "transparent",
    shadowOpacity: 0.01
  },
  image5: {
    width: 87,
    height: 27,
    marginLeft: 1,
    marginTop: 9
  },
  materialIconTextbox1Row: {
    height: 43,
    flexDirection: "row",
    marginTop: 16,
    marginLeft: 32,
    marginRight: 33
  },
  fechaDeNacimineto: {
    width: 239,
    height: 33,
    color: "white",
    fontSize: 25,
    lineHeight: 40,
    marginTop: 8,
    marginLeft: 32
  },
  materialIconTextbox2: {
    top: 0,
    left: 0,
    width: 294,
    height: 43,
    backgroundColor: "transparent",
    position: "absolute",
    shadowOpacity: 0.01
  },
  image6: {
    top: 8,
    left: 293,
    width: 87,
    height: 27,
    position: "absolute"
  },
  materialIconTextbox2Stack: {
    width: 330,
    height: 43,
    marginLeft: 32
  },
  materialButtonSuccess: {
    width: 330,
    height: 36,
    backgroundColor: "#076076",
    borderRadius: 10,
    marginTop: 12,
    marginLeft: 25
  },
  materialCheckboxWithLabel: {
    width: 333,
    height: 40,
    backgroundColor: "rgba(15,15, 15,0)",
    marginTop: 33,
    marginLeft: 29
  },
  rectStack: {
    width: 407,
    height: 679,
    marginTop: 133,
    marginLeft: -21
  },
  image: {
    top: 1,
    left: 0,
    width: 109,
    height: 104,
    position: "absolute"
  },
  image_imageStyle: {},
  image2: {
    width: 50,
    height: 26,
    marginTop: 78,
    marginLeft: 56
  },
  /* ellipse: {
    top: 0,
    left: 3,
    width: 106,
    height: 105,
    position: "absolute"
  }, */
  imageStack: {
    width: 109,
    height: 105
  },
  emilia: {
    top: 0,
    left: 0,
    width: 166,
    height: 40,
    color: "white",
    position: "absolute",
    fontSize: 15,
    lineHeight: 55
  },
  icbc: {
    top: 18,
    left: 0,
    width: 166,
    height: 40,
    color: "white",
    position: "absolute",
    fontSize: 15,
    lineHeight: 55
  },
  emiliaStack: {
    width: 166,
    height: 44,
    marginLeft: 60,
    marginTop: 50
  },
  imageStackRow: {
    height: 105,
    flexDirection: "row",
    marginTop: -804,
    marginLeft: 19,
    marginRight: 6
  }
});

export default Regpru;
