import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";

import { CATEGORIES, MEALS } from "../data/dummy-data";

function renderItem({ item }) {
  return <CategoryGridTile title={item.title} color={item.color} />;
}

export default function CategoriesScreen() {
  return (
    <FlatList
      data={CATEGORIES}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.itemsContainer}
    />
  );
}

const styles = StyleSheet.create({});
