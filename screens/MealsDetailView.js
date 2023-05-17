import React, { useLayoutEffect, useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Button,
} from "react-native";
import { useRoute } from "@react-navigation/native";

import { MEALS } from "../data/dummy-data";
import { FavoritesContext } from "../store/context/favorites-context";
import MealDetail from "../components/MealDetail";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import IconButton from "../components/IconButton";

export default function MealsDetailView({ route, navigation }) {
  const mealsContext = useContext(FavoritesContext);

  console.log("meals", mealsContext);

  const {
    params: { categoryId },
  } = route;

  console.log("route", route);

  const selectMeal = MEALS.find((item) => item.id === categoryId);

  const mealIsFavorite = mealsContext.ids.includes(categoryId);

  function changeFavoriteStatusHandler() {
    if (mealIsFavorite) {
      mealsContext.removeFavorite(categoryId);
    } else {
      mealsContext.addFavorite(categoryId);
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            icon={mealIsFavorite ? "star" : "star-outline"}
            color="#000"
            onPress={changeFavoriteStatusHandler}
          />
        );
      },
    });
  }, [changeFavoriteStatusHandler, navigation]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: selectMeal.imageUrl }} />
      <Text style={styles.title}>{selectMeal.title}</Text>
      <View>
        <MealDetail
          duration={selectMeal.duration}
          complexity={selectMeal.complexity}
          affordability={selectMeal.affordability}
          textStyle={styles.detailText}
        />
      </View>
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={selectMeal.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={selectMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32, //스크롤 시 아래 여백을 줌
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    textAlign: "center",
    color: "white",
  },
  detailText: {
    color: "white",
  },
  subTitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  subtitleContainer: {
    margin: 4,
    padding: 6,
    borderBottomColor: "white",
    borderBottomWidth: 2,
  },
  listOuterContainer: {
    alignItems: "center",
  },
  listContainer: {
    width: "80%",
  },
});
