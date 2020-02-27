
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import Tours from '../screens/Tours';
import MapsOfTours from '../screens/MapsOfTours';
import MapDetails from '../screens/MapDetails';
import FavoriteTours from '../screens/FavoriteTours';
import Filters from '../screens/Filters';
import { Platform } from 'react-native';
import Colors from '../constants/Colors';


const MapNavigator = createStackNavigator({
    Tours: Tours,
    CategoryTours: {
        screen: MapsOfTours 
    },
    MapDetails: MapDetails,
    FavoriteTours: FavoriteTours,
    Filters: Filters
}, 
{
    // These default options will be applied to every screen
    // mode: 'modal', - optional for sliding from the bottom 
    // initialRouteName : 'your preffered initial screen' - optional 
    defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: Platform.OS === 'android?' ? Colors.primaryColor : 'white'
            },
            headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor  
        
    }
});

const FiltersNavigator = createStackNavigator({
    Filers: Filters
});

const MainNavigator = createDrawerNavigator({
    Tours: Tours,
    CategoryTours: {
        screen: MapsOfTours 
    },
    MapDetails: MapDetails,
    FavoriteTours: FavoriteTours,
    Filters: Filters
});

export default createAppContainer(MapNavigator);