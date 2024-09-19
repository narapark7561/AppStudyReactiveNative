import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const Customimage = () => {
  return (
    <View style={styles.rowContainer}>
      <Text>Images</Text>
      {/* local folder images */}
      <Image
        style={styles.image1}
        source={require("../assets/kingpuppy.jpeg")}
      ></Image>
      {/* image from url */}
      <Image
        style={styles.image1}
        source={{
          uri: "https://avatar.iran.liara.run/public/96%22",
        }}
      ></Image>
      <Image
        style={styles.image1}
        source={require("../assets/namecard.jpg")}
      ></Image>
    </View>
  );
};

export default Customimage;

const styles = StyleSheet.create({
  image1: {
    width: 250,
    height: 250,
    borderColor: "pink",
    borderWidth: 8,
    borderCurve: 3,
    flexDirection: "row",
  },

  rowContainer: {
    flexDirection: "row", // 요소들을 가로로 나열
    // justifyContent: "center", // 중앙 정렬
    // alignItems: "center", // 세로 중앙 정렬
  },
});
