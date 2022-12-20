import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import global from "../../styles/global";

export function Topics() {
  const [showArea, setShowArea] = React.useState(true);

  return (
    <View style={styles.mainContent}>
      <View style={styles.header}>
        <Text style={styles.title}> Today's Share</Text>
        <TouchableOpacity onPress={() => setShowArea((prev) => !prev)}>
          <Text style={styles.description}>
            {showArea ? "Hide Shared" : "Press here to see All"}
          </Text>
        </TouchableOpacity>
      </View>
      {showArea && (
        <View style={styles.wrapper}>
          <View style={styles.section1}>
            <Image
              source={{
                uri: "https://images.unsplash.com/photo-1620970872350-603835f4343e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
              }}
              style={styles.section1.img1}
            />
            <Image
              source={{
                uri: "https://images.unsplash.com/photo-1620971242068-042167e51162?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
              }}
              style={styles.section1.img2}
            />
          </View>

          <View style={styles.section2}>
            <Image
              source={{
                uri: "https://images.unsplash.com/photo-1620970872350-603835f4343e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
              }}
              style={styles.section2.img}
            />
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  mainContent: {
    paddingVertical: 8,
  },

  title: {
    fontFamily: global.fonts.semi,
    fontSize: global.size.lg,
    color: global.colors.gray.medium,
  },

  description: {
    fontSize: global.size.sm,
    color: global.colors.gray.light,
  },

  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  wrapper: {
    display: "flex",
    paddingHorizontal: 4,
    marginTop: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  section1: {
    height: 320,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    img1: {
      width: 130,
      height: 130,
      borderRadius: 20,
      resizeMode: "contain",
    },

    img2: {
      width: 130,
      height: 130,
      borderRadius: 20,
      resizeMode: "contain",
    },
  },

  section2: {
    height: 320,

    img: {
      width: 180,
      height: 320,
      resizeMode: "contain",
      borderRadius: 20,
    },
  },
});
