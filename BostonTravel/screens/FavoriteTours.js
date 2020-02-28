// This will hold all the favorite components of a specific user 
import React from 'react';
import MapList from '../components/MapList';
import { MAPS} from '../data/dummy-data';


const FavoriteTours = props => {
    const favMaps = MAPS.filter(map => map.id === 'm1' || map.id === 'm2')
    return (<MapList listData={favMaps} navigation={props.navigation}/>

    );
};

FavoriteTours.navigationOptions = {
    headerTitle: "Your favorite tours"
}


export default FavoriteTours;