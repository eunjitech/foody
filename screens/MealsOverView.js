import React, { useLayoutEffect } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import MealItem from "../components/MealItem";
import { MEALS, CATEGORIES } from "../data/dummy-data";

export default function MealsOverView({ route, navigation }) {
  //navigation을 인자로 받아 제공받는 프로퍼티
  const {
    params: { categoryId },
  } = route;

  const displayMeal = MEALS.filter((item) => {
    return item.categoryIds.indexOf(categoryId) >= 0;
  });

  useLayoutEffect(() => {
    const title = CATEGORIES.filter((item) => {
      return item.id === categoryId;
    }).title;

    navigation.setOptions({
      title: title,
    });
  }, [navigation, categoryId]);

  function renderItem({ item }) {
    const mealItemProps = {
      categoryId: item.categoryId,
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
        data={displayMeal}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  mealContainer: { padding: 16 },
});
