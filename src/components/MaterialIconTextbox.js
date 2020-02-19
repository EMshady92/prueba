import React, { Component } from "react";
import { StyleSheet, View, TextInput } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

function MaterialIconTextbox(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Icon
        name={props.icon1Name || "camera-front-variant"}
        style={styles.iconStyle}
      ></Icon>
      <TextInput
        placeholder={props.textInput1 || "username@correo.com"}
        placeholderTextColor="rgba(230, 230, 230,1)"
        style={styles.inputStyle}
      ></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center"
  },
  iconStyle: {
    color: "rgba(255,251,251,1)",
    fontSize: 24,
    paddingLeft: 8
  },
  inputStyle: {
    flex: 1,
    color: "#000",
    alignSelf: "stretch",
    marginLeft: 16,
    paddingTop: 14,
    paddingRight: 5,
    paddingBottom: 8,
    fontSize: 16,
    lineHeight: 16
  }
});

export default MaterialIconTextbox;
