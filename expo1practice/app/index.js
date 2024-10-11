import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { ImageBackground } from "react-native";

const Index = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{ uri: "https://legacy.reactjs.org/logo-og.png" }}
      >
        <Text style={styles.text}>Home Page</Text>
        <Link href="/settings" style={styles.button}>
          Go to Setting Page
        </Link>
      </ImageBackground>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
  text: {
    fontSize: 26,
    color: "white",
  },
  button: {
    fontSize: 26,
    color: "white",
    textDecorationLine: "underline",
    textDecorationColor: "pink",
  },
});
