// import { View, StyleSheet, Platform } from "react-native";
// import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

// import EmployeeVerification from "./project/EmployeeVerification/pages/EmployeeVerfication";
// import StudentVerification from "./project/StudentVerification/pages/StudentVerification";

// const App = () => {
//   return (
//     <SafeAreaProvider>
//       <SafeAreaView style={styles.safeArea}>
//         <View style={styles.container}>
//           <EmployeeVerification />
//           {/* <StudentVerification /> */}
//         </View>
//       </SafeAreaView>
//     </SafeAreaProvider>
//   );
// };

// const styles = StyleSheet.create({
//   safeArea: {
//     flex: 1,
//   },
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
// });

// export default App;

import React from "react";
import { View } from "react-native";
import { Text } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { SafeAreaView } from "react-native";

const App = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text>Welcome to the App!</Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;
