import React, { useContext } from "react";
import {
  View,
  Image,
  StyleSheet,
  Text,
  ScrollView,
  Dimensions,
} from "react-native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

import CurrentWeather from "../components/CurrentWeather";
import { LogoutButton } from "../components/LogoutButton";
import { AuthContext } from "../context/AuthContext";

const { width } = Dimensions.get("window");
const isTablet = width > 768; // Une tablette est généralement considérée comme ayant une largeur supérieure à 768 pixels.

const HomeScreen = () => {
  const { signOut } = useContext(AuthContext);

  return (
    <ScrollView style={styles.mainContainer}>
      <View style={styles.contentContainer}>
        <View style={styles.logoutButtonContainer}>
          <LogoutButton signOut={signOut} />
        </View>
        <CurrentWeather />
        <InfoBlock
          title="Humidité au sol"
          value="10%"
        />
      </View>
    </ScrollView>
  );
};

const InfoBlock = ({ title, value }) => (
  <View style={styles.infoContainer}>
    <Text style={styles.infoOne}>{title}</Text>
    <Text style={styles.infoTwo}>{value}</Text>
  </View>
);

export default HomeScreen;

const styles = StyleSheet.create({
  mainContainer: {
    fontFamily: FontFamily.poppinsMedium,
    flex: 1,
    backgroundColor: Color.background,
    paddingTop: 20,
    marginBottom: 100,
  },
  contentContainer: {
    alignItems: "center",
    width: "100%",
    paddingHorizontal: isTablet ? "10%" : "5%",
  },
  logoutButtonContainer: {
    alignSelf: "flex-end",
    margin: 10,
  },
  infoContainer: {
    flexDirection: "row",
    height: 50,
    marginBottom: 50,
    width: "100%",
    justifyContent: "space-between",
    maxWidth: 700,
  },
  infoOne: {
    flex: 3,
    backgroundColor: "rgba(255, 255, 255, 0.55)",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    borderRadius: 10,
    padding: 10,
    fontFamily: FontFamily.poppinsMedium

  },
  infoTwo: {
    fontFamily: FontFamily.poppinsMedium,
    flex: 1,
    backgroundColor: "rgba(255, 255, 255, 0.55)",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    borderRadius: 10,
    padding: 10,
    marginLeft: 10,
  },
});
