import { View, Text } from "react-native";
import React from "react";
import Childarray from "./childarray";

const Arraycustomprops = () => {
  const items = ["Apples", "Banana", "Mango", "Orange", "Grapes"];
  return (
    <View>
      <Childarray items={items} />
    </View>
  );
};

export default Arraycustomprops;
