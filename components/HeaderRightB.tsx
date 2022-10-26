import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Dialog, Icon } from "@rneui/themed";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useState } from "react";
import Ajustes from "../assets/images/Ajustes.svg";

export default function HeaderRightB() {
  const navigation = useNavigation();
  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);

  const toggleDialog1 = () => {
    setVisible1(!visible1);
  };

  return (
    <>
      <TouchableOpacity onPress={toggleDialog1}>
        <Icon type="feather" name="plus" color="#618695" />
      </TouchableOpacity>
      <Dialog isVisible={visible1} onBackdropPress={toggleDialog1}>
        <Text style={styles.textNumber}>Invita una Empresa</Text>
        <Dialog.Title title="Cuando confirme recibiras:" />
        <View style={[styles.container, { flexDirection: "row" }]}>
          <View style={{ flex: 1 }}>
            <Ajustes />
          </View>
          <View style={{ flex: 2, width: "10%" }}>
            <Text style={styles.textNumber3}>+4</Text>
          </View>
        </View>

        <Dialog.Actions>
          <Dialog.Button
            title="Invitar"
            onPress={() => {
              console.log(`Option ${checked} was selected!`);
              toggleDialog1();
            }}
          />
          <Dialog.Button title="Cancelar" onPress={toggleDialog1} />
        </Dialog.Actions>
      </Dialog>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  logo: {
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  textNumber: {
    color: "#0086B9",
    height: 34,
    width: 360,
    fontSize: 24,
    letterSpacing: 0,
    lineHeight: 26,
    fontfamily: "Gotham Rounded",
  },
  textNumber3: {
    color: "#0086B9",
    height: 34,
    width: 360,
    fontSize: 24,
    letterSpacing: 0,
    lineHeight: 26,
    textAlign: "left",

    fontfamily: "Gotham Rounded",
  },
  textNumber4: {
    color: "#0086B9",
    height: 34,
    width: 360,
    fontSize: 24,
    letterSpacing: 0,
    lineHeight: 26,
    textAlign: "center",

    fontfamily: "Gotham Rounded",
  },
  textTitulo: {
    color: "#0086B9",
    height: 49,
    width: 241,
    fontSize: 22,
    fontWeight: 500,
    letterSpacing: 0,
    lineHeight: 26,
    textAlign: "center",
    fontfamily: "Gotham Rounded",
  },
});
