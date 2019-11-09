import React, { useEffect, useState } from "react";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import Home from "./screens/Home";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Details from "./screens/Details";

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: Home
    },
    Details: {
      screen: Details
    }
  },
  {
    navigationOptions: {
      header: null
    }
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default function App() {
  const [isReady, setIsReady] = useState(false);

  async function start() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
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

  return <AppContainer />;
}
