import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const InfoContainer = () => {
  return (
    <View style={styles.info}>
      <View style={[styles.chart, styles.chartLayout]}>
        <View style={[styles.rectangle, styles.rectangleBg]} />
      </View>
      <View style={[styles.chart1, styles.chart1Layout]}>
        <View style={[styles.rectangle1, styles.chart1Layout]} />
      </View>
      <Text style={[styles.text, styles.textTypo]}>76 %</Text>
      <Text style={[styles.lhumiditDuSol, styles.textTypo]}>
        L'humidité du sol
      </Text>
      <Image
        style={styles.vectorIcon}
        resizeMode="cover"
        source={require("../assets/vector1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  chartLayout: {
    width: 258,
    top: 0,
    height: 55,
    position: "absolute",
  },
  rectangleBg: {
    backgroundColor: Color.aliceblue_200,
    borderRadius: Border.br_xl,
    left: 0,
  },
  chart1Layout: {
    width: 79,
    top: 0,
    height: 55,
    position: "absolute",
  },
  textTypo: {
    height: 24,
    textAlign: "left",
    color: Color.steelblue,
    fontFamily: FontFamily.mulishBold,
    fontWeight: "700",
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  rectangle: {
    width: 258,
    top: 0,
    height: 55,
    position: "absolute",
    backgroundColor: Color.aliceblue_200,
    borderRadius: Border.br_xl,
  },
  chart: {
    left: 0,
    width: 258,
    top: 0,
  },
  rectangle1: {
    backgroundColor: Color.aliceblue_200,
    borderRadius: Border.br_xl,
    left: 0,
  },
  chart1: {
    left: 266,
  },
  text: {
    top: 16,
    left: 282,
    width: 53,
  },
  lhumiditDuSol: {
    top: 15,
    left: 65,
    width: 222,
  },
  vectorIcon: {
    height: "56.36%",
    width: "9.86%",
    top: "16.36%",
    right: "84.92%",
    bottom: "27.27%",
    left: "5.22%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
  },
  info: {
    top: 528,
    left: 18,
    width: 345,
    height: 55,
    position: "absolute",
  },
});

export default InfoContainer;
