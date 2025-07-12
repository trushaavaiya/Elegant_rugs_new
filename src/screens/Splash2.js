import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
} from 'react-native';

import Colors from '../constants/Color';
import Fonts from '../constants/Font';

const Splash2 = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      
      <Image
        source={require('../assets/decor-room.png')} 
        style={styles.image}
        resizeMode="cover"
      />

      
      <View style={styles.bottomContainer}>
        <Text style={styles.welcome}>Welcome</Text>
        <Text style={styles.toText}>
          TO <Text style={styles.decorText}>HOME DECOR</Text>
        </Text>
        <Text style={styles.description}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s
        </Text>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('LoginScreen')}>
            <Text style={styles.loginText}>LOGIN</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.registerButton} onPress={() =>navigation.navigate('SignupPage')}>
            <Text style={styles.registerText}>REGISTER</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  image: {
    width: width,
    height: 475,
  },
  bottomContainer: {
    flex: 1,
    backgroundColor: Colors.white,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 24,
    marginTop: -10,
  },
  welcome: {
    fontSize: Fonts.size.large,
    fontWeight: '400',
    color: Colors.black,
    marginBottom: 4,
    fontFamily: Fonts.regular,
  },
  toText: {
    fontSize: Fonts.size.large,
    fontWeight: '700',
    color: Colors.black,
    fontFamily: Fonts.bold,
    
  },
  decorText: {
    color: Colors.primary,
    
  },
  description: {
    color:Colors.grey ,
    fontSize: Fonts.size.small2,
    marginTop: 12,
    lineHeight: 20,
    fontFamily: Fonts.regular,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 24,
    justifyContent: 'space-between',
  },
  loginButton: {
    flex: 1,
    backgroundColor: Colors.white2,
    paddingVertical: 12,
    borderRadius: 30,
    marginRight: 10,
    alignItems: 'center',
  },
  registerButton: {
    flex: 1,
    backgroundColor: Colors.primary,
    paddingVertical: 12,
    borderRadius: 30,
    marginLeft: 10,
    alignItems: 'center',
  },
  loginText: {
    color: Colors.black,
    fontWeight: '600',
    fontSize: Fonts.size.medium,
    fontFamily: Fonts.bold,
  },
  registerText: {
    color: Colors.white,
    fontWeight: '600',
    fontSize: Fonts.size.medium,
    fontFamily: Fonts.bold,
  },
});

export default Splash2;
