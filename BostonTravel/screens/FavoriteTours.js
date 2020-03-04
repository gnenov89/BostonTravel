// This will hold all the favorite components of a specific user 
import React from 'react';
import MapList from '../components/MapList';
// This hood alows us to get a slice of out state
import { useSelector } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import  HeaderButton from '../components/HeaderButton';
import { View,  StyleSheet } from 'react-native';

import DefaultText from '../components/DefaultText';



const FavoriteTours = props => {
    const favMaps = useSelector(state => state.maps.favoriteMaps);

    if (favMaps.length === 0 || !favMaps) {
        return <View style={styles.content}>
            <DefaultText>No Favorite Maps found</DefaultText>
        </View>
    }
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

const styles = StyleSheet.create({
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
export default FavoriteTours;