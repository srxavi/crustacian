import React, { useEffect, useState } from "react";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import Home from "./src/screens/Home";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Comments from "./src/screens/Comments";
import { ThemeProvider } from "react-native-elements";
import Author from "./src/screens/Author";

const AppNavigator = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: () => ({
      title: "Top Stories"
    })
  },
  Comments: {
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
    await Font.loadAsync(Ionicons.font);
    await Font.loadAsync(FontAwesome.font);
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
