import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Card } from "../Card";
import data from "../../mock/plants";
import globalStyles from "../../styles/global";

export function Cards() {
  const [likedCard, setLikedCard] = React.useState(null);

  function handleSelectedCard(index) {
    const selecteItem = likedCard === index ? null : index;
    setLikedCard(selecteItem);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}> New Plants 2 </Text>
        <Ionicons name="expand" size={18} color="#fff" />
      </View>
      <FlatList
        data={data.data}
        keyExtractor={(element) => element.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 16 }}
        renderItem={({ item }) => (
          <Card
            item={item}
            handleSelectedCard={handleSelectedCard}
            selectedCard={likedCard}
          />
        )}
      />
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
    paddingHorizontal: globalStyles.spacing.md,
    paddingVertical: globalStyles.spacing.md,
  },

  headerText: {
    fontSize: 16,
    fontFamily: globalStyles.fonts.regular,
    color: globalStyles.colors.white,
  },
});
