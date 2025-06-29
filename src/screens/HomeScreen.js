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
  const bannerImages = [
    require('../assets/sofa1.png'),
    require('../assets/sofa2.png'),
    require('../assets/sofa3.png'),
  ];

  const categoryData = [
    { title: 'All', image: require('../assets/category-all.png') },
    { title: 'Modern', image: require('../assets/category-modern.png') },
    { title: 'Transitional', image: require('../assets/category-transitional.png') },
    { title: 'Geometric', image: require('../assets/category-geometric.png') },
    { title: 'Abstract', image: require('../assets/category-abstract.png') },
    { title: 'Classis', image: require('../assets/category-classis.png') },
    { title: 'Floral', image: require('../assets/category-floral.png') },
    { title: 'See All', image: require('../assets/category-seeall.png') },
  ];

  

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>

        <View style={styles.header}>
          <View style={styles.headerTop}>
            <Text style={styles.title}>Make Your</Text>
            <View style={styles.iconsRight}>
              <Icon name="search-outline" size={24} color={Colors.white} style={styles.iconSpacing} />
              <Icon name="notifications-outline" size={24} color={Colors.white} />
            </View>
          </View>
          <Text style={[styles.title, { fontWeight: 'bold' }]}>Interior More</Text>
          <Text style={styles.attractive}>ATTRACTIVE</Text>

          <ScrollView horizontal pagingEnabled showsHorizontalScrollIndicator={false}>
            {bannerImages.map((img, index) => (
              <View key={index} style={styles.bannerBox}>
                <Image source={img} style={styles.bannerImage} resizeMode="contain" />
                <View style={styles.discountBox}>
                  <Text style={styles.discountText}>DISCOUNT</Text>
                  <Text style={styles.discountPercent}>30%</Text>
                  <Text style={styles.discountNote}>ALL RUGS</Text>
                </View>
              </View>
            ))}
          </ScrollView>
          <View style={styles.dotsContainer}>
            {bannerImages.map((_, index) => (
              <View key={index} style={styles.dot} />
            ))}
          </View>
        </View>

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
  header: { backgroundColor: Colors.black, padding: 40 },
  headerTop: { flexDirection: 'row', justifyContent: 'space-between' },
  iconsRight: { flexDirection: 'row', alignItems: 'center' },
  iconSpacing: { marginRight: 10 },
  title: { color: Colors.white, fontFamily: Fonts.regular, fontSize: Fonts.size.large },
  attractive: {
    backgroundColor: Colors.primary,
    color: Colors.white,
    fontFamily: Fonts.bold,
    fontSize: Fonts.size.large,
    paddingHorizontal: 8,
    marginTop: 4,
    alignSelf: 'flex-start',
  },
  bannerBox: {
    flexDirection: 'row',
    marginTop: 16,
    backgroundColor: Colors.white2,
    borderRadius: 12,
    padding: 12,
  },
  bannerImage: { width: width * 0.5, height: 100 },
  discountBox: { flex: 1, justifyContent: 'center', paddingLeft: 16 },
  discountText: { fontFamily: Fonts.regular, fontSize: Fonts.size.small, color: Colors.black },
  discountPercent: { fontFamily: Fonts.bold, fontSize: Fonts.size.xlarge, color: Colors.primary },
  discountNote: { fontFamily: Fonts.regular, fontSize: Fonts.size.small, color: Colors.black },
  dotsContainer: { flexDirection: 'row', justifyContent: 'center', marginTop: 8 },
  dot: { width: 8, height: 8, borderRadius: 4, backgroundColor: Colors.grey, marginHorizontal: 4 },
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
  
  
});

export default HomeScreen;
