import { useState } from "react";
import { StyleSheet } from "react-native";
import { SearchBar, FAB, Icon } from "@rneui/themed";
import { LinearGradient } from "expo-linear-gradient";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";
import ContactList from "../components/ContactList";
//{ navigation }: RootTabScreenProps<'TabOne'>
import Activado from "../assets/images/Activado.svg";

const contactList = [
  {
    id: 1,
    name: "Lettie Phelps",
    isInvited: false,
    isInvitedStat: false,
  },
  {
    id: 2,
    name: "Josephine Gordon",
    isInvited: true,
    isInvitedStat: false,
  },
  {
    id: 3,
    name: "Tommy Lewis",
    isInvited: false,
    isInvitedStat: false,
  },
  {
    id: 4,
    name: "Tillie Wells",
    isInvited: true,
    isInvitedStat: false,
  },
  {
    id: 5,
    name: "Lydia Gray",
    isInvited: true,
    isInvitedStat: true,
  },
  {
    id: 6,
    name: "Jack Ramirez",
    isInvited: false,
    isInvitedStat: false,
  },
  {
    id: 7,
    name: "Catherine Bennet",
    isInvited: true,
    isInvitedStat: false,
  },
  {
    id: 8,
    name: "Wesley Buchanan",
    isInvited: false,
    isInvitedStat: false,
  },
  {
    id: 9,
    name: "Lydia Grayy",
    isInvited: true,
    isInvitedStat: true,
  },
  {
    id: 10,
    name: "Jack Ramirezz",
    isInvited: false,
    isInvitedStat: false,
  },
  {
    id: 12,
    name: "Catherine Bennett",
    isInvited: true,
    isInvitedStat: false,
  },
  {
    id: 13,
    name: "Wesley Buchanann",
    isInvited: false,
    isInvitedStat: false,
  },
  {
    id: 14,
    name: "Catherine Bennett88",
    isInvited: true,
    isInvitedStat: false,
  },
];

export default function Friends() {
  const [search, setSearch] = useState("");
  const [contacts, setContacts] = useState(contactList);

  const updateSearch = (search: string) => {
    setSearch(search);
    setContacts(contactList.filter((v) => v.name.includes(search)));
  };
  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <SearchBar
          placeholder="Buscas a alguien?"
          onChangeText={updateSearch}
          value={search}
          containerStyle={{
            backgroundColor: "transparent",
            borderWidth: 1,
            borderColor: "#eaeaea",
            borderRadius: 20,
          }}
          inputContainerStyle={{
            backgroundColor: "transparent",
            borderColor: "#eaeaea",
          }}
          inputStyle={{ backgroundColor: "white" }}
          lightTheme
        />
      </View>
      <View style={styles.container}>
        {contacts && contacts.length > 0 ? (
          <ContactList list={contacts} />
        ) : (
          <Text style={{ marginVertical: 20, textAlign: "center" }}>
            No se encontraron contactos.
          </Text>
        )}
      </View>
      <View style={styles.footerContainer}>
        <LinearGradient
          colors={["#00A6D9", "#3D82AD"]}
          style={{
            paddingVertical: 10,
            borderRadius: 10,
            paddingHorizontal: 20,
            flexDirection: "row",
            justifyContent: "space-between",
            width: 314,
            height: 58,
          }}
          start={{ x: -1, y: 0 }}
          end={{ x: 1, y: 0 }}
        >
          <Activado style={styles.logo} />
          <Icon name="creditcard" type="antdesign" color="white" />
          <Icon name="shoppingcart" type="antdesign" color="white" />
        </LinearGradient>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchContainer: {
    marginTop: 10,
    marginBottom: 5,
    height: 70,
    paddingHorizontal: 20,
    width: "100%",
  },
  footerContainer: {
    position: "absolute",
    alignSelf: "center",
    bottom: 2,
    paddingHorizontal: 40,
  },
  logo: {
    marginTop: 1,
    marginBottom: 1,
  },
});
