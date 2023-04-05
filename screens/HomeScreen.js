import * as React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import InfoContainer from "../components/InfoContainer";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const HomeScreen = () => {
  return (
    <View style={styles.screen1}>
      <View style={styles.bg} />
      <Image
        style={styles.roundSocialNotifications}
        resizeMode="cover"
        source={require("../assets/-round--social--notifications-none.png")}
      />
      <View style={styles.info}>
        <View style={styles.chart}>
          <View style={[styles.chartChild, styles.chartChildShadowBox]} />
          <View style={styles.rectangle} />
        </View>
        <View style={[styles.chart1, styles.chart1Layout]}>
          <View style={[styles.rectangle1, styles.chart1Layout]} />
        </View>
        <Text style={[styles.text, styles.textTypo]}>20:00</Text>
        <Text style={[styles.prochainArrosage, styles.textTypo]}>
          prochain arrosage
        </Text>
        <Image
          style={[styles.vectorIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/vector.png")}
        />
      </View>
      <InfoContainer />
      <View style={[styles.rectangle2, styles.chartChildShadowBox]} />
      <Text style={[styles.lyon, styles.lyonFlexBox]}>LYON</Text>
      <Text style={[styles.lyon1, styles.lyonFlexBox]}>35°</Text>
    
    </View>
  );
};

const styles = StyleSheet.create({
  chartChildShadowBox: {
    height: 391,
    position: "absolute",
    shadowOpacity: 1,
    shadowOffset: {
      width: 50,
      height: 80,
    },
  },
  chart1Layout: {
    width: 76,
    height: 56,
    position: "absolute",
  },
  textTypo: {
    textAlign: "left",
    color: Color.steelblue,
    fontFamily: FontFamily.mulishBold,
    fontWeight: "700",
    fontSize: FontSize.size_xl,
    top: 546,
    position: "absolute",
  },
  iconLayout: {
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  lyonFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    width: "51.47%",
    height: "6.53%",
    position: "absolute",
  },
  bg: {
    top: 30,
    left: 313,
    borderRadius: 28,
    backgroundColor: Color.aliceblue_300,
    shadowColor: "rgba(255, 255, 255, 0.02)",
    shadowRadius: 12,
    elevation: 12,
    width: 35,
    height: 35,
    position: "absolute",
    shadowOpacity: 1,
    shadowOffset: {
      width: 50,
      height: 80,
    },
  },
  roundSocialNotifications: {
    top: 35,
    left: 318,
    width: 24,
    height: 24,
    position: "absolute",
  },
  chartChild: {
    left: 8,
    borderRadius: Border.br_21xl,
    backgroundColor: Color.whitesmoke_100,
    shadowColor: "rgba(216, 216, 219, 0.2)",
    shadowRadius: 10,
    elevation: 10,
    width: 319,
    top: 0,
  },
  rectangle: {
    top: 530,
    width: 258,
    height: 56,
    backgroundColor: Color.aliceblue_200,
    borderRadius: Border.br_xl,
    left: 0,
    position: "absolute",
     
  },
  chart: {
    width: 327,
    height: 586,
    left: 0,
    top: 0,
    position: "absolute",
  },
  rectangle1: {
    backgroundColor: Color.aliceblue_200,
    borderRadius: Border.br_xl,
    width: 76,
    left: 0,
    top: 0,
  },
  chart1: {
    top: 531,
    left: 272,
  },
  text: {
    left: 282,
    width: 60,
  },
  prochainArrosage: {
    left: 65,
    width: 185,
  },
  vectorIcon: {
    height: "6.13%",
    width: "10.34%",
    top: "91.99%",
    right: "84.77%",
    bottom: "1.87%",
    left: "4.89%",
    maxHeight: "100%",
  },
  info: {
    top: 86,
    left: 18,
    width: 348,
    height: 587,
    position: "absolute",
  },
  rectangle2: {
    top: 467,
    borderTopLeftRadius: Border.br_5xl,
    borderTopRightRadius: Border.br_5xl,
    shadowColor: "rgba(176, 195, 210, 0.73)",
    shadowRadius: 66,
    elevation: 66,
    width: 375,
    display: "none",
    left: 0,
    backgroundColor: Color.aliceblue_100,
    height: 391,
  },
  lyon: {
    top: "43.47%",
    left: "22.13%",
    fontSize: 40,
    letterSpacing: 1.2,
    color: "#676d79",
  },
  lyon1: {
    top: "50%",
    left: "23.73%",
    fontSize: 36,
    letterSpacing: 1.1,
    color: Color.darkGrey,
  },
  addBtnIcon: {
    width: "96.53%",
    top: 680,
    right: "0%",
    left: "3.47%",
    height: 132,
  },
  screen1: {
    borderRadius: Border.br_26xl,
    shadowColor: "rgba(0, 0, 0, 0.18)",
    shadowRadius: 80,
    elevation: 80,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
    shadowOpacity: 1,
    shadowOffset: {
      width: 50,
      height: 80,
    },
    backgroundColor: Color.aliceblue_100,
  },
});

export default HomeScreen;
