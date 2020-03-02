// This is where all Tours will be listed -FreedomTrail -Harborwalk
import React from 'react';
import { TOURS } from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';
import {  
    FlatList, 
    StyleSheet, 
     } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import  HeaderButton from '../components/HeaderButton';
// this is will render itemData-which is available in a flatlist
// itemData.item.title is data that we use from dummy-data.js in the Tour object 


const Tours = props => {
    // console.log(props);
    const renderGridItem = (itemData) => {
        return ( 
        <CategoryGridTile 
        title={itemData.item.title}
        color={itemData.item.color}
        onSelect={()=> {
            props.navigation.navigate({ 
                routeName: 'CategoryTours',
                params: {
                  categoryId: itemData.item.id
             } });
            }}/>
            
        );
    }

    return ( 
        <FlatList 
        keyExtractor={(item, index) => item.id}
        data={TOURS} 
        renderItem={renderGridItem} 
        numRows={2} />

    );
};
// adding navigationOptions to the props of Tours component
Tours.navigationOptions = (navData) => {
    return {
    headerTitle: 'Tours',
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
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default Tours;
