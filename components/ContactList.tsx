import React, { useState } from "react";
import { View, StyleSheet, Image, FlatList, ScrollView } from "react-native";
import {
  Text,
  ListItem,
  Avatar,
  Icon,
  Badge,
  ListItemProps,
  Button,
  Switch,
  lightColors,
} from "@rneui/themed";

type ListData = {
  id: number;
  name: string;
  isInvited: boolean;
  isInvitedStat: boolean;
};

type ContactList = {
  list: {
    id: number;
    name: string;
    isInvited: boolean;
    isInvitedStat: boolean;
  }[];
};

const ContactList = ({ list }: ContactList) => {
  return (
    <View>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        {list.map((l, i) => (
          <ListItem key={l.id} bottomDivider>
            <ListItem.Content>
              <ListItem.Title style={{ color: "#838383" }}>
                {l.name}
              </ListItem.Title>
            </ListItem.Content>
            {!l.isInvited! ? (
              <Icon
                type="feather"
                name="user-plus"
                color={"##515456"}
                style={{ opacity: 0.2 }}
              />
            ) : l.isInvitedStat ? (
              <Icon type="entypo" name="emoji-flirt" color={"#567497"} />
            ) : (
              <Icon type="entypo" name="emoji-flirt" color={"#C0C0C0"} />
            )}
          </ListItem>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    marginTop: 10,
    marginBottom: 10,
    height: 46,
    width: 46,
  },
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#efefef",
  },
  scrollView: {
    width: "100%",
  },
  containerStyles: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
});

export default ContactList;
