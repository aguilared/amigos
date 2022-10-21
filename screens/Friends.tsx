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
    name: "Lettie Phelps",
    avatar_url: "https://uifaces.co/our-content/donated/XdLjsJX_.jpg",
    subtitle: "Vice President",
    linearGradientColors: ["#FF9800", "#F44336"],
  },
  {
    name: "Tommy Lewis",
    avatar_url: "https://uifaces.co/our-content/donated/KtCFjlD4.jpg",
    subtitle: "Vice Chairman",
    linearGradientColors: ["#3F51B5", "#2196F3"],
  },
  {
    name: "Tillie Wells",
    avatar_url:
      "https://images.unsplash.com/photo-1498529605908-f357a9af7bf5?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=047fade70e80ebb22ac8f09c04872c40",
    subtitle: "CEO",
    linearGradientColors: ["#FFD600", "#FF9800"],
  },
  {
    name: "Lydia Gray",
    avatar_url: "https://randomuser.me/api/portraits/women/48.jpg",
    subtitle: "Lead Developer",
    linearGradientColors: ["#4CAF50", "#8BC34A"],
  },
  {
    name: "Jack Ramirez",
    avatar_url:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQwMDQ0NDk1OV5BMl5BanBnXkFtZTcwNDcxOTExNg@@._V1_UY256_CR2,0,172,256_AL_.jpg",
    subtitle: "CTO",
    linearGradientColors: ["#F44336", "#E91E63"],
  },
  {
    name: "Catherine Bennet",
    avatar_url:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQwMDQ0NDk1OV5BMl5BanBnXkFtZTcwNDcxOTExNg@@._V1_UY256_CR2,0,172,256_AL_.jpg",
    subtitle: "CTO",
    linearGradientColors: ["#F44336", "#E91E63"],
  },
  {
    name: "Wesley Buchanan",
    avatar_url:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQwMDQ0NDk1OV5BMl5BanBnXkFtZTcwNDcxOTExNg@@._V1_UY256_CR2,0,172,256_AL_.jpg",
    subtitle: "CTO",
    linearGradientColors: ["#F44336", "#E91E63"],
  },
  {
    name: "Lydia Gray",
    avatar_url:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQwMDQ0NDk1OV5BMl5BanBnXkFtZTcwNDcxOTExNg@@._V1_UY256_CR2,0,172,256_AL_.jpg",
    subtitle: "CTO",
    linearGradientColors: ["#F44336", "#E91E63"],
  },
  {
    name: "Jack Ramirez",
    avatar_url:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQwMDQ0NDk1OV5BMl5BanBnXkFtZTcwNDcxOTExNg@@._V1_UY256_CR2,0,172,256_AL_.jpg",
    subtitle: "CTO",
    linearGradientColors: ["#F44336", "#E91E63"],
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
          lightTheme
        />
      </View>

      <ContactList list={contacts} />
      {/* <EditScreenInfo path="/screens/TabOneScreen.tsx" /> */}
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
    height: 60,
    paddingHorizontal: 20,
    width: "100%",
  },
});
