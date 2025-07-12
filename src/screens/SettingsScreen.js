import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../constants/Color';
import Fonts from '../constants/Font';

const { width } = Dimensions.get('window');

const settingsOptions = [
  { id: '1', icon: 'lock-closed-outline', label: 'Change Password' },
  { id: '2', icon: 'call-outline', label: 'Contact Us' },
  { id: '3', icon: 'document-text-outline', label: 'Privacy Policy' },
  { id: '4', icon: 'document-text-outline', label: 'Terms and Conditions' },
];

const SettingsScreen = ({ navigation }) => {
  const handleNavigation = (id) => {
    switch (id) {
      case '1':
        navigation.navigate('ChangePasswordScreen');
        break;
      case '2':
        navigation.navigate('');
        break;
      case '3':
        navigation.navigate('');
        break;
      case '4':
        navigation.navigate('');
        break;
      default:
        break;
    }
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.optionBox}
      onPress={() => handleNavigation(item.id)}
    >
      <Icon name={item.icon} size={20} color={Colors.black} style={styles.optionIcon} />
      <Text style={styles.optionText}>{item.label}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back-outline" size={24} color={Colors.white} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Settings</Text>
        <View style={{ width: 24 }} /> 
      </View>

      <View style={styles.contentBox}>
        <FlatList
          data={settingsOptions}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          contentContainerStyle={{ paddingVertical: 16 }}
        />
      </View>
    </SafeAreaView>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
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
  contentBox: {
    backgroundColor: Colors.white,
    flex: 1,
    paddingHorizontal: 20,
    top: -30,
  },
  optionBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.lightGrey,
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  optionIcon: {
    marginRight: 16,
  },
  optionText: {
    fontSize: Fonts.size.small2,
    fontFamily: Fonts.regular,
    color: Colors.black,
  },
});
