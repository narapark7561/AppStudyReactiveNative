import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const Customimage = () => {
  return (
    <View>
      <Text>Images</Text>
      {/* local folder images */}
      <Image
        style={styles.image1}
        source={require("../assets/kingpuppy.jpeg")}
      ></Image>
      {/* image from url */}
      <View>
        <Image
          style={styles.image1}
          source={{
            uri: "https://avatar.iran.liara.run/public/96%22",
          }}
        ></Image>
      </View>
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
  },
});
