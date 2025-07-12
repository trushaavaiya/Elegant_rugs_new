import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../constants/Color';
import Fonts from '../constants/Font';

const { width } = Dimensions.get('window');

const offers = [
  { id: '1', image: require('../assets/banner1.png') },
  { id: '2', image: require('../assets/banner2.png') },
  { id: '3', image: require('../assets/banner3.png') },
  { id: '4', image: require('../assets/banner4.png') },
  { id: '5', image: require('../assets/banner5.png') },
];

const OfferScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.dealText}>Deal Of</Text>
          <Text style={styles.dealBold}>The Day</Text>
          <TouchableOpacity style={styles.offerBox}>
            <Text style={styles.offerBoxText}>OFFER & REWARDS</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.headerIcons}>
          <Icon name="search-outline" size={22} color={Colors.white} style={{ marginRight: 15 }} />
          <Icon name="notifications-outline" size={22} color={Colors.white} />
        </View>
      </View>

      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        {offers.map((item) => (
          <View key={item.id} style={styles.offerCardImageOnly}>
            <Image source={item.image} style={styles.fullImage} resizeMode="cover" />
          </View>
        ))}
      </ScrollView>

      <View style={styles.bottomNav}>
        {['Home', 'Category', 'Cart', 'Offers', 'Account'].map((item, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.navItem,
              item === 'Offers' && styles.activeNav,
            ]}
            onPress={() => {
              if (item === 'Category') navigation.navigate('CategorySelectionScreen');
              if (item === 'Home') navigation.navigate('HomeScreen');
            }}
          >
            <Icon
              name={
                item === 'Home'
                  ? 'home-outline'
                  : item === 'Category'
                  ? 'grid-outline'
                  : item === 'Cart'
                  ? 'cart-outline'
                  : item === 'Offers'
                  ? 'pricetags-outline'
                  : 'person-outline'
              }
              size={22}
              color={item === 'Offers' ? Colors.primary : Colors.black}
            />
            <Text
              style={[
                styles.navText,
                item === 'Offers' && { color: Colors.primary },
              ]}
            >
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
};

export default OfferScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  header: {
    backgroundColor: Colors.black,
    padding: 24,
    paddingTop: 48,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  dealText: {
    color: Colors.white,
    fontSize: Fonts.size.large,
    fontFamily: Fonts.regular,
  },
  dealBold: {
    color: Colors.white,
    fontSize: Fonts.size.xlarge,
    fontFamily: Fonts.bold,
  },
  offerBox: {
    marginTop: 8,
    backgroundColor: Colors.tagBackground,
    alignSelf: 'flex-start',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 4,
  },
  offerBoxText: {
    color: Colors.white,
    fontFamily: Fonts.bold,
    fontSize: Fonts.size.small,
  },
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  offerCardImageOnly: {
    marginHorizontal: 16,
    marginVertical: 10,
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 3,
    backgroundColor: Colors.white,
  },
  fullImage: {
    width: '100%',
    height: 180,
    borderRadius: 10,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: Colors.white,
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: Colors.lightGrey,
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  navText: {
    fontSize: Fonts.size.xsmall,
    fontFamily: Fonts.regular,
    color: Colors.black,
    marginTop: 2,
  },
  activeNav: {
    backgroundColor: Colors.tagBackground,
    borderRadius: 10,
    padding: 6,
  },
});
