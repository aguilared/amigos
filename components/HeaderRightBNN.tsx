import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import { ButtonGroup, Dialog, Button } from "@rneui/themed";
import { useNavigation, useRoute } from "@react-navigation/native";
import Ajustes from "../assets/images/Ajustes.svg";
import { useState } from "react";

export default function HeaderRightB() {
  const navigation = useNavigation();
  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);

  const toggleDialog1 = () => {
    setVisible1(!visible1);
  };
  const toggleDialog2 = () => {
    setVisible2(!visible2);
  };

  return (
    <View style={{ width: "10%" }}>
      <Button
        title="Open Simple Dialog"
        onPress={toggleDialog1}
        buttonStyle={styles.button}
      />
      <Dialog isVisible={visible1} onBackdropPress={toggleDialog1}>
        <Dialog.Title title="Dialog Title" />
        <Text>Dialog body text. Add relevant information here.</Text>
      </Dialog>
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
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
  textNumber: {
    color: "#0086B9",
    height: 34,
    width: 60,
    fontSize: 24,
    fontfamily: "Gotham Rounded",
  },
  button: {
    borderRadius: 6,
    width: 220,
    margin: 20,
  },
  buttonContainer: {
    margin: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});
