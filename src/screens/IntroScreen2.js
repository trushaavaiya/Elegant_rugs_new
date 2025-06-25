import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
  StatusBar,
  Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../constants/Color';
import Fonts from '../constants/Font';

const { width, height } = Dimensions.get('window');

const IntroScreen2 = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />

      <View style={styles.topPadding}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          {/* <Icon name="arrow-back" size={24} color={Colors.black} /> */}
        </TouchableOpacity>
      </View>

      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/livingroom.png')}
          style={styles.mainImage}
          resizeMode="cover"
        />
      </View>

      <View style={styles.bottomContainer}>
        <TouchableOpacity style={styles.skipButton} onPress={() => navigation.navigate('Splash')}>
          <Text style={styles.skipText}>SKIP</Text>
        </TouchableOpacity>

        <View style={styles.textContent}>
          <Text style={styles.textBlack}>WE HAVE</Text>
          <Text style={styles.textBlack}>A THOUSAND</Text>
          <View style={styles.rowText}>
            <View style={styles.rugsBox}>
              <Text style={styles.rugsText}>RUGS</Text>
            </View>
            <Text style={styles.textGrey}> PRODUCTS</Text>
          </View>
        </View>

        <View style={styles.navigationButtons}>
          <TouchableOpacity onPress={() => navigation.navigate('IntroScreen1')}>
            <Icon name="chevron-back-outline" size={24} color={Colors.black} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.nextButton} onPress={() => navigation.navigate('IntroScreen3')}>
            <Icon name="chevron-forward-outline" size={24} color={Colors.white} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default IntroScreen2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  topPadding: {
    paddingTop: Platform.OS === 'android' ? 80 : 60,
    paddingHorizontal: 16,
    paddingBottom: 10,
    backgroundColor: Colors.black,
    zIndex: 20,
  },
  imageContainer: {
    height: height * 0.55,
    width: width,
    overflow: 'hidden',
  },
  mainImage: {
    width: '100%',
    height: '100%',
  },
  bottomContainer: {
    flex: 1,
    padding: 20,
    position: 'relative',
  },
  skipButton: {
    position: 'absolute',
    top: 10,
    right: 20,
    zIndex: 10,
  },
  skipText: {
    color: Colors.primary,
    fontWeight: '600',
    fontFamily: Fonts.regular,
    fontSize: Fonts.size.small2,
  },
  textContent: {
    marginTop: 20,
  },
  textBlack: {
    fontSize: Fonts.size.large,
    fontWeight: '700',
    color: Colors.black,
    fontFamily: Fonts.bold,
  },
  textGrey: {
    fontSize: Fonts.size.large,
    fontWeight: '500',
    color: Colors.grey,
    fontFamily: Fonts.regular,
  },
  rowText: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  rugsBox: {
    backgroundColor: Colors.white2,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginRight: 6,
    borderRadius: 4,
  },
  rugsText: {
    fontSize: Fonts.size.medium,
    fontWeight: '700',
    color: Colors.primary,
    fontFamily: Fonts.bold,
  },
  navigationButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 40,
  },
  nextButton: {
    backgroundColor: Colors.primary,
    width: 40,
    height: 40,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
