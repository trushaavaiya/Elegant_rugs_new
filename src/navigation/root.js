import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from '../screens/SplashScreen';                   //1
import Splash2Screen from '../screens/Splash2Screen';                 //2
import LoginScreen from '../screens/LoginScreen';                     //3
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';   //4
import NewPasswordScreen from '../screens/NewPasswordScreen';         //5
import ResetPasswordScreen from '../screens/ResetPasswordScreen';     //6
import SignupScreen from '../screens/SignupScreen';                   //7
import IntroScreen1 from '../screens/IntroScreen1';                   //8
import IntroScreen2 from '../screens/IntroScreen2';                   //9
import IntroScreen3 from '../screens/IntroScreen3';                   //10
import HomeScreen from '../screens/HomeScreen';                       //11
import CategoryScreen from '../screens/CategoryScreen';               //12
import ProductListingScreen from '../screens/ProductListingScreen';   //13
import FilterModal from '../screens/FilterModal';                     //14
import ProductDetails from '../screens/ProductDetails';               //15
import AllReviews from '../screens/AllReviews';                       //16
import BulkBookingModal from '../screens/BulkBookingModal';           //17
import ThankYouScreen from '../screens/ThankYouScreen';               //18
import CategorySelectionScreen from '../screens/CategorySelectionScreen'; //19
import OfferScreen from '../screens/OfferScreen';                         //20
import AccountScreen from '../screens/AccountScreen';                     //21
import WishlistScreen from '../screens/WishlistScreen';                   //22
import SettingsScreen from '../screens/SettingsScreen';                   //23
import ChangePasswordScreen from '../screens/ChangePasswordScreen';       //24
import NotificationScreen from '../screens/NotificationScreen';           //25
import ProfileScreen from '../screens/ProfileScreen';                     //26
import EditProfileScreen from '../screens/EditProfileScreen';             //27
import MyAddressScreen from '../screens/MyAddressScreen';                 //28
import AddNewAddressScreen from '../screens/AddNewAddressScreen';         //29
import MyOrdersScreen from '../screens/MyOrdersScreen';                   //30




const Stack = createStackNavigator();

const Root = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{ headerShown: false }}  
      >
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Splash2Screen" component={Splash2Screen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen} />
        <Stack.Screen name="NewPasswordScreen" component={NewPasswordScreen} />
        <Stack.Screen name="ResetPasswordScreen" component={ResetPasswordScreen} />
        <Stack.Screen name="SignupScreen" component={SignupScreen} />
        <Stack.Screen name="IntroScreen1" component={IntroScreen1} />
        <Stack.Screen name="IntroScreen2" component={IntroScreen2} />
        <Stack.Screen name="IntroScreen3" component={IntroScreen3} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="CategoryScreen" component={CategoryScreen} />
        <Stack.Screen name="ProductListingScreen" component={ProductListingScreen} />
        <Stack.Screen name="FilterModal" component={FilterModal} />
        <Stack.Screen name="ProductDetails" component={ProductDetails} />
        <Stack.Screen name="AllReviews" component={AllReviews} />
        <Stack.Screen name="BulkBookingModal" component={BulkBookingModal} />
        <Stack.Screen name="ThankYouScreen" component={ThankYouScreen} />
        <Stack.Screen name="CategorySelectionScreen" component={CategorySelectionScreen} />
        <Stack.Screen name="OfferScreen" component={OfferScreen} />
        <Stack.Screen name="AccountScreen" component={AccountScreen} />
        <Stack.Screen name="WishlistScreen" component={WishlistScreen} />
        <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
        <Stack.Screen name="ChangePasswordScreen" component={ChangePasswordScreen} />
        <Stack.Screen name="NotificationScreen" component={NotificationScreen} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        <Stack.Screen name="EditProfileScreen" component={EditProfileScreen} />
        <Stack.Screen name="MyAddressScreen" component={MyAddressScreen} />
        <Stack.Screen name="AddNewAddressScreen" component={AddNewAddressScreen} />
        <Stack.Screen name="MyOrdersScreen" component={MyOrdersScreen} />

        
      </Stack.Navigator>

    </NavigationContainer>
  );
};

export default Root;
