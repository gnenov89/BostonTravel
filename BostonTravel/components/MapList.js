import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import MapItem from './MapItem';

const MapList = props => {
    const renderMapItem = itemData => {
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
                     mapId: itemData.item.id
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
