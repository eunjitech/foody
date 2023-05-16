import React from "react";
import { Pressable, StyleSheet, Text, View, Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function CategoryGridTile({ title, color, onPress }) {
  return (
    <View style={styles.gridItem}>
      <Pressable
        onPress={onPress}
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [
          styles.screen,
          pressed ? styles.pressItem : null,
        ]}
      >
        <View style={[styles.innerContainer, { backgroundColor: color }]}>
          <Text style={styles.categoryText}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1 },
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    elevation: 4,
    overflow: Platform.os === "android" ? "hidden" : "visible",
    borderRadius: 10,
    shadowColor: "#222",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    backgroundColor: "white", //눌렀을 때 투명도 차이 수정
    shadowOpacity: 0.6,
  },
  pressItem: { opacity: 0.3 },
  innerContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  categoryText: { fontSize: 18, fontWeight: "bold" },
});
