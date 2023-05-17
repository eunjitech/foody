import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function List({ data }) {
  return data.map((item) => (
    <View key={item} style={styles.listItem}>
      <Text style={styles.itemText} key={item}>
        {item}
      </Text>
    </View>
  ));
}

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 7,
    paddingHorizontal: 8,
    paddingVertical: 8,
    marginHorizontal: 12,
    marginVertical: 7,
    backgroundColor: "yellow",
  },
  itemText: {
    color: "#222",
    textAlign: "center",
  },
});
