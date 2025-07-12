import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import Colors from '../constants/Color';
import Fonts from '../constants/Font';

const { width } = Dimensions.get('window');

const ThankYouScreen = () => {
  const navigation = useNavigation();

  const handleGoHome = () => {
    navigation.navigate('HomeScreen'); 
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.circle}>
          <Icon name="checkmark" size={40} color={Colors.white} />
        </View>

        <Text style={styles.title}>Thank You!</Text>

        <Text style={styles.description}>
          Your order is completed.{"\n"}
          Please check the delivery status{"\n"}
          at order history page.
        </Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleGoHome}>
        <Text style={styles.buttonText}>GO TO HOME</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ThankYouScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black,
    justifyContent: 'space-between',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  circle: {
    width: 80,
    height: 80,
    backgroundColor: Colors.primary,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  title: {
    fontFamily: Fonts.bold ,
    fontSize: 20,
    color: Colors.white,
    marginBottom: 15,
  },
  description: {
    fontFamily: Fonts.regular ,
    fontSize: 14,
    color: Colors.white,
    textAlign: 'center',
    marginBottom: 40,
    lineHeight: 22,
  },
  button: {
    backgroundColor: Colors.primary,
    paddingVertical: 14,
    borderRadius: 30,
    width: width * 0.9,
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: Colors.white,
    fontFamily: Fonts.regular,
    fontSize: 14,
  },
});
