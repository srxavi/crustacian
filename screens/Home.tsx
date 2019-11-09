import React from "react";
import { Container, Header, Body, Title, Content } from "native-base";
import { ArticleList } from "../components/ArticleList";

const Home = () => {
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
};

export default Home;
