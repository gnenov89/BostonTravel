import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Tours from '../screens/Tours';
import MapsOfTours from '../screens/MapsOfTours';
import MapDetails from '../screens/MapDetails';
import FavoriteTours from '../screens/FavoriteTours';
import Filters from '../screens/Filters';
import { Platform } from 'react-native';
import Colors from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';





const defaultStackNavOptions = 
    {
        headerStyle: {
            backgroundColor: Platform.OS === 'android?' ? Colors.primaryColor : 'white'
        },
        headerTitleStyle: {
            fontFamily: 'open-sans-bold'
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor  
    
};


const MapNavigator = createStackNavigator(
    {
    Tours: {
        screen: Tours
    },
    CategoryTours: {
        screen: MapsOfTours 
    },
    MapDetails: {
        screen: MapDetails
    }
}, 
{
    // These default options will be applied to every screen
    // mode: 'modal', - optional for sliding from the bottom 
    // initialRouteName : 'your preffered initial screen' - optional 
    defaultNavigationOptions: defaultStackNavOptions
});


const FavNavigator = createStackNavigator({
    Favorites: FavoriteTours,
    MapDetails: MapDetails
}, {
defaultNavigationOptions: defaultStackNavOptions
});

const tabsScreenConfig = {
    Tours: {
        screen: MapNavigator, 
        navigationOptions:{
        tabBarIcon: (tabInfo) => {
           return (<Ionicons name='ios-add' size={25} color={tabInfo.tintColor} />);
             
        }
    }},
    Favorites: {
        screen: FavNavigator, 
        navigationOptions:{
        tabBarIcon: (tabInfo) => {
            return (<Ionicons name='ios-star' size={25} color={tabInfo.tintColor} />);
        }
    }}
}

const MapsFavNavigator =
Platform.OS  === 'android'
? createMaterialBottomTabNavigator(tabsScreenConfig, {
    activeColor: Colors.accentColor,
    shifting: true
})
: createBottomTabNavigator(tabsScreenConfig,
{
 tabBarOptions: {
     activeTintColor: Colors.accentColor,

 }
});

const FiltersNavigator = createStackNavigator({
    Filters: Filters
},
{
    defaultNavigationOptions: defaultStackNavOptions
});

const MainNavigator = createDrawerNavigator({
    Mapsfavs:{
        screen: MapsFavNavigator,
        navigationOptions: {
            drawerLabel: 'Tours'
        }
    },   
    Filters: FiltersNavigator
}, 
{
    contentOptions: {
      activeTintColor: Colors.accentColor,
      labelStyle: {
        fontFamily: 'open-sans-bold'
      }
    }
  }
);


export default createAppContainer(MainNavigator);