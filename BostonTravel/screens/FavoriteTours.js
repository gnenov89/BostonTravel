// This will hold all the favorite components of a specific user 
import React from 'react';
import MapList from '../components/MapList';
import { useSelector } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import  HeaderButton from '../components/HeaderButton';




const FavoriteTours = props => {
    const favMaps = useSelector(state => state.maps.favoriteMaps);

    
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