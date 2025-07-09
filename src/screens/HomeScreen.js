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

const HomeScreen = ({ navigation }) => {
  const bannerImages = [
    require('../assets/sofa1.png'),
    require('../assets/sofa2.png'),
    require('../assets/sofa3.png'),
  ];

  const categoryData = [
    { title: 'All', image: require('../assets/category-all.png') },
    { title: 'Modern', image: require('../assets/category-modern.png') },
    {
      title: 'Transitional',
      image: require('../assets/category-transitional.png'),
    },
    { title: 'Geometric', image: require('../assets/category-geometric.png') },
    { title: 'Abstract', image: require('../assets/category-abstract.png') },
    { title: 'Classis', image: require('../assets/category-classis.png') },
    { title: 'Floral', image: require('../assets/category-floral.png') },
    { title: 'See All', image: require('../assets/category-seeall.png') },
  ];
  const rugImages = [
    require('../assets/rug1.png'),
    require('../assets/rug2.png'),
    require('../assets/rug3.png'),
    require('../assets/rug4.png'),
    require('../assets/rug5.png'),
  ];
  const services = [
    { label: 'Best Service', icon: require('../assets/service-best.png') },
    {
      label: '100% Authentic',
      icon: require('../assets/service-authentic.png'),
    },
    { label: 'Fastest Delivery', icon: require('../assets/service-fast.png') },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View style={styles.headerTop}>
            <Text style={styles.title}>Make Your</Text>
            <View style={styles.iconsRight}>
              <Icon
                name="search-outline"
                size={24}
                color={Colors.white}
                style={styles.iconSpacing}
              />
              <Icon
                name="notifications-outline"
                size={24}
                color={Colors.white}
              />
            </View>
          </View>
          <Text style={[styles.title, { fontWeight: 'bold' }]}>
            Interior More
          </Text>
          <Text style={styles.attractive}>ATTRACTIVE</Text>

         
        </View>
 <View
            style={{
              // position: 'absolute',
              left: 0,
              right: 0,
              top: -40,
              width:width,
              // height:300,
              alignItems:'center',
              justifyContent:'centers',
              // backgroundColor:'red'
            }}
          >
            <ScrollView
              horizontal
              pagingEnabled
              showsHorizontalScrollIndicator={false}
              style={{width:(width-48)*3, paddingLeft:8, marginRight:16}}
            >
              {bannerImages.map((img, index) => (
                <View key={index} style={styles.bannerBox}>
                  <Image
                    source={img}
                    style={styles.bannerImage}
                    resizeMode="contain"
                  />
                  <View style={styles.discountBox}>
                    <Text style={styles.discountText}>DISCOUNT</Text>
                    <Text style={styles.discountPercent}>30%</Text>
                    <Text style={styles.discountNote}>ALL RUGS</Text>
                  </View>
                </View>
              ))}
            </ScrollView>
          </View>
          {/* <View style={styles.dotsContainer}>
            {bannerImages.map((_, index) => (
              <View key={index} style={styles.dot} />
            ))}
          </View> */}
        <Text style={styles.sectionTitle}>TOP CATEGORIES</Text>
        <View style={styles.categoryGrid}>
          {categoryData.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.categoryItem,
                item.title === 'See All' && styles.seeAllCategory,
              ]}
              onPress={() => navigation.navigate('CategoryScreen')}
            >
              <Image source={item.image} style={styles.categoryIcon} />
              <Text
                style={[
                  styles.categoryText,
                  item.title === 'See All' && styles.seeAllText,
                ]}
              >
                {item.title}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {renderHorizontalList('ALL RUGS', rugImages.slice(0, 3))}

        {renderHorizontalList('RECENTLY VIEWED', rugImages)}

        {renderHorizontalList('SIMILAR PRODUCTS', rugImages)}

        <View style={styles.serviceRow}>
          {services.map((item, index) => (
            <View key={index} style={styles.serviceItem}>
              <Image source={item.icon} style={styles.serviceIcon} />
              <Text style={styles.serviceText}>{item.label}</Text>
            </View>
          ))}
        </View>

        {renderHorizontalList('SPOTLIGHT RUGS', rugImages)}

        <Text style={styles.sectionTitle}>SHOP BY SIZE (FT)</Text>
        <View style={styles.sizeList}>
          {['12x16', '16x20', '20x24', '24x26', '26x28', '28x30'].map(
            (size, index) => (
              <View key={index} style={styles.sizeItem}>
                <Text style={styles.sizeText}>{size}</Text>
              </View>
            ),
          )}
        </View>

        {renderHorizontalList('POPULAR RUGS', rugImages)}
      </ScrollView>
      <View style={styles.bottomNav}>
        {['Home', 'Category', 'Cart', 'Offers', 'Account'].map(
          (item, index) => (
            <TouchableOpacity key={index} style={styles.navItem}>
              <Icon
                name={
                  item === 'Home'
                    ? 'home'
                    : item === 'Category'
                    ? 'grid'
                    : item === 'Cart'
                    ? 'cart'
                    : item === 'Offers'
                    ? 'pricetags'
                    : 'person'
                }
                size={22}
                color={Colors.black}
              />
              <Text style={styles.navText}>{item}</Text>
            </TouchableOpacity>
          ),
        )}
      </View>
    </SafeAreaView>
  );
};
const renderHorizontalList = (title, images) => (
  <View style={styles.productSection}>
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <Text style={styles.seeAllLink}>See All</Text>
    </View>
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {images.map((img, index) => (
        <View key={index} style={styles.rugCard}>
          <Image source={img} style={styles.rugImage} />
          <Text style={styles.productName}>Rug {index + 1}</Text>
          <Text style={styles.productPrice}>₹ {8990 + index * 500}</Text>
          <Icon
            name="cart-outline"
            size={16}
            color={Colors.primary}
            style={{ marginTop: 4 }}
          />
        </View>
      ))}
    </ScrollView>
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.white },
  header: { backgroundColor: Colors.black, padding: 40 },
  headerTop: { flexDirection: 'row', justifyContent: 'space-between' },
  iconsRight: { flexDirection: 'row', alignItems: 'center' },
  iconSpacing: { marginRight: 10 },
  title: {
    color: Colors.white,
    fontFamily: Fonts.regular,
    fontSize: Fonts.size.large,
  },
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
    marginHorizontal:8,
    width:width - 48
  },
  bannerImage: { width: width * 0.5, height: 100 },
  discountBox: { flex: 1, justifyContent: 'center', paddingLeft: 16 },
  discountText: {
    fontFamily: Fonts.regular,
    fontSize: Fonts.size.small,
    color: Colors.black,
  },
  discountPercent: {
    fontFamily: Fonts.bold,
    fontSize: Fonts.size.xlarge,
    color: Colors.primary,
  },
  discountNote: {
    fontFamily: Fonts.regular,
    fontSize: Fonts.size.small,
    color: Colors.black,
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 8,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: Colors.grey,
    marginHorizontal: 4,
  },
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
  productSection: { marginTop: 16 },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 16,
    marginBottom: 8,
  },
  seeAllLink: {
    fontSize: Fonts.size.small,
    color: Colors.primary,
    fontFamily: Fonts.regular,
  },
  rugCard: {
    width: 150,
    marginHorizontal: 8,
    backgroundColor: Colors.white2,
    borderRadius: 10,
    padding: 8,
    alignItems: 'center',
  },
  rugImage: { width: 120, height: 120, borderRadius: 8 },
  productName: {
    fontFamily: Fonts.regular,
    fontSize: Fonts.size.small2,
    color: Colors.black,
    textAlign: 'center',
    marginTop: 6,
  },
  productPrice: {
    fontFamily: Fonts.bold,
    fontSize: Fonts.size.small2,
    color: Colors.black,
    textAlign: 'center',
  },
  serviceRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  serviceItem: { alignItems: 'center' },
  serviceIcon: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    marginBottom: 8,
  },
  serviceText: {
    fontFamily: Fonts.regular,
    fontSize: Fonts.size.small,
    color: Colors.black,
  },
  sizeList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: 20,
    gap: 20,
  },
  sizeItem: {
    backgroundColor: Colors.lightGrey,
    paddingVertical: 12,
    paddingHorizontal: 28,
    borderRadius: 20,
    marginBottom: 0,
  },
  sizeText: {
    fontSize: Fonts.size.small,
    fontFamily: Fonts.regular,
    color: Colors.black,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: Colors.white,
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: Colors.lightGrey,
  },
  navItem: { alignItems: 'center' },
  navText: {
    fontSize: Fonts.size.xsmall,
    fontFamily: Fonts.regular,
    color: Colors.black,
  },
});

export default HomeScreen;
