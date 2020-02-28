// Work in progress 
import React from 'react';
import { View, Text, Button, StyleSheet} from 'react-native';
import {  MAPS } from '../data/dummy-data';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/HeaderButton';

const MapDetails = props => {
    // getting mapId from props and storing it in mapId local varialble 
    const mapId = props.navigation.getParam('mapId');
    const selectedMap = MAPS.find(map => map.id === mapId);
    return ( 
    <View style={styles.screen}>
        <Text>{selectedMap.title}</Text>
        <Button title="Go back to Tours" onPress={ ()=> {
            props.navigation.popToTop();
            }} />

    </View>

    );
};

// Asdding navigation options to this screen. Adding title ot the Header
MapDetails.navigationOptions = (navigationData) => {
    const mapId = navigationData.navigation.getParam('mapId');
    const selectedMap = MAPS.find(map => map.id === mapId);
    return {
        headerTitle: selectedMap.title,
        headerRight: () => <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
            <Item 
            title="Favorite" 
            iconName='ios-star'
            onPress={() => {
                console.log('Mark as favorite')
            }}></Item>
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