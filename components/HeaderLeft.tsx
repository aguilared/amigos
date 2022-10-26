import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import { Icon } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";

export default function HeaderLeft() {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate("Modal")}>
      <Icon type="ionicon" name="ios-settings-outline" color="#618695" />
    </TouchableOpacity>
  );
}
