// This is the UserAuth screen that goes to MapNavigation.js 
import React from 'react';
import { ScrollView, View, KeyboardAvoidingView, StyleSheet, Button} from 'react-native';
import Card from '../components/Card';
import Input from '../components/Input';
import Colors from '../constants/Colors';



const AuthScreen = props => {
    return (<KeyboardAvoidingView
             behavior='padding'
             keyboardVerticalOffset={50}
             style={styles.screen}>
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
                      onValueChange={()=> {}}
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
                      onValueChange={()=> {}}
                      initiaValue=""
                      ></Input>
                      <Button 
                      title="Login" 
                      color={Colors.primary} 
                      onPress={() => {}}/>
                      <Button 
                      title="Switch to Sign Up" 
                      color={Colors.accent} 
                      onPress={() => {}}/>
                  </ScrollView>
              </Card>
           </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    screen: {

    }, 
    authContainer: {

    }


});

export default AuthScreen;


