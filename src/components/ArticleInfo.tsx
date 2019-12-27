import React from "react";
import { Icon } from "react-native-elements";
import { Text, View, StyleSheet } from "react-native";
import { useNavigation } from "react-navigation-hooks";
import { UserType } from "../data/types";
import moment from "moment";

export const styles = StyleSheet.create({
  info: {
    flexDirection: "row",
    paddingTop: "2%"
  }
});

type Props = {
  user: UserType;
  karma: number;
  dateTime: string;
};
export function ArticleInfo(props: Props) {
  const userUrl = `https://lobste.rs/u/${props.user.username}.json`;
  const { navigate } = useNavigation();

  return (
    <View style={styles.info}>
      <Icon type="font-awesome" name="angle-up" style={{ fontSize: 1 }} />
      <View style={{ ...styles.info, paddingTop: "2%" }}>
        <Text>{props.karma}</Text>
        <Text
          style={{ fontWeight: "bold", paddingLeft: "4%" }}
          onPress={() => {
            navigate("Author", { url: userUrl, user: props.user });
          }}
        >
          {props.user.username}
        </Text>
        <Text style={{ paddingLeft: "4%" }}>
          {moment(props.dateTime).fromNow()}
        </Text>
      </View>
    </View>
  );
}
