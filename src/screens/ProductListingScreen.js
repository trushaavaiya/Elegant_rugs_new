import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../constants/Color';
import Fonts from '../constants/Font';

const { width } = Dimensions.get('window');
const cardSpacing = 16;
const cardWidth = (width - cardSpacing * 3) / 2;

const products = [
  { title: 'Kasbah', subtitle: 'Rug', price: '₹ 8,990', image: require('../assets/rug1.png') },
  { title: 'INDE ROSE', subtitle: 'Rug', price: '₹ 8,990', image: require('../assets/rug2.png') },
  { title: 'Kasbah', subtitle: 'Rug', price: '₹ 8,990', image: require('../assets/rug3.png') },
  { title: 'INDE ROSE', subtitle: 'Rug', price: '₹ 8,990', image: require('../assets/rug4.png') },
  { title: 'Kasbah', subtitle: 'Rug', price: '₹ 8,990', image: require('../assets/rug5.png') },
  { title: 'INDE ROSE', subtitle: 'Rug', price: '₹ 8,990', image: require('../assets/rug1.png') },
];


const ProductListingScreen = ({ navigation }) => {
    const renderItem = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        <Image source={item.image} style={styles.image} resizeMode="cover" />
        <TouchableOpacity style={styles.cartButton}>
          <Icon name="bag-handle-outline" size={16} color={Colors.white} />
        </TouchableOpacity>
      </View>
      <View style={styles.cardContent}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.subtitle}>{item.subtitle}</Text>
        <Text style={styles.price}>{item.price}</Text>
      </View>
    </View>
  );

    return(
        <SafeAreaView style={styles.container}>
              <View style={styles.header}>
                <TouchableOpacity>
                  <Icon name="arrow-back" size={24} color={Colors.white} />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Product Listing</Text>
                <View style={styles.headerIcons}>
                  <TouchableOpacity>
                    <Icon name="search" size={22} color={Colors.white} style={{ marginRight: 16 }} />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Icon name="funnel-outline" size={22} color={Colors.white} />
                  </TouchableOpacity>
                </View>
              </View>

              <View style={styles.content}>
                      <Text style={styles.productCount}>460 PRODUCTS FOUND</Text>
                      <FlatList
                        data={products}
                        renderItem={renderItem}
                        keyExtractor={(_, index) => index.toString()}
                        numColumns={2}
                        columnWrapperStyle={{ justifyContent: 'space-between' }}
                        contentContainerStyle={{ paddingBottom: 20 }}
                        showsVerticalScrollIndicator={false}
                      />
              </View>
        
              
            </SafeAreaView>


    );
  
  
};

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: Colors.background,
    paddingTop:40,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    justifyContent: 'space-between',
    paddingVertical: 14,
    backgroundColor: Colors.background,
  },
  headerTitle: {
    fontFamily: Fonts.bold,
    fontSize: Fonts.size.medium,
    color: Colors.white,
  },
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  content: {
    backgroundColor: Colors.white,
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  productCount: {
    fontFamily: Fonts.regular,
    fontSize: Fonts.size.small2,
    color: Colors.black,
    marginBottom: 12,
  },
  card: {
    backgroundColor: Colors.white,
    borderRadius: 8,
    width: cardWidth,
    marginBottom: 16,
    overflow: 'hidden',
  },
  imageContainer: {
    position: 'relative',
  },
  image: {
    width: '100%',
    height: cardWidth,
  },
  cartButton: {
    position: 'absolute',
    bottom: 8,
    right: 8,
    backgroundColor: Colors.primary,
    borderRadius: 16,
    padding: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardContent: {
    paddingHorizontal: 8,
    paddingBottom: 8,
  },
  title: {
    fontFamily: Fonts.bold,
    fontSize: Fonts.size.small,
    color: Colors.black,
    marginTop: 8,
  },
  subtitle: {
    fontFamily: Fonts.regular,
    fontSize: Fonts.size.xsmall,
    color: Colors.subtitleGrey,
    marginTop: 2,
  },
  price: {
    fontFamily: Fonts.bold,
    fontSize: Fonts.size.small2,
    color: Colors.black,
    marginTop: 4,
  },
  
});

export default ProductListingScreen;
