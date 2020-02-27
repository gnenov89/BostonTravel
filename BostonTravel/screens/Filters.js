// This component is optional 

import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

const Filters = props => {
    return ( 
    <View style={styles.screen}>
        <Text>Filters</Text>
    </View>

    );
};

Filters.NavigationOptions = {
    headerTitle: 'Filter Maps'
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }

});

export default Filters;