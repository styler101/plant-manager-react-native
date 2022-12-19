import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { View, StyleSheet } from "react-native";
import colors from "../../styles/global/index";

export function Icon() {
  return (
    <LinearGradient
      style={styles.container}
      colors={["rgba(220, 220, 220, 0.7)", "transparent"]}
    >
      <Ionicons size={16} color="#fff" name="camera" />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 30,
    height: 30,
    borderRadius: 25,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#4B9A6A",
  },
});
