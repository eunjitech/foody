import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

import MealItem from "./MealItem";

export default function MealsList({ items }) {
  function renderItem(itemData) {
    const item = itemData.item;

    console.log("tlqkf", item);

    const mealItemProps = {
      categoryId: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      complexity: item.complexity,
      affordability: item.affordability,
    };
    return <MealItem {...mealItemProps} />;
  }

  return (
    <View style={styles.mealContainer}>
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({ mealContainer: { padding: 16 } });
