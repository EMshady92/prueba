import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

function MaterialCheckboxWithLabel(props) {
  return (
    <TouchableOpacity
      /* Conditional navigation not supported at the moment */ style={[
        styles.container,
        props.style
      ]}
    >
      <Icon
        name={props.checked ? "checkbox-marked" : "checkbox-blank-outline"}
        style={styles.checkIcon}
      ></Icon>
      <Text style={styles.checkLabel}>
        {props.label || "Acepto los términos y condiciones"}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20
  },
  checkIcon: {
    color: "rgba(155,159,177,1)",
   /*  fontFamily: "Roboto", */
    fontSize: 28,
    lineHeight: 28
  },
  checkLabel: {
    color: "rgba(0,0,0,1)",
    marginLeft: 2,
    fontSize: 10,
   /*  textDecoration: "underline" */
  }
});

export default MaterialCheckboxWithLabel;
