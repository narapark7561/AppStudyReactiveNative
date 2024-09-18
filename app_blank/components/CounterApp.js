import { useState } from "react";
import { View, Text, Button } from "react-native";

const CounterApp = () => {
  //const [state, setState] = useState(initialState)
  const [count, setCount] = useState(0);

  return (
    <View>
      <Text>Count: {count}</Text>
      <Button
        title="click to count!"
        onPress={() =>
          console.log(`The number you clicked ${setCount(count + 1)}`)
        }
      ></Button>
    </View>
  );
};

export default CounterApp;
