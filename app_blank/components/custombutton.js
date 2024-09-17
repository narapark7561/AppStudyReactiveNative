import { Text, View } from "react-native";
import React, { Component } from "react";
import { Button } from "react-native";

export class Custombutton extends Component {
  render() {
    return (
      <View>
        <Button title="click" onPress={() => alert("Button pressed")}></Button>
        <Button
          title="Submit"
          onPress={() => console.warn("Submit button")}
        ></Button>
      </View>
    );
  }
}

export default Custombutton;
