// passing multiple props

import { View, Text, Image } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";

// parent component
const Multipleprops = () => {
  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <Childprops1
        title="Submit"
        count={6}
        onPress={() => alert("Prompted!")}
      />
      {/* //passing 3 parameters to child! */}
    </View>
  );
};

export default Multipleprops;

// child component //diffrent data type 이기때문에 props으로 안하고 각자의 데이터를 파라미터로넣어준다.
const Childprops1 = ({ title, count, onPress }) => {
  return (
    <TouchableOpacity
      style={{ backgroundColor: "coral", padding: 10, borderRadius: 10 }}
      onPress={onPress}
    >
      <Image
        style={{ width: 130, height: 100 }}
        // source={{ uri: "https://avatar.iran.liara.run/public/96%22" }}
        source={(require = "../assets/mychai.jpg")}
      ></Image>
      <Text
        style={{
          fontSize: 20,
          color: "white",
          fontWeight: "bold",
          marginTop: 20,
        }}
      >
        {title}(Count is: {count})
      </Text>
    </TouchableOpacity>
  );
};
