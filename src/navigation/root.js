import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from '../screens/Splash';
import Splash2 from '../screens/Splash2';

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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Root;
