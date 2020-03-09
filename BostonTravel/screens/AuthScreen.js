// This is the UserAuth screen that goes to MapNavigation.js 
import React, { useState, useReducer, useCallback } from 'react';
import { ScrollView, KeyboardAvoidingView, View, StyleSheet, Button} from 'react-native';
import Card from '../components/Card';
import Input from '../components/Input';
import Colors from '../constants/Colors';
import { LinearGradient } from 'expo-linear-gradient';
// useDispatch is for dispathing actions from '../store/actions/auth.js
import { useDispatch } from 'react-redux';
import * as authActions from '../store/actions/auth';


const FORM_INPUT_UPDATE = 'FORM_INPUT_UPDATE';

const formReducer = (state, action) => {
    if (action.type === FORM_INPUT_UPDATE) {
      const updatedValues = {
        ...state.inputValues,
        [action.input]: action.value
      };
      const updatedValidities = {
        ...state.inputValidities,
        [action.input]: action.isValid
      };
      let updatedFormIsValid = true;
      for (const key in updatedValidities) {
        updatedFormIsValid = updatedFormIsValid && updatedValidities[key];
      }
      return {
        formIsValid: updatedFormIsValid,
        inputValidities: updatedValidities,
        inputValues: updatedValues
      };
    }
    return state;
  };

const AuthScreen = props => {
    const [isSignup, setIsSignup] = useState(false);
    const dispatch = useDispatch();

    const [formState, dispatchFormState] = useReducer(formReducer, {
        inputValues: {
          email: '',
          password: ''
        },
        inputValidities: {
          email: false,
          password: false
        },
        formIsValid: false
      });

    const authHandler = () => {
        let action;
        if (isSignup) {
           action =
                authActions.signup(
                formState.inputValues.email, 
                formState.inputValues.password
            );
        } else {
            action = 
            authActions.login(
                formState.inputValues.email, 
                formState.inputValues.password);
        }
        dispatch(action);
        
    };

    const inputChangeHandler = useCallback(
        (inputIdentifier, inputValue, inputValidity) => {
          dispatchFormState({
            type: FORM_INPUT_UPDATE,
            value: inputValue,
            isValid: inputValidity,
            input: inputIdentifier
          });
        },
        [dispatchFormState]
        );

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
                      errorText="Please enter a valid email address"
                      onInputChange={inputChangeHandler}
                      initiaValue=""
                      ></Input>
                      <Input 
                      id="password" 
                      label="Password" 
                      keyboardType="default"
                      secureTextEntry
                      required
                      autoCapitalize="none"
                      errorText="Please enter a valid password"
                      onInputChange={inputChangeHandler}
                      initiaValue=""
                      ></Input>
                      <View style={styles.buttonContainer}>
                      <Button 
                      title={isSignup ? "Sign Up" : "Login"}
                      color={Colors.primaryColor} 
                      onPress={authHandler}/></View>
                      <View style={styles.buttonContainer}>
                      <Button 
                      title={`Switch to ${isSignup ? 'Login' : 'Sign Up'}`} 
                      color={Colors.accentColor} 
                      onPress={() => {
                          setIsSignup(prevState => !prevState)
                      }}/></View>
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


