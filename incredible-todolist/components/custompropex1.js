import { View, Text } from "react-native";
import React from "react";

// parent component
const Custompropex1 = () => {
  return (
    <View>
      <Childprops name="John" status="Software Developer" />
    </View>
  );
};

export default Custompropex1; //each file에는 parent function이있다. 이걸 바꾸면 그게 parent function이 된다. 하나의 부모 함수안에 아이들 함수가들어감.

const Childprops = (props) => {
  return (
    <View>
      <Text style={{ fontSize: 20 }}>{props.name}</Text>
      <Text style={{ fontSize: 20 }}>{props.status}</Text>
    </View>
  );
};
