import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../constants/Color';
import Fonts from '../constants/Font';

const { width } = Dimensions.get('window');




const CategoryScreen = ({ navigation }) => {

  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Categories</Text>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="close" size={24} color={Colors.white} />
        </TouchableOpacity>
      </View>

      <View style={styles.titleContainer}>
        <Text style={styles.chooseText}>Choose The</Text>
        <Text style={styles.categoryBold}>
          Category <Text style={styles.chooseText}>As Per</Text>
        </Text>

        <View style={styles.choiceBox}>
          <Text style={styles.choiceText}>YOUR CHOICE</Text>
        </View>
      </View>
     
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    paddingHorizontal: 20,
    paddingTop: 60,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    color: Colors.white,
    fontSize: Fonts.size.medium,
    fontFamily: Fonts.bold,
  },
  titleContainer: {
    marginTop: 30,
  },
  chooseText: {
    color: Colors.white,
    fontSize: Fonts.size.large,
    fontFamily: Fonts.regular,
  },
  categoryBold: {
    fontSize: Fonts.size.xlarge,
    fontFamily: Fonts.bold,
    color: Colors.white,
  },
  choiceBox: {
    backgroundColor: Colors.primary,
    paddingVertical: 6,
    paddingHorizontal: 12,
    marginTop: 10,
    alignSelf: 'flex-start',
    borderRadius: 4,
  },
  choiceText: {
    color: Colors.white,
    fontFamily: Fonts.bold,
    fontSize: Fonts.size.small,
  },
  
});

export default CategoryScreen;
