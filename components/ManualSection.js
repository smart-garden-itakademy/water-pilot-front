import * as React from "react";
import { StyleSheet, View, Image, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const ManualSection = () => {
  // const navigation = useNavigation();

  return (
    <View style={styles.rectangleParent}>
      <View style={[styles.groupChild, styles.groupShadowBox]} />
      <Pressable
        style={styles.schedule}
        onPress={() => console.log("screen3")}//navigation.navigate("Screen3")}
        >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/schedule.png")}
        />
      </Pressable>
      <View style={[styles.groupItem, styles.groupShadowBox]} />
      <View style={styles.rectangle} />
      <Image
        style={[styles.iconSplash, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/-icon-splash.png")}
      />
      <Pressable
        style={styles.wrapper}
        onPress={() => console.log("screen4")}//navigation.navigate("Screen4")}
      >
        <Image
          style={[styles.icon1, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/group-150.png")}
        />
      </Pressable>
      <View style={[styles.groupInner, styles.groupInnerShadowBox]} />
      <View style={[styles.rectangleView, styles.groupInnerShadowBox]} />
      <Text style={[styles.man, styles.manTypo]}>manual</Text>
      <Text style={[styles.auto, styles.manTypo]}>auto</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  groupShadowBox: {
    height: 50,
    shadowOpacity: 1,
    elevation: 10,
    shadowRadius: 10,
    shadowOffset: {
      width: -5,
      height: 5,
    },
    shadowColor: "rgba(216, 216, 219, 0.2)",
    borderRadius: Border.br_lg,
    width: 50,
    backgroundColor: Color.whitesmoke_100,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  groupInnerShadowBox: {
    height: 54,
    elevation: 2,
    shadowRadius: 2,
    borderRadius: Border.br_21xl,
    left: 188,
    shadowOpacity: 1,
    shadowOffset: {
      width: -5,
      height: 5,
    },
    position: "absolute",
  },
  manTypo: {
    textAlign: "left",
    fontSize: FontSize.size_lg,
    top: 16,
    position: "absolute",
  },
  groupChild: {
    top: 11,
    left: 63,
  },
  icon: {
    overflow: "hidden",
    height: "100%",
    width: "100%",
  },
  schedule: {
    left: 70,
    top: 18,
    width: 34,
    height: 34,
    position: "absolute",
  },
  groupItem: {
    top: 10,
    left: 0,
  },
  rectangle: {
    top: 8,
    left: 127,
    borderRadius: Border.br_xl,
    backgroundColor: Color.aliceblue_200,
    height: 49,
    width: 50,
    position: "absolute",
  },
  iconSplash: {
    height: "47.54%",
    width: "8.31%",
    top: "32.79%",
    right: "52.15%",
    bottom: "19.67%",
    left: "39.54%",
    position: "absolute",
  },
  icon1: {
    height: "100%",
    width: "100%",
    maxWidth: "100%",
  },
  wrapper: {
    left: "2.29%",
    top: "34.43%",
    right: "89.11%",
    bottom: "18.88%",
    width: "8.6%",
    height: "46.69%",
    position: "absolute",
  },
  groupInner: {
    top: 0,
    shadowColor: "rgba(255, 255, 255, 0.3)",
    width: 153,
    backgroundColor: Color.whitesmoke_100,
    height: 54,
    elevation: 2,
    shadowRadius: 2,
    borderRadius: Border.br_21xl,
    left: 188,
  },
  rectangleView: {
    top: 1,
    backgroundColor: Color.steelblue_100,
    shadowColor: "rgba(176, 182, 204, 0.3)",
    width: 87,
  },
  man: {
    left: 205,
    fontFamily: FontFamily.actorRegular,
    color: Color.white,
    width: 70,
    height: 24,
  },
  auto: {
    left: 286,
    fontWeight: "700",
    fontFamily: FontFamily.madaBold,
    color: Color.lightsteelblue,
    width: 63,
    height: 14,
  },
  rectangleParent: {
    top: 436,
    left: 21,
    width: 349,
    height: 61,
    position: "absolute",
  },
});

export default ManualSection;
