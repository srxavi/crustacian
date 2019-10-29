import React, { useEffect, useState } from "react";
import { AppLoading } from "expo";
import { Container, Text, Body, Title, Header, Content } from "native-base";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { ArticleList } from "./components/ArticleList";

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

  return (
    <Container>
      <Header>
        <Body>
          <Title>Lobste.rs</Title>
        </Body>
      </Header>
      <Content>
        <ArticleList />
      </Content>
    </Container>
  );
}
