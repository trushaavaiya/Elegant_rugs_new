import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../constants/Color';
import Fonts from '../constants/Font';

const EditProfileScreen = ({ navigation }) => {
  const [email, setEmail] = useState('jonejacob@gmail.com');
  const [mobile, setMobile] = useState('+91 - 6549874665');
  const [address, setAddress] = useState('8502 Preston Rd. Inglewood, Maine');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backIcon}>
          <Icon name="arrow-back-outline" size={24} color={Colors.white} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Edit Profile</Text>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.avatarContainer}>
          <View style={styles.avatarBorder}>
            <Image
              source={require('../assets/Avtar.png')}
              style={styles.avatar}
            />
            <TouchableOpacity style={styles.cameraIcon}>
              <Icon name="camera" size={18} color={Colors.white} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.field}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
          />
        </View>

        <View style={styles.field}>
          <Text style={styles.label}>Mobile</Text>
          <TextInput
            style={styles.input}
            value={mobile}
            onChangeText={setMobile}
          />
        </View>

        <View style={styles.field}>
          <Text style={styles.label}>Address</Text>
          <TouchableOpacity onPress={() => navigation.navigate('MyAddressScreen')}>
            <View pointerEvents="none">
              <TextInput
                style={[styles.input, styles.multiline]}
                value={address}
                multiline
                editable={false}
              />
            </View>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('ProfileScreen', { email, mobile, address })}
        >
          <Text style={styles.buttonText}>UPDATE PROFILE</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EditProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  header: {
    height: 100,
    backgroundColor: Colors.black,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  backIcon: {
    position: 'absolute',
    left: 20,
    top: 40,
  },
  headerTitle: {
    color: Colors.white,
    fontSize: 18,
    fontFamily: Fonts.bold,
    marginTop: 40,
  },
  content: {
    padding: 20,
    paddingBottom: 40,
  },
  avatarContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  avatarBorder: {
    padding: 4,
    borderRadius: 60,
    backgroundColor: Colors.yellow ,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  cameraIcon: {
    position: 'absolute',
    bottom: 0,
    right: -5,
    backgroundColor: Colors.primary,
    padding: 6,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: Colors.white,
  },
  field: {
    marginBottom: 16,
  },
  label: {
    fontSize: 13,
    color: Colors.grey,
    fontFamily: Fonts.regular,
    marginBottom: 6,
  },
  input: {
    backgroundColor: Colors.white2,
    borderRadius: 30,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 15,
    fontFamily: Fonts.regular,
    color: Colors.black,
  },
  multiline: {
    height: 70,
    textAlignVertical: 'top',
  },
  button: {
    marginTop: 30,
    backgroundColor: Colors.primary,
    borderRadius: 30,
    paddingVertical: 15,
    alignItems: 'center',
  },
  buttonText: {
    color: Colors.white,
    fontFamily: Fonts.bold,
    fontSize: 16,
  },
});
