// import { StyleSheet, Text, View } from "react-native";

//기본 함수형 컴포넌트와 스타일링
// export default function Page() {
//   return (
//     <View style={styles.container}>
//       <View style={styles.main}>
//         <Text style={styles.title}>Hello World</Text>
//         <Text style={styles.subtitle}>This is the first page of your app.</Text>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     padding: 24,
//   },
//   main: {
//     flex: 1,
//     justifyContent: "center",
//     maxWidth: 960,
//     marginHorizontal: "auto",
//   },
//   title: {
//     fontSize: 64,
//     fontWeight: "bold",
//   },
//   subtitle: {
//     fontSize: 36,
//     color: "#38434D",
//   },
// });

// class components and functional components

import { Text, View } from "react-native";
import React, { Component } from "react";

// class Index extends Component {
//   render() {
//     return (
//       <View
//         style={{
//           flex: 1, //percent of screen
//           backgroundColor: "pink",
//           justifyContent: "center",
//           alignItems: "center",
//         }}
//       >
//         <Text style={{ fontSize: 40, color: "green" }}>Hello Nara!</Text>
//       </View>
//     );
//   }
// }

// export default Index; //dafaddf

const Index = () => {
  let a = "happy";
  a = 25;
  const age = 56;
  return (
    <View
      style={{
        flex: 1, //percent of screen
        backgroundColor: "pink",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>{a < 20 ? "hello" : "hi"}</Text>
      <Text style={{ fontSize: 20, color: "blue" }}>{a}</Text>
      <Text style={{ fontSize: 20, color: "blue" }}>Age is {age}</Text>
      <Text style={{ fontSize: 40, color: "green" }}>Hello World!</Text>
    </View>
  );
};

export default Index;
