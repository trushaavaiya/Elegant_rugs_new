import React, { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import Colors from '../constants/Color';
import Fonts from '../constants/Font';
import LabeledInput from '../components/LabeledInput';
import AuthPasswordInput from '../components/AuthPasswordInput';

const SignupScreen = ({ navigation }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <Image source={require('../assets/carpet.webp')} style={styles.topImage} />

        <View style={styles.formContainer}>
          <Text style={styles.helloText}>Hello</Text>
          <Text style={styles.createText}>
            CREATE AN <Text style={styles.accountText}>ACCOUNT</Text>
          </Text>

          <LabeledInput
            label="Full Name"
            placeholder="Jone Jacob"
            value={fullName}
            onChangeText={setFullName}
          />

          <LabeledInput
            label="Email Address"
            placeholder="jonejacob@gmail.com"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />

          <LabeledInput
            label="Mobile Number"
            placeholder="+91 - 6549874665"
            keyboardType="phone-pad"
            value={mobile}
            onChangeText={setMobile}
          />

          <AuthPasswordInput
            label="New Password"
            placeholder="********"
            value={password}
            onChangeText={setPassword}
          />

          <AuthPasswordInput
            label="Confirm Password"
            placeholder="********"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />

          <TouchableOpacity style={styles.registerButton} onPress={() => navigation.navigate('IntroScreen1')}>
            <Text style={styles.registerText}>REGISTER</Text>
          </TouchableOpacity>

          <Text style={styles.loginText}>
            Already have an account?{' '}
            <Text style={styles.loginLink} onPress={() => navigation.navigate('LoginScreen')}>
              Login
            </Text>
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  container: {
    paddingBottom: 20,
    backgroundColor: Colors.white,
  },
  topImage: {
    width: '100%',
    height: 180,
    resizeMode: 'cover',
  },
  formContainer: {
    padding: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: Colors.white,
    marginTop: -30,
  },
  helloText: {
    fontSize: Fonts.size.medium,
    fontFamily: Fonts.regular,
    color: Colors.black,
    marginBottom: 5,
  },
  createText: {
    fontSize: Fonts.size.large,
    fontFamily: Fonts.bold,
    color: Colors.black,
    marginBottom: 20,
  },
  accountText: {
    color: Colors.primary,
  },
  registerButton: {
    backgroundColor: Colors.primary,
    borderRadius: 30,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 10,
  },
  registerText: {
    color: Colors.white,
    fontFamily: Fonts.regular,
    fontSize: Fonts.size.small2,
  },
  loginText: {
    marginTop: 15,
    textAlign: 'center',
    color: Colors.grey,
    fontSize: Fonts.size.small,
    fontFamily: Fonts.regular,
  },
  loginLink: {
    color: Colors.primary,
  },
});
