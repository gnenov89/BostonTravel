// This will hold all the favorite components of a specific user 
import React from 'react';
import MapList from '../components/MapList';
import { MAPS} from '../data/dummy-data';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import  HeaderButton from '../components/HeaderButton';

const FavoriteTours = props => {
    const favMaps = MAPS.filter(map => map.id === 'm1' || map.id === 'm2')
    return (<MapList listData={favMaps} navigation={props.navigation}/>

    );
};

// FavoriteTours.navigationOptions = {
//     headerTitle: "Your favorite tours"
// }

FavoriteTours.navigationOptions = (navData) => {
    return {
    headerTitle: 'Favorites',
    headerLeft: () => <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item 
        title='Menu'  
        iconName='ios-menu' 
        onPress={() => {
            navData.navigation.toggleDrawer();
        }}/>
    </HeaderButtons>
    };
}


export default FavoriteTours;