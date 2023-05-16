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
import { CATEGORIES, MEALS } from "./data/dummy-data";
import CategoriesScreen from "./screens/CategoriesScreen";

export default function App() {
  const [statusBarHeight, setStatusBarHeight] = useState(0);

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
      <SafeAreaView style={styles.container}>
        {/* <FlatList
          data={CATEGORIES}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.itemsContainer}
        /> */}
        <CategoriesScreen />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({});
