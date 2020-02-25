// This is where all Tours will be listed -FreedomTrail -Harborwalk
import React from 'react';
import { TOURS } from '../data/dummy-data';
import Colors from '../constants/Colors';
import { 
    View, 
    Text, 
    FlatList, 
    StyleSheet, 
    TouchableOpacity,
    Platform } from 'react-native';

// this is will render itemData-which is available in a flatlist
// itemData.item.title is data that we use from dummy-data.js in the Tour object 


const Tours = props => {
    console.log(props);
    const renderGridItem = (itemData) => {
        return (
            <TouchableOpacity 
            style={styles.gridItem}
            onPress={() => {
                props.navigation.navigate({ 
                    routeName: 'CategoryTours',
                    params: {
                      categoryId: itemData.item.id
                } });
                }}>
               <View>
                    <Text>{itemData.item.title}</Text>
                </View>
            </TouchableOpacity>
        );
    }

    return ( 
        <FlatList 
        keyExtractor={(item, index) => item.id}
        data={TOURS} 
        renderItem={renderGridItem} 
        numColumns={2} />

    );
};
// adding navigationOptions to the props of Tours component
Tours.navigationOptions = {
    headerStyle: {
        backgroundColor: Colors.primaryColor
    },
    headerTintColor: Platform.OS === 'android' ? 'black' : 'white'
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    gridItem: {
        flex:1,
        margin: 15,
        height: 150
        
    }

});

export default Tours;
