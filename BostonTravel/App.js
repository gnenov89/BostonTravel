import React, { useState }from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import MainNavigator from './navigation/MapNavigation';
import { enableScreens } from 'react-native-screens';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// adds middleware and enables our actions to be created as asynchonous 
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import mapsReducer from './store/reducers/maps';
// Ignore warning messaages
import { YellowBox } from 'react-native';

YellowBox.ignoreWarnings(['Remote debugger']);
enableScreens();

//Here we create a root deducer with combineReducers
//We will also add UserAuth reducers and all other future features
const rootReducer = combineReducers({
  maps: mapsReducer
});
// Creates store for the entire app's state management 
const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

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
  return <Provider store={store}><MainNavigator /></Provider>
}
// above we wrap the MainNavigator which is the main component
// which will manage all of our component where we need to pass our state
// it takes one important prop store={store}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
