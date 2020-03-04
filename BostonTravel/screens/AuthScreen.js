// This is the UserAuth screen that goes to MapNavigation.js 
import React from 'react';
import { ScrollView, KeyboardAvoidingView, View, StyleSheet, Button} from 'react-native';
import Card from '../components/Card';
import Input from '../components/Input';
import Colors from '../constants/Colors';
import { LinearGradient } from 'expo-linear-gradient';


const AuthScreen = props => {
    return (<KeyboardAvoidingView
             behavior='padding'
             keyboardVerticalOffset={50}
             style={styles.screen}>
             <LinearGradient colors={['#ffedff', '#ffe3ff']} style={styles.gradient}>
              <Card style={styles.authContainer}>
                  <ScrollView>
                      <Input 
                      id="email" 
                      label="E-Mail" 
                      keyboardType="email-address"
                      required
                      minLength={5}
                      autoCapitalize="none"
                      errorMessage="Please enter a valid email address"
                      onInputChange={()=> {}}
                      initiaValue=""
                      ></Input>
                      <Input 
                      id="password" 
                      label="Password" 
                      keyboardType="default"
                      secureTextEntry
                      required
                      autoCapitalize="none"
                      errorMessage="Please enter a valid password"
                      onInputChange={()=> {}}
                      initiaValue=""
                      ></Input>
                      <View style={styles.buttonContainer}>
                      <Button 
                      title="Login" 
                      color={Colors.primaryColor} 
                      onPress={() => {}}/></View>
                      <View style={styles.buttonContainer}>
                      <Button 
                      title="Switch to Sign Up" 
                      color={Colors.accentColor} 
                      onPress={() => {}}/></View>
                  </ScrollView>
              </Card>
              </LinearGradient>
           </KeyboardAvoidingView>
    );
}
AuthScreen.navigationOptions = {
    headerTitle: 'Authenticate'
}

const styles = StyleSheet.create({
    screen: {
        flex: 1
        
    }, 
    gradient: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    authContainer: {
        width: '80%',
        maxWidth:400,
        maxHeight: 400,
        padding: 20

    },
    buttonContainer: {
        marginTop: 10
    }
});

export default AuthScreen;


