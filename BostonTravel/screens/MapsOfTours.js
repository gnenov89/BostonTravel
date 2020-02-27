// This will hold both Maps for 
import React from 'react';
import { 
    View, 
    Text, 
    FlatList, 
    StyleSheet, Image } from 'react-native';
import { TOURS, MAPS } from '../data/dummy-data';


const MapsOfTours = props => {  
    // console.log(props);

    const renderMapItem = itemData => {
        return (
        <View>
            <Text>{itemData.item.title}</Text>
            <Image source={{uri: itemData.item.imageUrl}}
                   style={{width: 400, height: 400}} />
        </View>)
    }
      const catId = props.navigation.getParam('categoryId')
    //   const selectedCategory = TOURS.find(cat => cat.id === catId)

    const displayedMaps = MAPS.filter( map => map.categoryIds.indexOf(catId) >= 0 );
    return ( 
    <View style={styles.screen}>
        <FlatList 
        data={displayedMaps} 
        keyExtractor={(item, index) => item.id}
        renderItem={renderMapItem}  />
        
    </View>

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
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }

});

export default MapsOfTours;