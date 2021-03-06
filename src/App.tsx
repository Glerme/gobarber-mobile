import React from "react";
import "react-native-gesture-handler";
import { View, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import Routes from "./routes";

const App: React.FC = () => (
  <NavigationContainer>
    <StatusBar barStyle="default" backgroundColor="#312e38" translucent />

    <View style={{ flex: 1, backgroundColor: "#312e38" }}>
      <Routes />
    </View>
  </NavigationContainer>
);

export default App;
