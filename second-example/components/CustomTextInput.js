import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const CustomTextInput = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={{ uri: "https://avatar.iran.liara.run/public/96%22" }}
      ></Image>
      <Image
        style={styles.logo}
        source={(require = "../assets/kingpuppy.jpeg")}
      ></Image>
    </View>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },

  logo: {
    width: 100,
    height: 100,
  },
});
