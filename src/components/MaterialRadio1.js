import React, { Component } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

function MaterialRadio1(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <Icon
        name={props.selected ? "radiobox-marked" : "radiobox-blank"}
        style={styles.radioIcon}
      ></Icon>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20
  },
  radioIcon: {
    color: "rgba(100,102,112,1)",
    /* fontFamily: "Roboto", */
    fontSize: 23,
    lineHeight: 24
  }
});

export default MaterialRadio1;
