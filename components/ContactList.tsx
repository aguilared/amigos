import React, { useState } from "react";
import { View, StyleSheet, Image, FlatList } from "react-native";
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
import Ajustes from "../assets/images/Ajustes.svg";
import Invitado from "../assets/images/Invitado.svg";
import Sininvitar from "../assets/images/Sininvitar.svg";

type ListData = {
  id: number;
  name: string;
  isFriend: boolean;
};

type ContactList = {
  list: {
    id: number;
    name: string;
    isFriend: boolean;
  }[];
};

const ContactList = ({ list }: ContactList) => {
  return (
    <View>
      {list.map((l, i) => (
        <ListItem key={l.id} bottomDivider>
          <ListItem.Content>
            <ListItem.Title>{l.name}</ListItem.Title>
          </ListItem.Content>
          {l.isFriend ? (
            <Invitado style={styles.logo} />
          ) : (
            <Sininvitar style={styles.logo} />
          )}
        </ListItem>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    height: "125px",
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
