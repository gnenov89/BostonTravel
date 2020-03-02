// This component is optional 

import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, StyleSheet, Switch} from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import  HeaderButton from '../components/HeaderButton';
// import { Colors } from 'react-native/Libraries/NewAppScreen';
import Colors from '../constants/Colors';




const FilterSwitch = props => {
    return (<View style={styles.filterContainer}>
        <Text>{props.label}</Text>
        <Switch 
        trackColor={{ true: Colors.primaryColor }}
        value={props.state} 
        onValueChange={props.onChange} />
    </View>)
}

const Filters = props => {
    const { navigation } = props; 
    const [ isHistoric, setIsHistoric ] = useState(false)
    const [ isWalkByWater, setIsWalkByWater ] = useState(false)
    const [ isEducational, setIsEducational ] = useState(false)

    const saveFilters = useCallback(() => {
        const appliedFilters  = {
            historic: isHistoric,
            byWater: isWalkByWater,
            educational: isEducational
        };
        console.log(appliedFilters);
    }, [isHistoric, isWalkByWater, isEducational]);


    useEffect(() => {
        navigation.setParams({ save: saveFilters })
    }, [ saveFilters ]);
    return ( 
    <View style={styles.screen}>
        <Text style={styles.title}>Available Filters</Text>
        <FilterSwitch 
        label='Historic' 
        state={isHistoric} 
        onChange={newValue => setIsHistoric(newValue)} 
        />
        <FilterSwitch 
        label='Walk by water' 
        state={isWalkByWater} 
        onChange={newValue => setIsWalkByWater(newValue)} 
        />
        <FilterSwitch 
        label='Educational' 
        state={isEducational} 
        onChange={newValue => setIsEducational(newValue)} 
        />

    </View>

    );
};

Filters.navigationOptions = (navData) => {
    return {
    headerTitle: 'Filters',
    headerLeft: () => <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item 
        title='Menu'  
        iconName='ios-menu' 
        onPress={() => {
            navData.navigation.toggleDrawer();
        }}/>
    </HeaderButtons>,
    headerRight: () => <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item 
        title='Save'  
        iconName='ios-save' 
        onPress={navData.navigation.getParam('save')}/>
        </HeaderButtons>

    };

}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center'
    },
    title:{
        fontFamily: 'open-sans-bold',
        fontSize: 22,
        margin: 20,
        textAlign: 'center'
    },
    filterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '80%',
        marginVertical: 20

    }

});

export default Filters;