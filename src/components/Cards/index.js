import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { View, Text, FlatList, StyleSheet } from "react-native";
import globalStyles from "../../styles/global";

export function Cards() {
  const { colors, fonts, spacing, size } = globalStyles;
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}> New Plants 2 </Text>
        <Ionicons name="expand" size={18} color="#fff" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 250,
    borderRadius: 16,
    backgroundColor: globalStyles.colors.green,
  },

  header: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: globalStyles.spacing.sm,
    paddingVertical: globalStyles.spacing.md,
  },

  headerText: {
    fontSize: 16,
    fontFamily: globalStyles.fonts.regular,
    color: globalStyles.colors.white,
  },
});
