// import React, { Component, useState } from "react";
// import { View, Text, Button, Alert, Pressable } from "react-native";

// //class components
// // class Index extends Component {
// //   render() {
// //there are two way, as class or as function
// const Index = () => {
//   // output을 상태로 정의
//   const [output, setOutput] = useState("");

//   const handleTouch = () => {
//     console.log("Button pressed!!");
//     Alert.alert("Simple button pressed");
//   };

//   const Agechecking = () => {
//     let age = 22;
//     if (age < 12) {
//       setOutput("Age less than 12"); // 상태 업데이트
//     } else {
//       setOutput("Age greater than 12"); // 상태 업데이트
//     }
//   };

//   // const Agechecking = () => {
//   //   let age = 23;
//   //   let output = "";
//   //   if (age < 12) {
//   //     output = "Age less than 12";
//   //   } else {
//   //     output = "Age greater than";
//   //   }
//   // };
//   return (
//     <View style={{ height: "50%" }}>
//       <View
//         style={{
//           backgroundColor: "green",
//           flex: 1,
//           justifyContent: "flex-start",
//           alignItems: "flex-start",
//         }}
//       >
//         <Text style={{ fontSize: 40, color: "pink", flex: 1 }}>Box1</Text>
//       </View>
//       <View style={{ backgroundColor: "yellow", flex: 2 }}>
//         <Text style={{ fontSize: 40, color: "pink" }}>Box2</Text>
//       </View>
//       <View style={{ backgroundColor: "grey", flex: 3 }}>
//         <Text style={{ fontSize: 40, color: "pink" }}>Box3</Text>
//       </View>
//       <View style={{ backgroundColor: "coral", flex: 0.25 }}></View>
//       <Text style={{ fontSize: 40, color: "pink" }}>Hello Nara!!!</Text>
//       <View style={{ marginBottom: 10 }}>
//         <Button title="Click me!" color="#863575"></Button>
//       </View>
//       <View style={{ marginBottom: 10 }}>
//         <Button title="Click me!" color="#863575"></Button>
//       </View>
//       <View style={{ marginBottom: 10 }}>
//         <Button
//           title="Click me!"
//           color="#863575"
//           onPress={handleTouch}
//         ></Button>
//         <Pressable style={{ alignItems: "center", marginTop: 30 }}>
//           <Text
//             style={{ backgroundColor: "yellow", fontSize: 20 }}
//             onPress={Agechecking}
//             // onPress={() => Alert.alert("Pressable button pressed!")}
//             // onPressIn={() => Alert.alert("This is press in")}
//             // onPressOut={() => Alert.alert("This is press out")}
//           >
//             I am pressable!
//           </Text>
//         </Pressable>
//         <Text style={{ fontSize: 40 }}>{output}</Text>
//       </View>
//     </View>
//   );
// };

// export default Index;

// // import { StyleSheet, Text, View } from "react-native";

// //기본 함수형 컴포넌트와 스타일링
// // export default function Page() {
// //   return (
// //     <View style={styles.container}>
// //       <View style={styles.main}>
// //         <Text style={styles.title}>Hello World</Text>
// //         <Text style={styles.subtitle}>This is the first page of your app.</Text>
// //       </View>
// //     </View>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     alignItems: "center",
// //     padding: 24,
// //   },
// //   main: {
// //     flex: 1,
// //     justifyContent: "center",
// //     maxWidth: 960,
// //     marginHorizontal: "auto",
// //   },
// //   title: {
// //     fontSize: 64,
// //     fontWeight: "bold",
// //   },
// //   subtitle: {
// //     fontSize: 36,
// //     color: "#38434D",
// //   },
// // });

// // class components and functional components

// // import { Text, View } from "react-native";
// // import React, { Component } from "react";

// // // class Index extends Component {
// // //   render() {
// // //     return (
// // //       <View
// // //         style={{
// // //           flex: 1, //percent of screen
// // //           backgroundColor: "pink",
// // //           justifyContent: "center",
// // //           alignItems: "center",
// // //         }}
// // //       >
// // //         <Text style={{ fontSize: 40, color: "green" }}>Hello Nara!</Text>
// // //       </View>
// // //     );
// // //   }
// // // }

// // // export default Index; //dafaddf

// // const Index = () => {
// //   let a = "happy";
// //   a = 25;
// //   const age = 56;
// //   return (
// //     <View
// //       style={{
// //         flex: 1, //percent of screen
// //         backgroundColor: "pink",
// //         justifyContent: "center",
// //         alignItems: "center",
// //       }}
// //     >
// //       <Text>{a < 20 ? "hello" : "hi"}</Text>
// //       <Text style={{ fontSize: 20, color: "blue" }}>{a}</Text>
// //       <Text style={{ fontSize: 20, color: "blue" }}>Age is {age}</Text>
// //       <Text style={{ fontSize: 40, color: "green" }}>Hello World!</Text>
// //     </View>
// //   );
// // };

// export default Index;

import { View, Text } from "react-native";
import React from "react";
import Custombutton from "../components/custombutton";
import Customimage from "../components/customimage";
import Narabutton from "../components/NaraButton";
import { ScrollView } from "react-native-web";
import CounterApp from "../components/CounterApp";

//this is our funtion
const Index = () => {
  return (
    // <View style={{ flex: , justifyContent: "center", alignItems: "center" }}>
    <ScrollView
      contentContainerStyle={{ justifyContent: "center", alignItems: "center" }} // 자식 요소에 대한 정렬을 여기서 설정
      style={{ flex: 1 }} // ScrollView 자체에 대한 스타일
    >
      <Text style={{ fontSize: 25, backgroundColor: "yello" }}>
        This is our parent component
      </Text>
      <Custom_text />
      <Custom_text />
      <Custom_text />
      <Empdate />
      <Custombutton />
      <Customimage />
      <Narabutton />
      <CounterApp />
      {/* // </View> */}
    </ScrollView>
  );
}; //parent functon

export default Index;
//component이름은 대문자로!!

//custom function
const Custom_text = () => {
  return (
    <View>
      <Text style={{ fontSize: 25, backgroundColor: "green" }}>
        This is child component
      </Text>
    </View>
  );
};

const Empdate = () => {
  const name = "John";
  const id = "EMP001";
  const email = "John@gmail.com";
  return (
    <View>
      <Text>This is second child</Text>
      <Text>Employee name: {name}</Text>
      <Text>Employee id: {id}</Text>
      <Text>Employee email: {email}</Text>
      <Text>This is second child</Text>
    </View>
  );
};
