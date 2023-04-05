import * as React from "react";
import { Image, StyleSheet, View, Pressable, Text, Switch } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ManualSection from "../components/ManualSection";
import SectionManual from "../components/SectionManual";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";
import AutoManualSwitch from "../components/AutoManualSwitch";

const Screen2 = () => {
  // const navigation = useNavigation();
  const [isEnabled, setIsEnabled] = React.useState(false);

  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
  };

  return (
    <View style={styles.screen2}>
      <View style={[styles.plante1Parent, styles.plante1Layout]}>
        <Image
          style={[styles.plante1Icon, styles.plante1Layout]}
          resizeMode="cover"
          source={require("../assets/plante-1.png")}
        />
        <View style={[styles.groupChild, styles.groupChildShadowBox]} />
        <View style={[styles.groupItem, styles.groupChildShadowBox]} />
        <Image
          style={[styles.iconSplash, styles.iconLayout1]}
          resizeMode="cover"
          source={require("../assets/-icon-splash.png")}
        />
        <Pressable
          style={[styles.wrapper, styles.wrapperPosition]}
          onPress={() => console.log("screen4")}// navigation.navigate("Screen4")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/group-150.png")}
          />
        </Pressable>
        <View style={[styles.groupInner, styles.groupInnerShadowBox]} />
        <View style={[styles.rectangleView, styles.groupInnerShadowBox]} />
        <Text style={[styles.man, styles.manTypo]}>manual</Text>
        <Text style={[styles.auto, styles.manTypo]}>auto</Text>
        
      </View>
      <View style={[styles.screen2Child, styles.groupChildShadowBox]} />
      <Pressable
        style={styles.schedule}
        onPress={() => console.log("screen3")}//navigation.navigate("Screen3")}
      >
        <Image
          style={[styles.icon1, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/schedule.png")}
        />
      </Pressable>
      <Text style={[styles.sortie3, styles.sortieTypo]}>sortie3</Text>
      <ManualSection />
      <Text style={[styles.sortie2, styles.sortieTypo]}>sortie2</Text>
      <SectionManual />
      <Text style={[styles.sortie1, styles.sortieTypo]}>sortie1</Text>
      <Text style={styles.paramtrage}>Paramétrage</Text>
      <Pressable
        style={styles.back}
        onPress={() => console.log("hello")}//navigation.navigate("")}
      >
        <Image
          style={styles.iconLayout}
          resizeMode="cover"
          source={require("../assets/back.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  plante1Layout: {
    height: 766,
    width: 607,
    position: "absolute",
  },
  groupChildShadowBox: {
    height: 50,
    width: 50,
    elevation: 10,
    shadowRadius: 10,
    shadowColor: "rgba(216, 216, 219, 0.2)",
    borderRadius: Border.br_lg,
    backgroundColor: Color.whitesmoke_100,
    position: "absolute",
    shadowOpacity: 1,
    shadowOffset: {
      width: 50,
      height: 80,
    },
  },
  iconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  wrapperPosition: {
    top: "75.2%",
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  groupInnerShadowBox: {
    height: 54,
    elevation: 2,
    shadowRadius: 2,
    borderRadius: Border.br_21xl,
    left: 227,
    top: 560,
    position: "absolute",
    shadowOpacity: 1,
    shadowOffset: {
      width: 50,
      height: 80,
    },
  },
  manTypo: {
    textAlign: "left",
    fontSize: FontSize.size_lg,
    top: 576,
    width: 200,
    position: "absolute",
  },
  switch: {
    position: 'absolute',
    right: 10,
    top: 10,
  },
  
  sortieTypo: {
    alignItems: "center",
    display: "flex",
    color: Color.darkGrey,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    textAlign: "left",
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  plante1Icon: {
    top: 0,
    left: 20,
  },
  groupChild: {
    top: 566,
    left: 168,
  },
  groupItem: {
    top: 565,
    left: 40,
  },
  iconSplash: {
    height: "3.79%",
    width: "4.78%",
    right: "65.73%",
    bottom: "21.02%",
    left: "29.49%",
    top: "75.2%",
    position: "absolute",
  },
  icon: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  wrapper: {
    left: "8.24%",
    right: "86.82%",
    bottom: "21.09%",
    width: "4.94%",
    height: "3.72%",
  },
  groupInner: {
    shadowColor: "rgba(255, 255, 255, 0.3)",
    width: 153,
    backgroundColor: Color.whitesmoke_100,
    height: 54,
    elevation: 2,
    shadowRadius: 2,
    borderRadius: Border.br_21xl,
    left: 227,
    top: 560,
  },
  rectangleView: {
    backgroundColor: Color.steelblue_100,
    shadowColor: "rgba(176, 182, 204, 0.3)",
    width: 87,
  },
  man: {
    left: 244,
    fontFamily: FontFamily.actorRegular,
    color: Color.white,
  },
  auto: {
    left: 325,
    fontWeight: "700",
    width: 200,
    fontFamily: FontFamily.madaBold,
    color: Color.lightsteelblue,
  },
  plante1Parent: {
    top: 29,
    left: -20,
  },
  screen2Child: {
    top: 595,
    left: 82,
  },
 
  schedule: {
    left: 90,
    top: 605,
    width: 34,
    height: 34,
    position: "absolute",
  },
  sortie3: {
    width: "17.6%",
    top: "66.87%",
    left: "6.93%",
    alignItems: "center",
    display: "flex",
    height: "3.69%",
  },
  sortie2: {
    width: "19.73%",
    top: "48.15%",
    left: "6.13%",
    opacity: 0.42,
    height: "3.69%",
  },
  sortie1: {
    height: "3.94%",
    width: "21.07%",
    top: "29.68%",
    left: "6.93%",
    alignItems: "center",
    display: "flex",
  },
  paramtrage: {
    top: 50,
    left: 84,
    fontSize: FontSize.size_13xl,
    letterSpacing: 1,
    width: 267,
    height: 70,
    color: Color.darkGrey,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    textAlign: "left",
    position: "absolute",
  },
  back: {
    left: 0,
    top: 28,
    width: 91,
    height: 96,
    position: "absolute",
  },
  screen2: {
    backgroundColor: Color.aliceblue_100,
    flex: 1,
    
  },
});

export default Screen2;