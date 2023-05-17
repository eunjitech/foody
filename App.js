import { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  Button,
  View,
  FlatList,
  Dimensions,
  SafeAreaView,
  Platform,
} from "react-native";
import Constants from "expo-constants";
import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { CATEGORIES, MEALS } from "./data/dummy-data";
import CategoriesScreen from "./screens/CategoriesScreen";
import MealsOverView from "./screens/MealsOverView";
import MealsDetailView from "./screens/MealsDetailView";
import FavoriteScreen from "./screens/FavoriteScreen";

export default function App() {
  const [statusBarHeight, setStatusBarHeight] = useState(0);

  // const Stack = createStackNavigator();
  const Stack = createNativeStackNavigator();
  const Drawer = createDrawerNavigator();

  function DrawerNavigator() {
    return (
      <Drawer.Navigator
        screenOptions={{
          sceneContainerStyle: {
            backgroundColor: "#e98f93",
          },
          headerStyle: {
            backgroundColor: "#f1bcbe",
          },
          drawerContentStyle: { backgroundColor: "#e98f93", color: "#000" },
          drawerActiveTintColor: "#000",
          drawerActiveBackgroundColor: "#f1bcbe",
        }}
      >
        <Drawer.Screen
          name="Categories"
          component={CategoriesScreen}
          options={{
            title: "All Categories",
          }}
        />
        <Drawer.Screen name="FavoriteScreen" component={FavoriteScreen} />
      </Drawer.Navigator>
    );
  }

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
              contentStyle: {
                backgroundColor: "#e98f93",
              },
              headerStyle: {
                backgroundColor: "#f1bcbe",
              },
            }}
          >
            <Stack.Screen
              name="MealCategory"
              component={DrawerNavigator}
              options={{
                headerTintColor: "#222",
                headerShown: false,
                // headerBackTitle: "All Categories", not working
              }}
              initial
              screen
            />
            <Stack.Screen name="MealOverView" component={MealsOverView} />
            <Stack.Screen name="MealDetailView" component={MealsDetailView} />
          </Stack.Navigator>
        </SafeAreaView>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({});
