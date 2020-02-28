// This will hold both Maps for 
import React from 'react';
import { 
    View, 
    Text, 
    FlatList, 
    StyleSheet, Image } from 'react-native';
import { TOURS, MAPS } from '../data/dummy-data';
import MapItem from '../components/MapItem';
import MapList from '../components/MapList';
const MapsOfTours = props => {  
    // console.log(props);

    
      const catId = props.navigation.getParam('categoryId')
    //   const selectedCategory = TOURS.find(cat => cat.id === catId)

    const displayedMaps = MAPS.filter( map => map.categoryIds.indexOf(catId) >= 0 );
    return ( <MapList 
    listData={displayedMaps}
    navigation={props.navigation} />
   

    );
};

MapsOfTours.navigationOptions = (navigationData) => {
    const catId = navigationData.navigation.getParam('categoryId');
    const selectedCategory = TOURS.find(cat => cat.id === catId);
    return {
        headerTitle: selectedCategory.title
       
        };
    };

const styles = StyleSheet.create({
    

});

export default MapsOfTours;