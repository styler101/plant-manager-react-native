import React from "react";
import { View, Platform, StyleSheet, StatusBar } from "react-native";
import { Cards } from "../../components/Cards";

const isAndroid = Platform.OS === "android" ? StatusBar.currentHeight : 0;
export function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Cards />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: isAndroid,
  },

  header: {
    padding: 8,
  },
});
