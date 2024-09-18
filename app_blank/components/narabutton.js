import { Component } from "react";
import { Button } from "react-native";
import { Text, View } from "react-native";

export class Narabutton extends Component {
  render() {
    return (
      <View>
        <Button
          title="Try!"
          onPress={() => alert("Nara button pressed!")}
        ></Button>
        <Button
          title="try to print in console!"
          onPress={() => console.log("try clicked!")}
        ></Button>
        <Button
          title="try to warn on console"
          onPress={() => console.warn("this is warning!")}
        ></Button>
      </View>
    );
  }
}

//try to as function component!

// const Narabutton = () => {
//   return (
//     <View>
//       <Button
//         title="Try!"
//         onPress={() => alert("Button pressed using function component!")}
//       ></Button>
//     </View>
//   );
// };
export default Narabutton;
