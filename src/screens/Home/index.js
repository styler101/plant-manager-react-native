import React from "react";

import { View, Text, Platform, StyleSheet, StatusBar } from "react-native";

const isAndroid = Platform.OS === "android" ? StatusBar.currentHeight : 0;
export function Home() {
  return (
    <View style={styles.container}>
      <Text> Home Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: isAndroid,
  },
});
