import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../constants/Color';
import Fonts from '../constants/Font';

const { width } = Dimensions.get('window');

const AccountScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ flexGrow: 1, paddingBottom: 80 }}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Enjoy</Text>
          <View style={styles.subtitleRow}>
            <Text style={styles.headerSubtitle}>Your</Text>
            <View style={styles.accountBox}>
              <Text style={styles.accountText}>ACCOUNT</Text>
            </View>
          </View>

          <Image
            source={require('../assets/Avtar.png')}
            style={styles.lineArt}
          />
        </View>

        <View style={styles.profileContainer}>
          <View style={styles.avatarWrapper}>
            <Image
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/512/706/706830.png',
              }}
              style={styles.avatar}
            />
          </View>
          <Text style={styles.username}>Jone Jacob</Text>
        </View>

        <View style={styles.menuContainer}>
          <MenuItem icon="person-outline" label="My Profile" navigation={navigation} />
          <MenuItem icon="location-outline" label="My Address" navigation={navigation} />
          <MenuItem icon="reader-outline" label="My Orders" navigation={navigation} />
          <MenuItem icon="heart-outline" label="Wishlist" navigation={navigation} />
          <MenuItem icon="settings-outline" label="Settings" navigation={navigation} />
        </View>

        <TouchableOpacity style={styles.logoutBtn}>
          <Icon name="log-out-outline" size={20} color={Colors.discount} />
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </ScrollView>

      <View style={styles.bottomNav}>
        {['Home', 'Category', 'Cart', 'Offers', 'Account'].map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.navItem}
            onPress={() => {
              if (item === 'Category') {
                navigation.navigate('CategorySelectionScreen');
              } else if (item === 'Offers') {
                navigation.navigate('OfferScreen');
              } else if (item === 'Home') {
                navigation.navigate('HomeScreen');
              } else if (item === 'Cart') {
                navigation.navigate('CartScreen');
              } else if (item === 'Account') {
                navigation.navigate('AccountScreen');
              }
            }}
          >
            <Icon
              name={
                item === 'Home'
                  ? 'home'
                  : item === 'Category'
                  ? 'grid'
                  : item === 'Cart'
                  ? 'cart'
                  : item === 'Offers'
                  ? 'pricetags'
                  : 'person'
              }
              size={22}
              color={Colors.black}
            />
            <Text style={styles.navText}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
};

const MenuItem = ({ icon, label, navigation }) => {
  const handleNavigation = () => {
    switch (label) {
      case 'My Profile':
        navigation.navigate('ProfileScreen');
        break;
      case 'My Address':
        navigation.navigate('MyAddressScreen');
        break;
      case 'My Orders':
        navigation.navigate('MyOrdersScreen');
        break;
      case 'Wishlist':
        navigation.navigate('WishlistScreen');
        break;
      case 'Settings':
        navigation.navigate('SettingsScreen');
        break;
      default:
        break;
    }
  };

  return (
    <TouchableOpacity style={styles.menuItem} onPress={handleNavigation}>
      <Icon name={icon} size={20} color={Colors.black2} />
      <Text style={styles.menuLabel}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  header: {
    backgroundColor: Colors.black2,
    paddingTop: 60,
    paddingHorizontal: 20,
    paddingBottom: 80,
    position: 'relative',
  },
  headerTitle: {
    color: Colors.white,
    fontFamily: Fonts.regular,
    fontSize: Fonts.size.medium,
  },
  subtitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  headerSubtitle: {
    color: Colors.white,
    fontFamily: Fonts.bold,
    fontSize: Fonts.size.xlarge,
    marginRight: 10,
  },
  accountBox: {
    backgroundColor: Colors.primary,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 5,
  },
  accountText: {
    color: Colors.black,
    fontFamily: Fonts.bold,
    fontSize: Fonts.size.medium,
  },
  lineArt: {
    position: 'absolute',
    top: 20,
    right: 20,
    width: 50,
    height: 50,
    resizeMode: 'contain',
    tintColor: Colors.white,
  },
  profileContainer: {
    alignItems: 'center',
    marginTop: -40,
  },
  avatarWrapper: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  username: {
    marginTop: 10,
    fontSize: Fonts.size.small2,
    fontFamily: Fonts.bold,
    color: Colors.black2,
  },
  menuContainer: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.lightGrey,
    borderRadius: 12,
    padding: 15,
    marginBottom: 12,
  },
  menuLabel: {
    marginLeft: 10,
    fontSize: Fonts.size.small,
    fontFamily: Fonts.regular,
    color: Colors.black2,
  },
  logoutBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  logoutText: {
    marginLeft: 8,
    fontSize: Fonts.size.small,
    fontFamily: Fonts.regular,
    color: Colors.discount,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 60,
    borderTopWidth: 1,
    borderColor: Colors.lightGrey,
    backgroundColor: Colors.white,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 10,
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  navText: {
    fontSize: Fonts.size.small,
    color: Colors.black,
    marginTop: 4,
  },
});

export default AccountScreen;
