import { useState } from "react";
import { StyleSheet } from "react-native";
import { SearchBar } from "@rneui/themed";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";
import ContactList from "../components/ContactList";
//{ navigation }: RootTabScreenProps<'TabOne'>

const contactList = [
  {
    id: 1,
    name: "Lettie Phelps",
    isFriend: false,
  },
  {
    id: 2,
    name: "Tommy Lewis",
    isFriend: true,
  },
  {
    id: 3,
    name: "Tillie Wells",
    isFriend: false,
  },
  {
    id: 4,
    name: "Lydia Gray",
    isFriend: false,
  },
  {
    id: 5,
    name: "Jack Ramirez",
    isFriend: false,
  },
  {
    id: 6,
    name: "Catherine Bennet",
    isFriend: true,
  },
  {
    id: 7,
    name: "Wesley Buchanan",
    isFriend: false,
  },
  {
    id: 8,
    name: "Lydia Gray",
    isFriend: false,
  },
  {
    id: 9,
    name: "Jack Ramirez",
    isFriend: false,
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
            borderRadius: 20,
          }}
          inputContainerStyle={{
            backgroundColor: "transparent",
          }}
          lightTheme
        />
      </View>

      {contacts && contacts.length > 0 ? (
        <ContactList list={contacts} />
      ) : (
        <Text style={{ marginVertical: 20, textAlign: "center" }}>
          No se encontraron contactos.
        </Text>
      )}
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
});
