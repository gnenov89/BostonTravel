import React, { useState }from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import MapNavigator from './navigation/MapNavigation';
import { enableScreens } from 'react-native-screens';
// Ignore warning messaages
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Remote debugger']);
enableScreens();

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  });
};



export default function App() {

  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded){
    return (
      <AppLoading
      startAsync={fetchFonts}
      onFinish={() => setFontLoaded(true)}
      />
    );
  }
  return <MapNavigator />
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
