import React, { useEffect } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';

import Fonts from '../constants/Font';
import Colors from '../constants/Color';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Splash2');  
    }, 3000); 

    return () => clearTimeout(timer);  
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.png')} style={styles.logo} />

      <Text style={styles.title}>
        Elegant <Text style={styles.highlight}>RUGS</Text> For You
      </Text>

      <Image source={require('../assets/thread.png')} style={styles.thread} />

      <Image
        source={require('../assets/bottom-illustration.png')}
        style={styles.bottomImage}
        resizeMode="contain"
      />
    </View>
  );
};

export default SplashScreen;

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 60,
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginTop: 90,
  },
  title: {
    fontSize: Fonts.size.large,
    fontWeight: '500',
    color: Colors.black,
    textAlign: 'center',
    fontFamily: Fonts.regular,
    marginVertical: 20,
  },
  highlight: {
    color: Colors.primary,
    fontWeight: 'bold',
    fontFamily: Fonts.bold,
  },
  thread: {
    width: 300,
    height: 90,
    resizeMode: 'contain',
    marginBottom: 30,
  },
  bottomImage: {
    width: width,
    height: height * 0.35,
  },
});