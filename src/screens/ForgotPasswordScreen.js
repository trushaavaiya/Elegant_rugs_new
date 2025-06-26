import React, { useState } from 'react';
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

const ForgotPasswordScreen = ({ navigation }) => {
  const [mobile, setMobile] = useState('');

  const isValid = mobile.length === 10;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />

      <LinearGradient 
      colors={Colors.gradientBlack}
       style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
          <Icon name="arrow-back" size={24} color={Colors.white} />
        </TouchableOpacity>
      </LinearGradient>

      <View style={styles.content}>
        <Text style={styles.title}>FORGOT PASSWORD</Text>
        <Text style={styles.subtitle}>
          Don’t Worry, Please enter your mobile{'\n'}number
        </Text>

        <Text style={styles.label}>Mobile Number</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            keyboardType="phone-pad"
            placeholder="+91 6351921313"
            placeholderTextColor={Colors.textGrey}
            maxLength={10}
            value={mobile}
            onChangeText={setMobile}
          />
        </View>

        <TouchableOpacity
          style={[styles.submitButton, { opacity: isValid ? 1 : 0.5 }]}
          disabled={!isValid}
          onPress={() => navigation.navigate('NewPasswordScreen', { mobile })}
        >
          <Text style={styles.submitText}>SUBMIT</Text>
        </TouchableOpacity>
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
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
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
  inputContainer: {
    backgroundColor: Colors.lightGrey,
    borderRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 12,
    marginBottom: 30,
  },
  input: {
    fontSize: Fonts.size.small2,
    fontFamily: Fonts.regular,
    color: Colors.black,
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
});

export default ForgotPasswordScreen;
