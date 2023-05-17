import React, { useLayoutEffect } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import MealItem from "../components/MealsList/MealItem";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealsList from "../components/MealsList/MealsList";

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

  return <MealsList items={displayMeal} />;
}

const styles = StyleSheet.create({});
