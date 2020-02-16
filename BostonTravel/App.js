import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={{padding: 30}} >
      <View>
        <TextInput 
        placeholder="Map goal" 
        style={{borderBottomColor: 'black', borderBottomWidth: 1 }}/>
        <Button title="ADD"/>
      </View>
    </View>
  );  
}

const styles = StyleSheet.create({

});
