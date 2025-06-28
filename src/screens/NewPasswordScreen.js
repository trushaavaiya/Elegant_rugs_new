import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../constants/Color';
import Fonts from '../constants/Font';
import LinearGradient from 'react-native-linear-gradient';

const NewPasswordScreen = ({ route, navigation }) => {
  const { mobile } = route.params || {};
  const maskedMobile = mobile ? `${mobile.substring(0, 2)}******${mobile.substring(8)}` : '';

  const [otp, setOtp] = useState(['', '', '', '']);
  const inputs = useRef([]);

  const handleChange = (text, index) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    if (text && index < 3) {
      inputs.current[index + 1]?.focus();
    }
  };

  const clearText = () => {
    const cleared = ['', '', '', ''];
    setOtp(cleared);
    inputs.current.forEach((input) => input?.clear());
    inputs.current[0]?.focus();
  };

  const setText = () => {
    const prefilled = ['1', '2', '3', '4'];
    setOtp(prefilled);
    inputs.current.forEach((input, index) => {
      if (input) input.setNativeProps({ text: prefilled[index] });
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />

      <LinearGradient colors={Colors.gradientBlack} style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack('ForgotPassword')}>
          <Icon name="arrow-back" size={24} color={Colors.white} />
        </TouchableOpacity>
      </LinearGradient>

      <View style={styles.content}>
        <Text style={styles.title}>VERIFY CODE</Text>
        <Text style={styles.subtitle}>
          Enter the 4 digits code that you received on{'\n'}your mobile number +91-{maskedMobile}
        </Text>

        <Text style={styles.label}>OTP Code</Text>
        <View style={styles.otpContainer}>
          {[0, 1, 2, 3].map((_, index) => (
            <TextInput
              key={index}
              ref={ref => (inputs.current[index] = ref)}
              style={styles.otpInput}
              keyboardType="number-pad"
              maxLength={1}
              value={otp[index]}
              onChangeText={(text) => handleChange(text, index)}
              onKeyPress={({ nativeEvent }) => {
                if (
                  nativeEvent.key === 'Backspace' &&
                  otp[index] === '' &&
                  index > 0
                ) {
                  const newOtp = [...otp];
                  newOtp[index - 1] = '';
                  setOtp(newOtp);
                  inputs.current[index - 1]?.focus();
                }
              }}
            />
          ))}
        </View>

        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.utilityButton} onPress={clearText}>
            <Text style={styles.utilityButtonText}>Clear OTP</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.utilityButton} onPress={setText}>
            <Text style={styles.utilityButtonText}>Auto-Fill OTP</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.submitButton} onPress={() => navigation.navigate('ResetPasswordScreen')}>
          <Text style={styles.submitText}>RESET PASSWORD</Text>
        </TouchableOpacity>

        <Text style={styles.resendText}>
          Resend code in <Text style={styles.timer}>00:30</Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.white },
  header: {
    paddingTop: Platform.OS === 'android' ? 40 : 60,
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  content: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingHorizontal: 24,
    paddingTop: 30,
  },
  title: {
    fontSize: Fonts.size.large,
    color: Colors.black,
    fontFamily: Fonts.bold,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: Fonts.size.small,
    color: Colors.textGrey,
    fontFamily: Fonts.regular,
    marginBottom: 30,
    lineHeight: 22,
  },
  label: {
    fontSize: Fonts.size.xsmall,
    color: Colors.textGrey,
    marginBottom: 8,
    fontFamily: Fonts.regular,
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    backgroundColor: Colors.lightGrey,
    borderRadius: 30,
    padding: 10,
  },
  otpInput: {
    width: 40,
    height: 40,
    backgroundColor: Colors.white,
    borderRadius: 8,
    textAlign: 'center',
    fontSize: Fonts.size.medium,
    fontFamily: Fonts.regular,
    color: Colors.black,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  utilityButton: {
    flex: 1,
    marginHorizontal: 5,
    backgroundColor: Colors.lightGrey,
    paddingVertical: 10,
    borderRadius: 20,
    alignItems: 'center',
  },
  utilityButtonText: {
    color: Colors.primary,
    fontFamily: Fonts.medium,
    fontSize: Fonts.size.small,
  },
  submitButton: {
    backgroundColor: Colors.primary,
    paddingVertical: 14,
    borderRadius: 30,
    alignItems: 'center',
  },
  submitText: {
    color: Colors.white,
    fontSize: Fonts.size.small2,
    fontFamily: Fonts.regular,
  },
  resendText: {
    marginTop: 16,
    textAlign: 'center',
    color: Colors.textGrey,
    fontFamily: Fonts.regular,
  },
  timer: {
    color: Colors.primary,
    fontFamily: Fonts.bold,
  },
});

export default NewPasswordScreen;
