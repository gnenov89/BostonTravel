import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.screen} >
      <View style={styles.inputContainer}>
        <TextInput 
        placeholder="Map goal" 
        style={styles.input}/>
        <Button title="ADD"/>
      </View>
    </View>
  );  
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'

  },
  input: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1, padding: 10 

  }

});
