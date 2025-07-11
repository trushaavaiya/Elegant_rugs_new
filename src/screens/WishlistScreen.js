import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../constants/Color';
import Fonts from '../constants/Font';

const { width } = Dimensions.get('window');
const ITEM_WIDTH = (width - 40) / 2;

const products = [
  {
    id: '1',
    title: 'Kasbah',
    subtitle: 'Rug',
    price: '₹ 8,990',
    image: require('../assets/rug1.png'),
  },
  {
    id: '2',
    title: 'INDE ROSE',
    subtitle: 'Rug',
    price: '₹ 8,990',
    image: require('../assets/rug2.png'),
  },
  {
    id: '3',
    title: 'Kasbah',
    subtitle: 'Rug',
    price: '₹ 8,990',
    image: require('../assets/rug3.png'),
  },
  {
    id: '4',
    title: 'INDE ROSE',
    subtitle: 'Rug',
    price: '₹ 8,990',
    image: require('../assets/rug4.png'),
  },
  {
    id: '5',
    title: 'Kasbah',
    subtitle: 'Rug',
    price: '₹ 8,990',
    image: require('../assets/rug5.png'),
  },
  {
    id: '6',
    title: 'INDE ROSE',
    subtitle: 'Rug',
    price: '₹ 8,990',
    image: require('../assets/rug1.png'),
  },
];

const WishlistScreen = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={item.image} style={styles.image} />
      <TouchableOpacity style={styles.heartIcon}>
        <Icon name="heart" size={20} color={Colors.white} />
      </TouchableOpacity>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.subtitle}>{item.subtitle}</Text>
      <Text style={styles.price}>{item.price}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color={Colors.white} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Wishlist</Text>
        <View style={{ width: 24 }} />
      </View>

      <View style={styles.content}>
        <Text style={styles.favoriteCount}>60 FAVORITE PRODUCT</Text>
        <FlatList
          data={products}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          numColumns={2}
          columnWrapperStyle={styles.row}
          contentContainerStyle={{ paddingBottom: 100 }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black,
  },
  header: {
    backgroundColor: Colors.black,
    padding: 16,
    paddingTop: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    color: Colors.white,
    fontSize: Fonts.size.medium,
    fontFamily: Fonts.bold,
  },
  content: {
    flex: 1,
    backgroundColor: Colors.white,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  favoriteCount: {
    fontSize: Fonts.size.small,
    fontFamily: Fonts.regular,
    marginBottom: 20,
    color: Colors.black,
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  card: {
    width: ITEM_WIDTH,
    backgroundColor: Colors.white,
  },
  image: {
    width: '100%',
    height: ITEM_WIDTH,
    borderRadius: 10,
  },
  heartIcon: {
    position: 'absolute',
    bottom: 8,
    right: 8,
    backgroundColor: Colors.primary,
    borderRadius: 20,
    padding: 6,
  },
  title: {
    fontSize: Fonts.size.small,
    fontFamily: Fonts.regular,
    fontWeight: '600',
    marginTop: 8,
    color: Colors.black,
  },
  subtitle: {
    fontSize: Fonts.size.xsmall,
    fontFamily: Fonts.regular,
    color: Colors.textGrey,
    marginTop: 2,
  },
  price: {
    fontSize: Fonts.size.small2,
    fontFamily: Fonts.regular,
    fontWeight: 'bold',
    color: Colors.black,
    marginTop: 4,
  },
});

export default WishlistScreen;
