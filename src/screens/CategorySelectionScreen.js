import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../constants/Color';
import Fonts from '../constants/Font';

const { width } = Dimensions.get('window');

const categories = [
  { id: '1', name: 'All', image: require('../assets/category-all.png') },
  { id: '2', name: 'Modern', image: require('../assets/category-modern.png') },
  { id: '3', name: 'Transitional', image: require('../assets/category-transitional.png') },
  { id: '4', name: 'Geometric', image: require('../assets/category-geometric.png') },
  { id: '5', name: 'Abstract', image: require('../assets/category-abstract.png') },
  { id: '6', name: 'Classis', image: require('../assets/category-classis.png') },
  { id: '7', name: 'Classis', image: require('../assets/category-classis.png') },
  { id: '8', name: 'Floral', image: require('../assets/category-floral.png') },
];

const repeatedCategories = [...categories, ...categories];

const CategorySelectionScreen = () => {
  const renderItem = ({ item }) => (
    <View style={styles.categoryItem}>
      <View style={styles.imageBox}>
        <Image source={item.image} style={styles.categoryImage} />
      </View>
      <Text style={styles.categoryText}>{item.name}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerTextBox}>
          <Text style={styles.chooseText}>Choose The</Text>
          <Text style={styles.categoryTextBold}>Category</Text>
          <Text style={styles.chooseText}> As Per</Text>
          <View style={styles.choiceBox}>
            <Text style={styles.choiceText}>YOUR CHOICE</Text>
          </View>
        </View>
        <View style={styles.iconRow}>
          <Icon name="search-outline" size={20} color={Colors.white} />
          <Icon name="refresh-outline" size={20} color={Colors.white} style={{ marginLeft: 10 }} />
        </View>
      </View>

      <FlatList
        data={repeatedCategories}
        renderItem={renderItem}
        keyExtractor={(item, index) => item.id + index}
        numColumns={4}
        contentContainerStyle={styles.grid}
        showsVerticalScrollIndicator={false}
      />

      <View style={styles.bottomNav}>
        {[
          { icon: 'home-outline', label: 'Home' },
          { icon: 'grid-outline', label: 'Category', active: true },
          { icon: 'cart-outline', label: 'Cart' },
          { icon: 'pricetags-outline', label: 'Offers' },
          { icon: 'person-outline', label: 'Account' },
        ].map((nav, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.navItem, nav.active && styles.activeNav]}
          >
            <Icon
              name={nav.icon}
              size={22}
              color={nav.active ? Colors.primary : Colors.white}
            />
            <Text style={[styles.navText, nav.active && { color: Colors.primary }]}>
              {nav.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
};

export default CategorySelectionScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  header: {
    paddingTop: 40,
    paddingHorizontal: 25,
    paddingBottom: 30,
    backgroundColor: Colors.black,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    position: 'relative',
  },
  headerTextBox: {
    paddingRight: 60,
  },
  chooseText: {
    color: Colors.white,
    fontFamily: Fonts.regular,
    fontSize: Fonts.size.medium,
  },
  categoryTextBold: {
    color: Colors.white,
    fontFamily: Fonts.bold,
    fontSize: Fonts.size.large,
  },
  choiceBox: {
    marginTop: 10,
    backgroundColor: Colors.primary,
    paddingVertical: 10,
    paddingHorizontal: 10,
    alignSelf: 'flex-start',
    borderRadius: 6,
  },
  choiceText: {
    color: Colors.white,
    fontFamily: Fonts.bold,
    fontSize: Fonts.size.small2,
  },
  iconRow: {
    position: 'absolute',
    top: 30,
    right: 20,
    flexDirection: 'row',
  },
  grid: {
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  categoryItem: {
    width: width / 4,
    alignItems: 'center',
    marginBottom: 24,
  },
  imageBox: {
    width: 60,
    height: 60,
    borderRadius: 12,
    backgroundColor: Colors.white2,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 6,
  },
  categoryImage: {
    width: 40,
    height: 40,
    borderRadius: 20, 
  },
  categoryText: {
    fontSize: Fonts.size.xsmall,
    fontFamily: Fonts.regular,
    color: Colors.black,
    textAlign: 'center',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: Colors.black,
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: Colors.grey,
  },
  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 6,
    borderRadius: 10,
  },
  navText: {
    fontSize: Fonts.size.xsmall,
    fontFamily: Fonts.regular,
    color: Colors.white,
    marginTop: 2,
  },
  activeNav: {
    backgroundColor: Colors.tagBackground,
  },
});

