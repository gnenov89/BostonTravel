// Work in progress 
import React from 'react';
import { View, Text, Button, StyleSheet} from 'react-native';

const MapDetails = props => {
    return ( 
    <View style={styles.screen}>
        <Text>MapDetailsScreen</Text>
        <Button title="Go back to Tours" onPress={ ()=> {
            props.navigation.popToTop();
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

export default MapDetails;