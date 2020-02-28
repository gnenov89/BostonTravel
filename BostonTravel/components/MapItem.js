import React from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    TouchableOpacity,
    ImageBackground
 } from 'react-native';

const MapItem = props => {
     return (
        <View style={styles.mapItem}>
         <TouchableOpacity onPress={props.onSelectMap}>
             <View>
              <View style={{...styles.mapRow, ...styles.mapHeader}}>
                  <ImageBackground 
                  source={{uri: props.image}}
                  style={styles.bgImage}>
                     <View style={styles.titleContainer}>
                        <Text style={styles.title} numberOfLines={1}>{props.title}</Text>
                     </View>
                  </ImageBackground>
              </View>
              <View style={{...styles.mapRow, ...styles.mapDetails}}>
                  <Text>{props.complexity}</Text>
                  <Text>{props.affordability}</Text>
              </View>
             </View>
         </TouchableOpacity>
        </View>
     );
};

const styles = StyleSheet.create({
    mapItem:{
         height: 200,
         width: '100%',
         backgroundColor: '#f5f5f5'
    },
    bgImage: {  
        width: '100%',
        height: '100%',
        justifyContent:'flex-end'
    },
    mapRow: {
        flexDirection: 'row'
    },
    mapHeader: {
        height: '85%'
    },
    mapDetails: {
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '15%'
    },
    titleContainer: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        paddingVertical: 5,
        paddingHorizontal: 12,
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 20,
        color: 'white',
        textAlign:'center'
    }

});

export default MapItem;