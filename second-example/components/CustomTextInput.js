import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const CustomTextInput = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={{ uri: "https://avatar.iran.liara.run/public/96%22" }}
      ></Image>
      {/* <Image
        style={styles.logo}
        source={(require = "../assets/mychai.jpg")}
      ></Image> */}
      <Text
        style={{
          fontSize: 20,
          backgroundColor: "white",
          fontWeight: "bold",
          marginTop: 10,
        }}
      >
        EVERY REACT NATIVE APP
      </Text>

      <View style={{ marginTop: 20, alignItems: "center" }}>
        <View
          style={{
            backgroundColor: "white",
            borderRadius: 20,
            paddingHorizontal: 10,
            paddingVertical: 5,
            marginBottom: 10,
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 20, color: "green" }}>We Did it again</Text>
        </View>
      </View>

      <View style={{ marginTop: 20, alignItems: "center" }}>
        <View
          style={{
            backgroundColor: "white",
            borderRadius: 20,
            paddingHorizontal: 10,
            paddingVertical: 5,
            marginBottom: 10,
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 20, color: "green" }}>We Did it again</Text>
        </View>
      </View>

      <View style={{ marginTop: 20, alignItems: "center" }}>
        <View
          style={{
            backgroundColor: "white",
            borderRadius: 20,
            paddingHorizontal: 10,
            paddingVertical: 5,
            marginBottom: 10,
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 20, color: "green" }}>We Did it again</Text>
        </View>
      </View>

      <View style={{ marginTop: 20, alignItems: "center" }}>
        <View
          style={{
            backgroundColor: "white",
            borderRadius: 20,
            paddingHorizontal: 10,
            paddingVertical: 5,
            marginBottom: 10,
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 20, color: "green" }}>We Did it again</Text>
        </View>
      </View>
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
