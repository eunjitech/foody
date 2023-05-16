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

export default function App() {
  const [statusBarHeight, setStatusBarHeight] = useState(0);

  useEffect(() => {
    setStatusBarHeight(Constants.statusBarHeight);
  }, []);

  const renderItem = ({ item }) => {
    return (
      <View style={[styles.itemContainer, { backgroundColor: item.color }]}>
        <Text style={styles.itemText}>{item.title}</Text>
      </View>
    );
  };

  const { width, height } = Dimensions.get("window");

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: Platform.OS === "android" ? statusBarHeight : 0,
      backgroundColor: "#eee",
    },
    itemsContainer: {
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-around",
    },
    itemContainer: {
      flex: 1,
      width: width / 2,
      height: width / 2,
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "row",
    },
    itemText: {
      fontSize: width > 500 ? 22 : 18,
      fontWeight: "bold",
      color: "#eee",
      textShadowColor: "#222",
      textShadowRadius: 4,
    },
  });

  return (
    <>
      <StatusBar style="auto" />
      <SafeAreaView style={styles.container}>
        <FlatList
          data={CATEGORIES}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.itemsContainer}
        />
      </SafeAreaView>
    </>
  );
}
