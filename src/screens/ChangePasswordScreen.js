import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../constants/Color';
import Fonts from '../constants/Font';

const { width } = Dimensions.get('window');

const ChangePasswordScreen = ({ navigation }) => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [showOld, setShowOld] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const toggleShow = (field) => {
    if (field === 'old') setShowOld(!showOld);
    if (field === 'new') setShowNew(!showNew);
    if (field === 'confirm') setShowConfirm(!showConfirm);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back-outline" size={24} color={Colors.white} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Change Password</Text>
        <View style={{ width: 24 }} />
      </View>

      <View style={styles.formBox}>
        <View style={styles.inputWrapper}>
          <Text style={styles.label}>Old Password</Text>
          <View style={styles.inputRow}>
            <TextInput
              style={styles.input}
              value={oldPassword}
              onChangeText={setOldPassword}
              placeholder="Enter old password"
              secureTextEntry={!showOld}
              placeholderTextColor={Colors.textGrey}
            />
            <TouchableOpacity onPress={() => toggleShow('old')}>
              <Icon
                name={showOld ? 'eye-off-outline' : 'eye-outline'}
                size={20}
                color={Colors.grey}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.inputWrapper}>
          <Text style={styles.label}>New Password</Text>
          <View style={styles.inputRow}>
            <TextInput
              style={styles.input}
              value={newPassword}
              onChangeText={setNewPassword}
              placeholder="Enter new password"
              secureTextEntry={!showNew}
              placeholderTextColor={Colors.textGrey}
            />
            <TouchableOpacity onPress={() => toggleShow('new')}>
              <Icon
                name={showNew ? 'eye-off-outline' : 'eye-outline'}
                size={20}
                color={Colors.grey}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.inputWrapper}>
          <Text style={styles.label}>Confirm Password</Text>
          <View style={styles.inputRow}>
            <TextInput
              style={styles.input}
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              placeholder="Confirm new password"
              secureTextEntry={!showConfirm}
              placeholderTextColor={Colors.textGrey}
            />
            <TouchableOpacity onPress={() => toggleShow('confirm')}>
              <Icon
                name={showConfirm ? 'eye-off-outline' : 'eye-outline'}
                size={20}
                color={Colors.grey}
              />
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}>CHANGE PASSWORD</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ChangePasswordScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
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
    fontFamily: Fonts.bold,
    fontSize: Fonts.size.medium,
  },
  formBox: {
    margin: 20,
    backgroundColor: Colors.white,
    borderRadius: 8,
  },
  inputWrapper: {
    marginBottom: 20,
  },
  label: {
    fontFamily: Fonts.regular,
    fontSize: Fonts.size.small2,
    color: Colors.textGrey,
    marginBottom: 8,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.lightGrey,
    borderRadius: 10,
    paddingHorizontal: 12,
  },
  input: {
    flex: 1,
    height: 45,
    fontFamily: Fonts.regular,
    fontSize: Fonts.size.small,
    color: Colors.black,
  },
  button: {
    marginTop: 30,
    backgroundColor: Colors.primary,
    borderRadius: 30,
    paddingVertical: 14,
    alignItems: 'center',
  },
  buttonText: {
    color: Colors.white,
    fontSize: Fonts.size.medium,
    fontFamily: Fonts.bold,
  },
});
