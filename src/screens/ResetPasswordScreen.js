import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';

import Colors from '../constants/Color';
import Fonts from '../constants/Font';
import PasswordInput from '../components/PasswordInput';

const ResetPasswordScreen = ({ navigation }) => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <SafeAreaView style={styles.safeArea}>
      <LinearGradient colors={Colors.gradientBlack} style={styles.gradient}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
          <Icon name="arrow-back" size={24} color={Colors.white} />
        </TouchableOpacity>
      </LinearGradient>

      <View style={styles.container}>
        <Text style={styles.title}>NEW PASSWORD</Text>
        <Text style={styles.subtitle}>Create a new password and try to login</Text>

        <PasswordInput
          placeholder="New Password"
          value={newPassword}
          onChangeText={setNewPassword}
        />

        <PasswordInput
          placeholder="Confirm Password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('SignupScreen')}
        >
          <Text style={styles.buttonText}>RESET PASSWORD</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.black,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  gradient: {
    height: 60,
    justifyContent: 'flex-start',
    paddingHorizontal: 20,
    paddingTop: 0,
  },
  backBtn: {
    marginTop: 15,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingHorizontal: 25,
    paddingTop: 10,
  },
  title: {
    fontSize: Fonts.size.medium,
    fontFamily: Fonts.bold,
    marginBottom: 8,
    color: Colors.black,
  },
  subtitle: {
    fontSize: Fonts.size.small,
    fontFamily: Fonts.regular,
    color: Colors.subtitleGrey,
    marginBottom: 20,
  },
  button: {
    backgroundColor: Colors.primary,
    borderRadius: 25,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: Colors.white,
    fontWeight: 'bold',
    fontFamily: Fonts.regular,
  },
});

export default ResetPasswordScreen;
