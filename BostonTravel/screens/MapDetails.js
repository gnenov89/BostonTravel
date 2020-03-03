// Map details screen 
import React, { useEffect, useCallback } from 'react';
import { View, Text, Button, StyleSheet} from 'react-native';
// This hood alows us to get a slice of out state
import { useSelector, useDispatch } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/HeaderButton';
import { toggleFavorite } from '../store/actions/maps';



const MapDetails = props => {
    const availableMaps = useSelector(state => state.maps.maps)
    // getting mapId from props and storing it in mapId local varialble 
    const mapId = props.navigation.getParam('mapId');
    const currentMapIsFavorite = useSelector(state => 
        state.maps.favoriteMaps.some(map => map.id === mapId));
    const selectedMap = availableMaps.find(map => map.id === mapId);
    
    useEffect(() => {
        props.navigation.setParams({ mapTitle: selectedMap.title});
    }, [selectedMap]);
    

    const dispatch = useDispatch();

    const toggleFavoriteHandler =useCallback(() => {
        dispatch(toggleFavorite(mapId));
    }, [dispatch, mapId]);

    useEffect(() => {
        // props.navigation.setParams({ mapTitle: selectedMap.title});
        props.navigation.setParams({toggleFav: toggleFavoriteHandler})
    }, [toggleFavoriteHandler]);

    useEffect(() => {
        props.navigation.setParams({  isFav: currentMapIsFavorite });
    }, [currentMapIsFavorite]);

    return ( 
    <View style={styles.screen}>
        <Text>{selectedMap.title}</Text>
        <Button title="Go back to Tours" onPress={ ()=> {
            props.navigation.popToTop();
            }} />

    </View>

    );
};

// Asdding navigation options to this screen. Adding title to the Header
MapDetails.navigationOptions = (navigationData) => {
    const mapId = navigationData.navigation.getParam('mapId');
    const toggleFavorite = navigationData.navigation.getParam('toggleFav')
    const isFavorite = navigationData.navigation.getParam('isFav');
    const mapTitle = navigationData.navigation.getParam('mapTitle');
    // const selectedMap = MAPS.find(map => map.id === mapId);
    return {
        headerTitle: mapTitle,
        headerRight: () => <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
            <Item 
            title="Favorite" 
            iconName={isFavorite ? 'ios-star' : 'ios-star-outline'}
            onPress={toggleFavorite}></Item>
        </HeaderButtons>
    };
}
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }

});

export default MapDetails;