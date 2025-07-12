import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../constants/Color';
import Fonts from '../constants/Font';

const PasswordInput = ({ placeholder, value, onChangeText, maxLength = 6 }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={Colors.textGrey}
        style={styles.input}
        secureTextEntry={!showPassword}
        value={value}
        onChangeText={onChangeText}
        maxLength={maxLength}
      />
      <TouchableOpacity
        onPress={() => setShowPassword(!showPassword)}
        style={styles.eyeIcon}
      >
        <Icon
          name={showPassword ? 'eye' : 'eye-off'}
          size={20}
          color={Colors.grey}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.lightGrey,
    borderRadius: 25,
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  input: {
    flex: 1,
    height: 50,
    color: Colors.black,
    fontFamily: Fonts.regular,
  },
  eyeIcon: {
    padding: 5,
  },
});

export default PasswordInput;
