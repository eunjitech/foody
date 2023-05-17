import { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Dimensions,
  SafeAreaView,
  Platform,
} from "react-native";
import Constants from "expo-constants";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { CATEGORIES, MEALS } from "./data/dummy-data";
import CategoriesScreen from "./screens/CategoriesScreen";
import MealsOverView from "./screens/MealsOverView";

export default function App() {
  const [statusBarHeight, setStatusBarHeight] = useState(0);

  const Stack = createStackNavigator();

  useEffect(() => {
    setStatusBarHeight(Constants.statusBarHeight);
  }, []);

  // const renderItem = ({ item }) => {
  //   return (
  //     <View style={[styles.itemContainer, { backgroundColor: item.color }]}>
  //       <Text style={styles.itemText}>{item.title}</Text>
  //     </View>
  //   );
  // };

  const { width, height } = Dimensions.get("window");

  return (
    <>
      <StatusBar style="auto" />

      <NavigationContainer>
        <SafeAreaView style={{ flex: 1, backgroundColor: "#f1bcbe" }}>
          <Stack.Navigator
            initialRouteName="MealCategory"
            screenOptions={{
              cardStyle: {
                backgroundColor: "#e98f93",
              },
            }}
          >
            <Stack.Group
              screenOptions={{
                headerStyle: { backgroundColor: "#f1bcbe" },
              }}
            >
              <Stack.Screen
                name="MealCategory"
                component={CategoriesScreen}
                options={{
                  title: "All Categories",
                  headerTintColor: "#222",
                  cardStyle: {
                    backgroundColor: "#e98f93",
                  },
                }}
                initial
                screen
              />
              <Stack.Screen name="MealOverView" component={MealsOverView} />
            </Stack.Group>
          </Stack.Navigator>
        </SafeAreaView>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({});
