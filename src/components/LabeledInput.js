import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import Colors from '../constants/Color';
import Fonts from '../constants/Font';

const LabeledInput = ({ label, placeholder, keyboardType = 'default', value, onChangeText }) => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={Colors.textGrey}
        keyboardType={keyboardType}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 15,
  },
  label: {
    fontSize: Fonts.size.small,
    color: Colors.black,
    fontFamily: Fonts.regular,
    marginBottom: 6,
  },
  input: {
    backgroundColor: Colors.white2,
    borderRadius: 30,
    paddingVertical: 12,
    paddingHorizontal: 20,
    fontFamily: Fonts.regular,
    fontSize: Fonts.size.small2,
    color: Colors.black,
  },
});

export default LabeledInput;
