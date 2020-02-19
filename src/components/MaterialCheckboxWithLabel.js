import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

function MaterialCheckboxWithLabel(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <Icon
        name={props.checked ? "checkbox-marked" : "checkbox-blank-outline"}
        style={styles.checkIcon}
      ></Icon>
      <Text style={styles.checkLabel}>
        {props.label || "Acepto los terminos y condiciones"}
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
    color: "rgba(248,248,252,1)",
    fontSize: 28,
    lineHeight: 28
  },
  checkLabel: {
    color: "rgba(253,253,253,0.87)",
    marginLeft: 2,
    fontSize: 16,
  }
});

export default MaterialCheckboxWithLabel;
