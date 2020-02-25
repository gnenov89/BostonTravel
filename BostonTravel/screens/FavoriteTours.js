// This will hold all the favorite components of a specific user 
import React from 'react';
import { View, Text, StyleSheet} from 'react-native';






const FavoriteTours = props => {
    return ( 
    <View style={styles.screen}>
        <Text>Favaroites screen</Text>
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

export default FavoriteTours;