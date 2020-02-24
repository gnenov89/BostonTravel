import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CategoryMapScreen = props => {
    return (
        <View style={styles.screen}>
           <Text>Some text here</Text>
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

export default CategoryMapScreen;

