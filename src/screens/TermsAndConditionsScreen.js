import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../constants/Color';
import Fonts from '../constants/Font';

const TermsAndConditionsScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor={Colors.black} />

      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color={Colors.white} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Terms & Conditions</Text>
        <View style={{ width: 24 }} /> 
      </View>

      <ScrollView style={styles.contentContainer} contentContainerStyle={{ padding: 16 }}>
        <Text style={styles.paragraph}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </Text>

        <Text style={styles.paragraph}>
          It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        </Text>

        <Text style={styles.paragraph}>
          It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </Text>

        <Text style={styles.paragraph}>
          It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        </Text>

        <Text style={styles.paragraph}>
          It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TermsAndConditionsScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.black,
  },
  header: {
    height: 120,
    backgroundColor: Colors.black,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    justifyContent: 'space-between',
  },
  headerTitle: {
    fontSize: 16,
    fontFamily: Fonts.MontserratSemiBold,
    color: Colors.white,
  },
  contentContainer: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  paragraph: {
    fontSize: 19,
    fontFamily: Fonts.MontserratRegular,
    color: Colors.black,
    lineHeight: 22,
    marginBottom: 16,
  },
});
