import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import globalStyles from "../../styles/global/index";

export function AddedFriends() {
  return (
    <View style={styles.container}>
      <View style={styles.divider}>
        <Text style={styles.divider.title}> Added Friends</Text>
        <Text style={styles.divider.description}> 5 total </Text>
      </View>

      <View style={styles.profiles}>
        <View style={styles.content}>
          <View style={styles.leftContent}>
            <Image
              source={{
                uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
              }}
              style={styles.profileImage}
            />
            <Image
              source={{
                uri: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
              }}
              style={styles.profileImage}
            />
            <Image
              source={{
                uri: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
              }}
              style={styles.profileImage}
            />
            <Text style={styles.moreText}> + 2 More</Text>
          </View>
          <View style={styles.rightContent}>
            <TouchableOpacity style={styles.plusButton}>
              <Text style={styles.plusText}> Add New </Text>
              <View style={styles.plusViewContainer}>
                <Text style={styles.plusTextContainer}> + </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },

  divider: {
    title: {
      fontSize: 20,
      color: "#222",
      fontFamily: globalStyles.fonts.semi,
    },

    description: {
      color: "#333",
    },
  },

  profiles: {
    marginTop: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  profileContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },

  profileImage: {
    width: 40,
    height: 40,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#227C70",
    borderRadius: 20,
    marginRight: 8,
  },

  moreText: {
    fontSize: 16,
    color: "#ddd",
  },

  content: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  leftContent: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  rightContent: {},

  plusButton: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
  },

  plusText: {
    fontSize: 14,
    fontFamily: "Poppins_400Regular",
  },

  plusViewContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: 25,
    height: 25,
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: "#fff",
    borderRadius: 8,
  },

  plusTextContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "red",
    fontSize: 13,
  },
});
