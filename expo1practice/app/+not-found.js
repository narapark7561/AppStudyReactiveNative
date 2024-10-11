import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

const NotFound = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 26, color: "red" }}>Error in the Route</Text>
      <Link style={{ color: "green" }} href="/">
        Click to nagivate Home Page
      </Link>
    </View>
  );
};

export default NotFound;
