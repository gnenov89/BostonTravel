import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer} from 'react-navigation';
import Tours from '../screens/Tours';
import MapsOfTours from '../screens/MapsOfTours';
import MapDetails from '../screens/MapDetails';
import FavoriteTours from '../screens/FavoriteTours';
import Filters from '../screens/Filters';



const MapNavigator = createStackNavigator({
    Tours: Tours,
    CategoryTours: {
        screen: MapsOfTours
    },
    MapDetails: MapDetails,
    FavoriteTours: FavoriteTours,
    Filters: Filters
});

export default createAppContainer(MapNavigator);