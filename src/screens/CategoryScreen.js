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

const categories = [
  { id: '1', name: 'All', image: require('../assets/category-all.png') },
  { id: '2', name: 'Modern', image: require('../assets/category-modern.png') },
  { id: '3', name: 'Transitional', image: require('../assets/category-transitional.png') },
  { id: '4', name: 'Geometric', image: require('../assets/category-geometric.png') },
  { id: '5', name: 'Abstract', image: require('../assets/category-abstract.png') },
  { id: '6', name: 'Classic', image: require('../assets/category-classis.png') },
  { id: '7', name: 'Floral', image: require('../assets/category-floral.png') },
  { id: '8', name: 'Abstract', image: require('../assets/category-abstract.png') },
  { id: '9', name: 'Transitional', image: require('../assets/category-transitional.png') },
  { id: '10', name: 'Modern', image: require('../assets/category-modern.png') },
  { id: '11', name: 'Transitional', image: require('../assets/category-transitional.png') },
  { id: '12', name: 'Geometric', image: require('../assets/category-geometric.png') },
];




const CategoryScreen = ({ navigation }) => {
  const [selected, setSelected] = useState('1');
   const renderItem = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.categoryBox,
        selected === item.id && styles.categoryBoxSelected,
      ]}
      onPress={() => setSelected(item.id)}
    >
      <Image source={item.image} style={styles.imageStyle} />
      <Text
        style={[
          styles.categoryText,
          selected === item.id && styles.categoryTextSelected,
        ]}
        numberOfLines={1}
      >
        {item.name}
      </Text>
    </TouchableOpacity>
  );

  
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

       <View style={styles.centeredGridContainer}>
        <FlatList
          data={categories}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          numColumns={4}
          scrollEnabled={false} 
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{}}
        />
      </View>
      <TouchableOpacity
        style={styles.nextButton}
        onPress={() => navigation.navigate('ProductListingScreen')} 
      >
        <Text style={styles.nextText}>NEXT</Text>
      </TouchableOpacity>

      
     
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
  centeredGridContainer: {
    marginTop: 40,
    alignItems: 'center', 
  },
  categoryBox: {
    width: (width - 88)/4, 
    margin: 6,
    backgroundColor: Colors.darkBox,
    alignItems: 'center',
    padding: 12,
    borderRadius: 8,
  },
  categoryBoxSelected: {
    backgroundColor: Colors.white,
  },
  categoryText: {
    color: Colors.white,
    marginTop: 8,
    fontSize: Fonts.size.xsmall,
    fontFamily: Fonts.regular,
    textAlign: 'center',
  },
  categoryTextSelected: {
    color: Colors.black,
    fontFamily: Fonts.bold,
  },
  imageStyle: {
    width: 28,
    height: 28,
    resizeMode: 'contain',
    borderRadius: 20,
  },
  nextButton: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: Colors.primary,
    paddingVertical: 14,
    borderRadius: 30,
    alignItems: 'center',
  },
  nextText: {
    color: Colors.white,
    fontSize: Fonts.size.medium,
    fontFamily: Fonts.bold,
  },
  
});

export default CategoryScreen;
