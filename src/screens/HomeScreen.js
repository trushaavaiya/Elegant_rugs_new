// Step 1: Add 'All' category only

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../constants/Color';
import Fonts from '../constants/Font';

const { width } = Dimensions.get('window');

const HomeScreen = () => {
  const categoryData = [
    { title: 'All', image: require('../assets/category-all.png') },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.sectionTitle}>TOP CATEGORIES</Text>
        <View style={styles.categoryGrid}>
          {categoryData.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={[styles.categoryItem, item.title === 'See All' && styles.seeAllCategory]}
            >
              <Image source={item.image} style={styles.categoryIcon} />
              <Text style={[styles.categoryText, item.title === 'See All' && styles.seeAllText]}>
                {item.title}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.white },
  sectionTitle: {
    fontFamily: Fonts.bold,
    fontSize: Fonts.size.medium,
    color: Colors.black,
    marginHorizontal: 16,
    marginVertical: 12,
  },
  categoryGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginHorizontal: 16,
  },
  categoryItem: {
    width: '22%',
    paddingVertical: 10,
    marginVertical: 6,
    backgroundColor: Colors.lightGrey,
    alignItems: 'center',
    borderRadius: 10,
  },
  seeAllCategory: { backgroundColor: Colors.black },
  seeAllText: { color: Colors.white },
  categoryText: { fontFamily: Fonts.regular, fontSize: Fonts.size.small },
  categoryIcon: { width: 24, height: 24, marginBottom: 6 },
});

export default HomeScreen;
