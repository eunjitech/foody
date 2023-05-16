import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function MealItem({ title }) {
  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
