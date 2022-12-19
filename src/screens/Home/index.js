import React from "react";
import {
  View,
  Text,
  Platform,
  StyleSheet,
  StatusBar,
  ScrollView,
} from "react-native";
import { Cards } from "../../components/Cards";
import { Topics } from "../../components/Topics";

const isAndroid = Platform.OS === "android" ? StatusBar.currentHeight : 0;
export function Home() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Cards />
      </View>
      <View style={styles.main}>
        <Topics />
      </View>
    </ScrollView>
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

  main: {
    padding: 8,
  },
});
