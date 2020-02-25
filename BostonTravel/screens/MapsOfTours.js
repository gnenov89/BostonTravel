// This will hold both Maps for 
import React from 'react';
import { View, Text, Button, StyleSheet} from 'react-native';
import { TOURS } from '../data/dummy-data';


const MapsOfTours = props => {
      const catId = props.navigation.getParam('categoryId')
      const selectedCategory = TOURS.find(cat => cat.id === catId)
    return ( 
    <View style={styles.screen}>
        <Text>Maps of tours screen</Text>
        <Text>{selectedCategory.title}</Text>
        <Button title="Go to MapDetails" onPress={ ()=> {
            props.navigation.navigate({
                routeName: 'MapDetails'
            })
            }} />
        <Button title="Go back" onPress={() => {
            props.navigation.pop();
            }} />
    </View>

    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }

});

export default MapsOfTours;