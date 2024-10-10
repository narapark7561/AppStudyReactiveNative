import { StyleSheet, Text, View, Button, Image } from "react";
import React, { useState } from "react";
import { TextInput, TouchableOpacity } from "react-native";

const Statecustom1 = () => {
  const [input, setInput] = useState("Enter the text");

  const [counter, setCounter] = useState(0);
  const [likes, setLikes] = useState(5);
  const [name, setName] = useState("John");
  const [person, setPerson] = useState({
    name: "Chai",
    age: 40,
    Designation: "Developer",
  });

  const [status, setStatus] = useState(true);
  const Handlepress = () => {
    setCounter(counter + 1);
  };
  const Handlepress1 = () => {
    setLikes(likes + 1);
  };

  const Handlepress2 = () => {
    setName("Nara");
    setPerson({ name: "Mario", age: 16, Designation: "Artist" });
    setInput(input);
  };
  return (
    <View style={styles.container}>
      <Text>Name is: {person.name}</Text>
      <Text> {status ? "Thursday" : "Friday"}</Text>
      <Text style={styles.textstyle}>
        Initial value for the Counter is: {counter}
      </Text>
      <Button title="Increment" onPress={Handlepress}></Button>
      <Button
        title="Decrement"
        onPress={() => setCounter(counter - 1)}
      ></Button>
      <TouchableOpacity onPress={Handlepress1}>
        {/* <Image source={require("../assets/mychai.jpg")} /> */}
      </TouchableOpacity>
      <Text>Likes: {likes}</Text>
      <Text style={styles.textstyle}>You pressed Button {counter} times</Text>
      <TextInput value={input} onChangeText={Handlepress2}></TextInput>
    </View>
  );
};

export default Statecustom1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "gray",
  },
  textstyle: {
    fontSize: 26,
    color: "green",
  },
});
