// This will hold both Maps for 
import React from 'react';
import { 
    StyleSheet, View} from 'react-native';
import { TOURS } from '../data/dummy-data';
// This hood alows us to get a slice of out state
import { useSelector } from 'react-redux';
import MapList from '../components/MapList';
import DefaultText from '../components/DefaultText';
const MapsOfTours = props => {  
    // console.log(props);
    const catId = props.navigation.getParam('categoryId')
    //   const selectedCategory = TOURS.find(cat => cat.id === catId)
    // useSelector takes state as an arg which will retreave state
    const availableMaps = useSelector(state => state.maps.filteredMaps)

    const displayedMaps = availableMaps.filter(
         map => map.categoryIds.indexOf(catId) >= 0 );

        if (displayedMaps.length === 0) {
            return <View style={styles.content}>
                    <DefaultText>No maps found, maybe check your filters</DefaultText>
                   </View>
        }
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
    content: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center'
    }

});

export default MapsOfTours;