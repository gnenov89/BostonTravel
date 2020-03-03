// This will hold both Maps for 
import React from 'react';
import { 
    StyleSheet,} from 'react-native';
import { TOURS } from '../data/dummy-data';
// This hood alows us to get a slice of out state
import { useSelector } from 'react-redux';
import MapList from '../components/MapList';

const MapsOfTours = props => {  
    // console.log(props);
    const catId = props.navigation.getParam('categoryId')
    //   const selectedCategory = TOURS.find(cat => cat.id === catId)
    // useSelector takes state as an arg which will retreave state
    const availableMaps = useSelector(state => state.maps.filteredMaps)

    const displayedMaps = availableMaps.filter( map => map.categoryIds.indexOf(catId) >= 0 );
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