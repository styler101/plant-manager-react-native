import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import globalStyles from "../../styles/global";

export function Card(props) {
  const { item, handleSelectedCard, selectedCard } = props;

  return (
    <View style={styles.card}>
      <AntDesign
        name="heart"
        size={16}
        color={selectedCard === item.id ? "red" : "#ccc"}
        style={styles.icon}
        onPress={() => handleSelectedCard(item.id)}
      />
      <Image
        source={{
          uri: item.image,
        }}
        style={styles.cardImge}
      />
      <Text style={styles.text}> {item.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 120,
    height: 160,
    marginRight: 16,
    borderRadius: 8,
    position: "relative",
  },

  cardImge: {
    width: "100%",
    height: "100%",
    borderRadius: 8,
    resizeMode: "contain",
  },

  icon: {
    position: "absolute",
    zIndex: 999,
    left: 4,
    top: 4,
  },

  text: {
    position: "absolute",
    bottom: 20,
    right: 0,
    paddingRight: 8,
    backgroundColor: globalStyles.colors.green,
    width: 80,
    textAlign: "right",
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    color: "#ffffffa1",
  },
});
