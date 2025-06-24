import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from '../screens/Splash';                         //1
import Splash2 from '../screens/Splash2';                             //2
import LoginScreen from '../screens/LoginScreen';                     //3
import ForgotPassword from '../screens/ForgotPassword';               //4
import NewPasswordScreen from '../screens/NewPasswordScreen';         //5
import ResetPasswordScreen from '../screens/ResetPasswordScreen';     //6
import SignupPage from '../screens/SignupPage';                       //7

const Stack = createStackNavigator();

const Root = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{ headerShown: false }}  
      >
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Splash2" component={Splash2} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="NewPasswordScreen" component={NewPasswordScreen} />
        <Stack.Screen name="ResetPasswordScreen" component={ResetPasswordScreen} />
        <Stack.Screen name="SignupPage" component={SignupPage} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Root;
