import * as React from "react";
import { StyleSheet, View, Image, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const SectionManual = () => {
  // const navigation = useNavigation();

  return (
    <Pressable
      style={styles.rectangleParent}
      onPress={() => console.log("screen4")}//navigation.navigate("Screen4")}
    >
      <View style={styles.groupChild} />
      <View style={[styles.groupItem, styles.groupShadowBox]} />
      <View style={[styles.groupInner, styles.groupShadowBox]} />
      <Image
        style={[styles.iconSplash, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/-icon-splash.png")}
      />
      <Pressable
        style={styles.schedule}
        onPress={() => console.log("screen3")} //navigation.navigate("Screen3")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/schedule.png")}
        />
      </Pressable>
      <Image
        style={[styles.groupIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/group-150.png")}
      />
      <View style={[styles.rectangleView, styles.groupChild1ShadowBox]} />
      <View style={[styles.groupChild1, styles.groupChild1ShadowBox]} />
      <Text style={[styles.man, styles.manTypo]}>manual</Text>
      <Text style={[styles.auto, styles.manTypo]}>auto</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  groupShadowBox: {
    top: 2,
    height: 50,
    width: 50,
    shadowOpacity: 1,
    elevation: 10,
    shadowRadius: 10,
    shadowOffset: {
      width: -5,
      height: 5,
    },
    shadowColor: "rgba(216, 216, 219, 0.2)",
    backgroundColor: Color.whitesmoke_100,
    borderRadius: Border.br_lg,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    top: "24.07%",
    overflow: "hidden",
    position: "absolute",
  },
  groupChild1ShadowBox: {
    elevation: 2,
    shadowRadius: 2,
    borderRadius: Border.br_21xl,
    left: 189,
    top: 0,
    shadowOpacity: 1,
    shadowOffset: {
      width: -5,
      height: 5,
    },
    height: 54,
    position: "absolute",
  },
  manTypo: {
    textAlign: "left",
    fontSize: FontSize.size_lg,
    top: 16,
    position: "absolute",
  },
  groupChild: {
    top: 3,
    left: 128,
    height: 50,
    width: 50,
    shadowOpacity: 1,
    elevation: 10,
    shadowRadius: 10,
    shadowOffset: {
      width: -5,
      height: 5,
    },
    shadowColor: "rgba(216, 216, 219, 0.2)",
    borderRadius: Border.br_lg,
    backgroundColor: Color.whitesmoke_100,
    position: "absolute",
  },
  groupItem: {
    left: 64,
  },
  groupInner: {
    left: 0,
  },
  iconSplash: {
    height: "53.7%",
    width: "8.29%",
    right: "52%",
    bottom: "22.22%",
    left: "39.71%",
  },
  icon: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
  },
  schedule: {
    left: 71,
    top: 9,
    width: 34,
    height: 34,
    position: "absolute",
  },
  groupIcon: {
    height: "52.74%",
    width: "8.57%",
    right: "88.57%",
    bottom: "23.18%",
    left: "2.86%",
  },
  rectangleView: {
    shadowColor: "rgba(255, 255, 255, 0.3)",
    width: 153,
    backgroundColor: Color.whitesmoke_100,
    shadowRadius: 2,
    borderRadius: Border.br_21xl,
    left: 189,
    top: 0,
  },
  groupChild1: {
    backgroundColor: Color.steelblue_100,
    shadowColor: "rgba(176, 182, 204, 0.3)",
    width: 87,
  },
  man: {
    left: 206,
    fontFamily: FontFamily.actorRegular,
    color: Color.white,
    width: 70,
    height: 24,
  },
  auto: {
    left: 287,
    fontWeight: "700",
    fontFamily: FontFamily.madaBold,
    color: Color.lightsteelblue,
    width: 63,
    
  },
  rectangleParent: {
    top: 284,
    left: 20,
    width: 350,
    height: 54,
    position: "absolute",
  },
});

export default SectionManual;
