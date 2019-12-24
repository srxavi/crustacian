import React, { useEffect, useState } from "react";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import Home from "./screens/Home";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Comments from "./screens/Comments";
import { ThemeProvider } from "react-native-elements";
import Author from "./screens/Author";

const AppNavigator = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: () => ({
      title: "Lobste.rs"
    })
  },
  Details: {
    screen: Comments
  },
  Author: {
    screen: Author
  }
});

const AppContainer = createAppContainer(AppNavigator);

export default function App() {
  const [isReady, setIsReady] = useState(false);

  async function start() {
    await Font.loadAsync({
      ...Ionicons.font
    });
    setIsReady(true);
  }

  useEffect(() => {
    start();
  }, []);

  if (!isReady) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider>
      <AppContainer />
    </ThemeProvider>
  );
}
