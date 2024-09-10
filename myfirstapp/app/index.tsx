import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "lightpink"
      }}
    >
      <Text style={{fontSize:40, color:"green"}}>Hello Nara!</Text>
    </View>
  );
}
