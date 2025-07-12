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

const IntroScreen1 = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />

      <View style={styles.topPadding}>
        <Text>.</Text>
      </View>

      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/living-room.png')} 
          style={styles.mainImage}
          resizeMode="cover"
        />
      </View>

      <View style={styles.bottomContainer}>
        <TouchableOpacity style={styles.skipButton} onPress={() => navigation.navigate('Splash')}>
          <Text style={styles.skipText}>SKIP</Text>
        </TouchableOpacity>

        <View style={styles.textContent}>
          <Text style={styles.textBlack}>CHOOSE THE</Text>
          <View style={styles.rowText}>
            <View style={styles.rugsBox}>
              <Text style={styles.rugsText}>RUGS</Text>
            </View>
            <Text style={styles.textBlack}> OF YOUR CHOICE TO</Text>
          </View>
          <Text style={styles.textGrey}>DECORATE HOME</Text>
        </View>

        <View style={styles.navigationButtons}>
          <View />
          <TouchableOpacity style={styles.nextButton} onPress={() => navigation.navigate('IntroScreen2')}>
            <Icon name="chevron-forward-outline" size={24} color={Colors.white} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default IntroScreen1;

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
    marginTop: 4,
  },
  rowText: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
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
