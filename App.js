import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Navigation from './components/Navigation';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import SignupScreen from './screens/SignupScreen';
import ForgotPasswordScreen from './screens/ForgotPasswordScreen';
import SigninScreen from './screens/SigninScreen';
import { useFonts } from 'expo-font';
import { AppLoading } from "expo-app-loading";
import HomeScreen from './screens/HomeScreen';
import Screen2 from './screens/SettingScreen';

export default function App() {
  
  const [fontLoaded] = useFonts({
    'custom-font': require('./assets/fonts/Poppins-Regular.ttf'),
  });

  const customTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: 'linear-gradient(158.53deg, #EEF0F5 14.11%, #E2E4EA 85.89%)', 
    },
    text: {
      ...DefaultTheme.text,
      fontFamily: 'custom-font', 
    },
  };
  
  if (!fontLoaded) {
    return <Text>Loading...</Text>;
  }
  return (
    
    // <NavigationContainer theme={customTheme}>
    //   <Navigation />
    // </NavigationContainer>
    <Screen2/>
  );
}
