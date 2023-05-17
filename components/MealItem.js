import React from "react";
import {
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";

export default function MealItem({
  title,
  imageUrl,
  duration,
  complexity,
  affordability,
}) {
  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [pressed ? styles.pressItem : null]}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image source={{ uri: imageUrl }} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
          </View>
          <View style={styles.details}>
            <Text style={styles.detailItem}>{duration}</Text>
            <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
            <Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1 },
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: Platform.os === "android" ? "hidden" : "visible",
    backgroundColor: "#fff",
    elevation: 4,
    shadowColor: "#222",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    backgroundColor: "white", //눌렀을 때 투명도 차이 수정
    shadowOpacity: 0.5,
  },
  pressItem: { opacity: 0.5 },
  innerContainer: {
    borderRadius: 8,
    overflow: "hidden",
  },
  image: { width: "100%", height: 200 },
  title: { fontWeight: "bold", fontSize: 18, textAlign: "center", margin: 8 },
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  detailItem: { marginHorizontal: 4, fontSize: 12 },
});
