import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import Colors from '../constants/Color';
import Fonts from '../constants/Font';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const LoginScreen = ({navigation}) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require('../assets/rug-top.png')}
        style={styles.image}
        resizeMode="cover"
      />

      <View style={styles.bottomContainer}>
        <Text style={styles.welcome}>Welcome</Text>
        <Text style={styles.loginTitle}>
          <Text style={styles.loginBold}>LOGIN YOUR </Text>
          <Text style={styles.loginAccent}>ACCOUNT</Text>
        </Text>

        <Text style={styles.label}>          Mobile Number</Text>
        <View style={styles.inputBox}>
          <TextInput
            placeholder="Mobile Number"
            placeholderTextColor={Colors.textGrey}
            style={styles.input}
            keyboardType="phone-pad"
            defaultValue="+91 - 6549874665"
          />
        </View>

        <Text style={styles.label}>          New Password</Text>
        <View style={styles.inputBox}>
          <TextInput
            placeholder=""
            placeholderTextColor={Colors.textGrey}
            style={styles.input}
            secureTextEntry={!passwordVisible}
            defaultValue='968555'
            maxLength={6}
          />
          <TouchableOpacity
            style={styles.eyeIcon}
            onPress={() => setPasswordVisible(!passwordVisible)}
          >
            <Icon
              name={passwordVisible ?   'eye-outline' : 'eye-off-outline'}
              size={20}
              color={Colors.textGrey}
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.forgotWrapper} onPress={()=>navigation.navigate('ForgotPassword')}>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginButton} onPress={() =>navigation.navigate('NewPasswordScreen')}>
          <Text style={styles.loginButtonText}>LOGIN</Text>
        </TouchableOpacity>

        <Text style={styles.or}>OR</Text>

        <View style={styles.socialRow}>
          <TouchableOpacity style={styles.socialIcon}>
            <Image source={require('../assets/google.png')} style={styles.iconImg} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialIcon}>
            <Image source={require('../assets/facebook.png')} style={styles.iconImg} />
          </TouchableOpacity>
        </View>

        <Text style={styles.registerText}>
          Don’t have an account?{' '}
          <Text style={styles.registerLink} onPress={()=>navigation.navigate('SignupPage')}>Register</Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  image: {
    width: width,
    height: 220,
  },
  bottomContainer: {
    flex: 1,
    backgroundColor: Colors.white,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 24,
    marginTop: -30,
  },
  welcome: {
    fontSize: Fonts.size.large,
    color: Colors.black,
    fontFamily: Fonts.regular,
    marginBottom: 8,
  },
  loginTitle: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  loginBold: {
    fontSize: Fonts.size.large,
    color: Colors.black,
    fontFamily: Fonts.bold,
  },
  loginAccent: {
    fontSize: Fonts.size.large,
    color: Colors.primary,
    fontFamily: Fonts.bold,
  },
  label: {
    fontSize: Fonts.size.small,
    color: Colors.grey,
    fontFamily: Fonts.regular,
    marginBottom: 6,
  },
  inputBox: {
    backgroundColor: Colors.lightGrey,
    borderRadius: 30,
    paddingHorizontal: 20,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
  },
  input: {
    flex: 1,
    color: Colors.black,
    fontSize: Fonts.size.medium,
    fontFamily: Fonts.regular,
  },
  eyeIcon: {
    paddingLeft: 10,
  },
  forgotWrapper: {
    alignItems: 'center',
    marginBottom: 20,
    fontSize:14,
  },
  forgot: {
    color: Colors.primary,
    fontFamily: Fonts.regular,
  },
  loginButton: {
    backgroundColor: Colors.primary,
    paddingVertical: 14,
    borderRadius: 30,
    alignItems: 'center',
    marginBottom: 16,
  },
  loginButtonText: {
    color: Colors.white,
    fontSize: Fonts.size.medium,
    fontFamily: Fonts.bold,
  },
  or: {
    textAlign: 'center',
    color: Colors.textGrey,
    marginVertical: 12,
    fontFamily: Fonts.regular,
  },
  socialRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 16,
  },
  socialIcon: {
    backgroundColor: Colors.white,
    padding: 12,
    borderRadius: 40,
    marginHorizontal: 10,
    elevation: 3,
  },
  iconImg: {
    width: 24,
    height: 24,
  },
  registerText: {
    textAlign: 'center',
    color: Colors.black,
    fontFamily: Fonts.regular,
  },
  registerLink: {
    color: Colors.primary,
    fontFamily: Fonts.bold,
  },
});

export default LoginScreen;
