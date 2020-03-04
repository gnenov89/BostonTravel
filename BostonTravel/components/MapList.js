import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';

import MapItem from './MapItem';
import { useSelector } from 'react-redux';

const MapList = props => {
    // you can use useSelevtor only on the root level of a function
    // not on a nested function 
    const favoriteMaps = useSelector(state => state.maps.favoriteMaps);
    const renderMapItem = itemData => {
        const isFavorite = favoriteMaps.some(map => map.id === itemData.item.id);
        return (
         <MapItem 
         title={itemData.item.title}
         image={itemData.item.imageUrl}
         complexity={itemData.item.complexity.toUpperCase()}
         affordability={itemData.item.affordability.toUpperCase()}
         onSelectMap={ () => {
             props.navigation.navigate({
                 routeName: 'MapDetails',
                 params:{
                     mapId: itemData.item.id,
                     mapTitle: itemData.item.title,
                     isFav: isFavorite
                 }
                 });
         } } />
        );
    };

    return(
         <View style={styles.list}>
        <FlatList 
        data={props.listData} 
        keyExtractor={(item, index) => item.id}
        renderItem={renderMapItem}
        style={{width: '100%'}}  />
        
    </View>
    )

};

const styles = StyleSheet.create({
    list: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }

});

export default MapList;
