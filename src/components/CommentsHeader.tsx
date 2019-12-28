import React from "react";
import { ArticleType } from "../data/types";
import { Text, StyleSheet, View } from "react-native";
import extractHostname from "../helpers/url";
import { ArticleInfo } from "./ArticleInfo";
import * as WebBrowser from "expo-web-browser";
import { Divider } from "react-native-elements";

type Props = {
  article: ArticleType;
};
export default function CommentsHeader(props: Props) {
  let url_string: any;

  if (props.article.url) {
    url_string = (
      <Text
        style={styles.url}
        onPress={async () => {
          await WebBrowser.openBrowserAsync(props.article.url, {
            enableBarCollapsing: true
          });
        }}
      >
        {extractHostname(props.article.url)}
      </Text>
    );
  } else {
    url_string = <></>;
  }

  return (
    <View>
      <View style={styles.view}>
        <Text style={styles.title}>{props.article.title}</Text>
        {url_string}
        <ArticleInfo
          user={props.article.submitter_user}
          karma={props.article.score}
          dateTime={props.article.created_at}
        />
      </View>
      <Divider style={{ marginTop: "4%" }} />
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    paddingHorizontal: "4%"
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    paddingVertical: "4%"
  },
  url: {
    paddingHorizontal: "1%",
    fontSize: 15,
    color: "#007AFF",
    textTransform: "uppercase"
  }
});
