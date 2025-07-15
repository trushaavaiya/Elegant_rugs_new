import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../constants/Color';
import Fonts from '../constants/Font';

const ProfileScreen = ({ navigation, route }) => {
  const [email, setEmail] = useState('jonejacob@gmail.com');
  const [mobile, setMobile] = useState('+91 - 6549874665');
  const [address, setAddress] = useState('8502 Preston Rd. Inglewood,\nMaine 98380');

  useEffect(() => {
    if (route.params) {
      if (route.params.email) setEmail(route.params.email);
      if (route.params.mobile) setMobile(route.params.mobile);
      if (route.params.address) setAddress(route.params.address);
    }
  }, [route.params]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back-outline" size={24} color={Colors.white} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>My Profile</Text>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('EditProfileScreen', {
              email,
              mobile,
              address,
            })
          }
        >
          <Icon name="create-outline" size={22} color={Colors.white} />
        </TouchableOpacity>
      </View>

      <View style={styles.profileContainer}>
        <View style={styles.avatarBox}>
          <Image source={require('../assets/Avtar.png')} style={styles.avatar} />
        </View>
        <Text style={styles.name}>Jone Jacob</Text>

        <View style={styles.infoBox}>
          <Icon name="mail-outline" size={20} color={Colors.primary} style={styles.infoIcon} />
          <Text style={styles.infoText}>{email}</Text>
        </View>

        <View style={styles.infoBox}>
          <Icon name="call-outline" size={20} color={Colors.primary} style={styles.infoIcon} />
          <Text style={styles.infoText}>{mobile}</Text>
        </View>

        <View style={styles.infoBox}>
          <Icon name="location-outline" size={20} color={Colors.primary} style={styles.infoIcon} />
          <Text style={styles.infoText}>{address}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.white },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.black,
    paddingVertical: 50,
    paddingHorizontal: 30,
    justifyContent: 'space-between',
  },
  headerTitle: {
    color: Colors.white,
    fontSize: Fonts.size.medium,
    fontFamily: Fonts.bold,
  },
  profileContainer: {
    alignItems: 'center',
    marginTop: 30,
    paddingHorizontal: 20,
  },
  avatarBox: {
    backgroundColor: Colors.yellow,
    borderRadius: 20,
    padding: 12,
  },
  avatar: { width: 80, height: 80, borderRadius: 40 },
  name: {
    marginTop: 10,
    fontSize: Fonts.size.medium,
    fontFamily: Fonts.bold,
    color: Colors.black,
  },
  infoBox: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: Colors.lightGrey,
    padding: 14,
    borderRadius: 10,
    marginTop: 16,
    width: '100%',
  },
  infoIcon: { marginRight: 12, marginTop: 2 },
  infoText: {
    fontSize: Fonts.size.small2,
    fontFamily: Fonts.regular,
    color: Colors.black,
    flexShrink: 1,
  },
});
