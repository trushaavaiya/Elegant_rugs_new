import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../constants/Color';
import Fonts from '../constants/Font';
import { useNavigation } from '@react-navigation/native';


const { width } = Dimensions.get('window');

const ProductDetails = () => {
  const navigation = useNavigation(); 

  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('12x18');
  const [selectedColor, setSelectedColor] = useState(Colors.filterPalette[0]);

  const sizes = ['12x18', '16x20', '20x24', '24x26', '26x28', '28x30'];
  const colors = Colors.filterPalette;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={styles.container}>
        <View>
          <Image
            source={require('../assets/rug1.png')}
            style={styles.bannerImage}
            resizeMode="cover"
          />
          <TouchableOpacity style={styles.backButton}>
            <Icon name="arrow-back" size={24} color={Colors.white} />
          </TouchableOpacity>
        </View>

        <View style={styles.contentContainer}>
          <Text style={styles.title}>KASBAH</Text>
          <Text style={styles.subtitle}>Modern
            <Text style={styles.rating}> ⭐ 4.5 </Text>
            <Text style={styles.reviewText} onPress={() => navigation.navigate('AllReviews')}>(See Reviews)</Text>
          </Text>

          <View style={styles.quantityRow}>
            <TouchableOpacity onPress={() => setQuantity(Math.max(1, quantity - 1))}>
              <Text style={styles.quantityButton}>-</Text>
            </TouchableOpacity>
            <Text style={styles.quantity}>{quantity}</Text>
            <TouchableOpacity onPress={() => setQuantity(quantity + 1)}>
              <Text style={styles.quantityButton}>+</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.discount}>40% Off</Text>
          <Text style={styles.price}>₹ 8,990</Text>

          <View style={styles.sectionHeaderRow}>
            <Text style={styles.sectionHeader}>NEED BULK BOOKING ?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('BulkBookingModal')}><Text style={styles.plus}>+</Text></TouchableOpacity>
          </View>

          <Text style={styles.sectionHeader}>Shop By Size (Ft)</Text>
          <View style={styles.optionRow}>
            {sizes.map(size => (
              <TouchableOpacity
                key={size}
                onPress={() => setSelectedSize(size)}
                style={[styles.sizeBox, selectedSize === size && styles.selectedBox]}
              >
                <Text style={selectedSize === size ? styles.selectedText : styles.sizeText}>{size}</Text>
              </TouchableOpacity>
            ))}
          </View>

          <Text style={styles.sectionHeader}>Colors</Text>
          <View style={styles.colorRow}>
            {colors.map(color => (
              <TouchableOpacity
                key={color}
                onPress={() => setSelectedColor(color)}
                style={[styles.colorCircle, { backgroundColor: color }, selectedColor === color && styles.selectedCircle]}
              />
            ))}
          </View>

          <Text style={styles.description}>
            The HRX Performance Running Shoes from the Core 1.0 Running Collection are designed with the urban city runner in mind.
          </Text>

          <View style={styles.similarRowHeader}>
            <Text style={styles.sectionHeader}>SIMILAR PRODUCTS</Text>
            <TouchableOpacity><Text style={styles.seeAll}>See All</Text></TouchableOpacity>
          </View>

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {[1, 2].map((item, index) => (
              <View key={index} style={styles.similarProductBox}>
                <Image
                  source={require('../assets/rug2.png')}
                  style={styles.similarImage}
                />
                <Text style={styles.similarTitle}>{item === 1 ? 'Kasbah' : 'INDE ROSE'}</Text>
                <Text style={styles.price}>₹ 8,990</Text>
              </View>
            ))}
          </ScrollView>

          <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.addToCart}><Text style={styles.buttonText}>ADD TO CART</Text></TouchableOpacity>
            <TouchableOpacity style={styles.buyNow} ><Text style={styles.buttonText}>BUY NOW</Text></TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.black },
  bannerImage: { width: width, height: 200 },
  backButton: { position: 'absolute', top: 40, left: 16, zIndex: 1 },
  contentContainer: {
    backgroundColor: Colors.white,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: 20,
    marginTop: -20,
  },
  title: { fontSize: Fonts.size.large, fontFamily: Fonts.bold },
  subtitle: { color: Colors.grey, marginTop: 5, fontFamily: Fonts.regular },
  rating: { color: Colors.starcolor, fontWeight: 'bold' },
  reviewText: { color: Colors.primary },
  quantityRow: { flexDirection: 'row', alignItems: 'center', marginVertical: 10 },
  quantityButton: {
    fontSize: Fonts.size.medium,
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: Colors.lightGrey,
    borderRadius: 5,
  },
  quantity: { marginHorizontal: 10, fontSize: Fonts.size.medium },
  discount: { color: Colors.discount, fontWeight: 'bold', fontSize: Fonts.size.medium },
  price: { fontSize: Fonts.size.large, fontWeight: 'bold', marginVertical: 5 },
  sectionHeaderRow: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 15 },
  sectionHeader: { fontSize: Fonts.size.medium, fontWeight: 'bold', marginVertical: 10 },
  plus: { fontSize: 22, color: Colors.primary },
  optionRow: { flexDirection: 'row', flexWrap: 'wrap' },
  sizeBox: { padding: 10, margin: 5, borderRadius: 5, backgroundColor: Colors.lightGrey },
  selectedBox: { backgroundColor: Colors.primary },
  sizeText: { color: Colors.black },
  selectedText: { color: Colors.white },
  colorRow: { flexDirection: 'row', marginVertical: 10 },
  colorCircle: { width: 30, height: 30, borderRadius: 15, marginHorizontal: 5 },
  selectedCircle: { borderWidth: 2, borderColor: Colors.primary },
  description: { color: Colors.textGrey, marginVertical: 10, fontFamily: Fonts.regular },
  similarRowHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  seeAll: { color: Colors.primary },
  similarProductBox: { width: 120, marginRight: 10 },
  similarImage: { width: 120, height: 120, borderRadius: 10 },
  similarTitle: { fontSize: Fonts.size.small, marginTop: 5 },
  buttonRow: {
    flexDirection: 'row',
    marginTop: 20,
    shadowColor: Colors.black2 ,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  addToCart: {
    flex: 1,
    padding: 15,
    backgroundColor: Colors.black,
    borderRadius: 10,
    marginRight: 10,
  },
  buyNow: {
    flex: 1,
    padding: 15,
    backgroundColor: Colors.primary,
    borderRadius: 10,
  },
  buttonText: { color: Colors.white, textAlign: 'center', fontWeight: 'bold' },
});

export default ProductDetails;
