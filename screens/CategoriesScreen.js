import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";

import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealsOverView from "./MealsOverView";

export default function CategoriesScreen({ navigation }) {
  function renderItem({ item }) {
    function pressHandler() {
      navigation.navigate("MealOverView", { categoryId: item.id });
    }
    return (
      <CategoryGridTile
        title={item.title}
        color={item.color}
        onPress={pressHandler}
      />
    );
  }

  return (
    <FlatList
      data={CATEGORIES}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      numColumns={2}
      // contentContainerStyle={styles.itemsContainer}
    />
  );
}

const styles = StyleSheet.create({});
