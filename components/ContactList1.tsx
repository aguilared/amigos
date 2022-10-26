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
import Ajustes from "../assets/images/Ajustes.svg";
import Invitado from "../assets/images/Invitado.svg";
import Sininvitar from "../assets/images/Sininvitar.svg";
import Inactivo from "../assets/images/Inactivo.svg";

type ListData = {
  id: number;
  name: string;
  isFriend: boolean;
};

type ContactList1 = {
  list: {
    id: number;
    name: string;
    isFriend: boolean;
  }[];
};

const ContactList1 = ({ list }: ContactList1) => {
  return (
    <View>
      <ScrollView style={styles.scrollView}>
        {list.map((l, i) => (
          <ListItem key={l.id} bottomDivider>
            <ListItem.Content>
              <ListItem.Title>{l.name}</ListItem.Title>
            </ListItem.Content>
            {l.isFriend ? (
              <Invitado style={styles.logo} />
            ) : (
              <Inactivo style={styles.logo} />
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

export default ContactList1;
