import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  FlatList,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../constants/Color';
import Fonts from '../constants/Font';

const { width } = Dimensions.get('window');

const cartItems = [
  {
    id: '1',
    name: 'INDE ROSE RUG',
    size: '6x9 ft',
    price: '₹ 8,990',
    originalPrice: '₹ 9,990',
    image: require('../assets/rug1.png'),
    quantity: 1,
  },
  {
    id: '2',
    name: 'INDE ROSE RUG',
    size: '6x9 ft',
    price: '₹ 8,990',
    originalPrice: '₹ 9,990',
    image: require('../assets/rug4.png'),
    quantity: 1,
  },
];

const CartScreen = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <View style={styles.cartItem}>
      <Image source={item.image} style={styles.itemImage} />
      <View style={styles.itemInfo}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemSize}>Size: {item.size}</Text>
        <View style={styles.quantityRow}>
          <TouchableOpacity style={styles.qtyBtn}><Text style={styles.qtyText}>–</Text></TouchableOpacity>
          <Text style={styles.qtyCount}>{item.quantity}</Text>
          <TouchableOpacity style={styles.qtyBtn}><Text style={styles.qtyText}>+</Text></TouchableOpacity>
        </View>
      </View>
      <View style={styles.priceInfo}>
        <Text style={styles.itemPrice}>{item.price}</Text>
        <Text style={styles.originalPrice}>{item.originalPrice}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: 120 }}>
        <View style={styles.header}>
          <View style={styles.headerIcons}>
            <TouchableOpacity>
              <Icon name="search" size={20} color={Colors.white} />
            </TouchableOpacity>
            <TouchableOpacity style={{ marginLeft: 16 }}>
              <Icon name="notifications-outline" size={20} color={Colors.white} />
            </TouchableOpacity>
          </View>
          <View style={styles.headerTextBox}>
            <Text style={styles.headerText}>Check Your</Text>
            <Text style={styles.headerHighlight}>
              Favorite <Text style={styles.rugs}>RUGS</Text>
            </Text>
          </View>
        </View>

        <FlatList
          data={cartItems}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          scrollEnabled={false}
        />

        <View style={styles.promoRow}>
          <TouchableOpacity onPress={() => navigation.navigate('ApplyCouponsScreen')}>
            <Text style={styles.promoCode}>Promo Code</Text>
            <Text style={styles.promoValue}>NYFH50</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="trash-outline" size={20} color={Colors.discount} />
            <Text style={styles.removeText}>Remove</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.priceDetails}>
          <Text style={styles.sectionTitle}>Price Details:</Text>
          <View style={styles.priceRow}><Text>Shopping Bag Total</Text><Text>$189.00</Text></View>
          <View style={styles.priceRow}><Text>Promo Code Discount</Text><Text>- $18.90</Text></View>
          <View style={styles.priceRow}><Text>Reward Points Discount</Text><Text>$7.50</Text></View>
          <View style={styles.priceRow}><Text>Order Total</Text><Text>$162.60</Text></View>
          <View style={styles.priceRow}><Text style={styles.totalText}>Total</Text><Text style={styles.totalText}>$162.00</Text></View>
        </View>

        <View style={styles.addressRow}>
          <View>
            <Text style={styles.deliveredText}>Delivered to</Text>
            <Text style={styles.address}>HOME</Text>
          </View>
          <TouchableOpacity>
            <Text style={styles.editText}>Edit Address</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.checkoutBtn} onPress={() => navigation.navigate("Splash")}>
          <Text style={styles.checkoutText}>PROCEED TO CHECKOUT</Text>
        </TouchableOpacity>
      </ScrollView>

      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('HomeScreen')}>
          <Icon name="home-outline" size={20} color={Colors.white} />
          <Text style={styles.navLabel}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('CategoryScreen')}>
          <Icon name="grid-outline" size={20} color={Colors.white} />
          <Text style={styles.navLabel}>Category</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="bag-outline" size={20} color={Colors.primary} />
          <Text style={[styles.navLabel, { color: Colors.primary }]}>Cart</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('OfferScreen')}>
          <Icon name="pricetag-outline" size={20} color={Colors.white} />
          <Text style={styles.navLabel}>Offers</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('AccountScreen')}>
          <Icon name="person-outline" size={20} color={Colors.white} />
          <Text style={styles.navLabel}>Account</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.white },
  header: {
    backgroundColor: Colors.black,
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
    padding: 20,
    paddingTop: 60,
  },
  headerIcons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  headerTextBox: {
    marginTop: 20,
  },
  headerText: {
    color: Colors.white,
    fontSize: 16,
    fontFamily: Fonts.MontserratRegular,
  },
  headerHighlight: {
    color: Colors.white,
    fontSize: 22,
    fontFamily: Fonts.bold,
    marginTop: 4,
  },
  rugs: {
    backgroundColor: Colors.primary,
    color: Colors.white,
    paddingHorizontal: 6,
    borderRadius: 4,
  },
  cartItem: {
    flexDirection: 'row',
    backgroundColor: Colors.white,
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: Colors.lightGrey,
  },
  itemImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 12,
  },
  itemInfo: { flex: 1 },
  itemName: {
    fontFamily: Fonts.MontserratSemiBold,
    fontSize: 14,
    color: Colors.black,
  },
  itemSize: {
    fontFamily: Fonts.MontserratRegular,
    fontSize: 12,
    color: Colors.grey,
  },
  quantityRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  qtyBtn: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: Colors.lightGrey,
    alignItems: 'center',
    justifyContent: 'center',
  },
  qtyText: { fontSize: 16 },
  qtyCount: { marginHorizontal: 10, fontSize: 14 },
  priceInfo: { alignItems: 'flex-end' },
  itemPrice: {
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.black,
  },
  originalPrice: {
    fontSize: 12,
    color: Colors.grey,
    textDecorationLine: 'line-through',
  },
  promoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: Colors.white2,
    alignItems: 'center',
  },
  promoCode: { fontSize: 12 },
  promoValue: {
    fontSize: 14,
    fontFamily: Fonts.MontserratSemiBold,
  },
  removeText: {
    fontSize: 12,
    color: Colors.discount,
    textAlign: 'right',
  },
  priceDetails: {
    padding: 16,
    backgroundColor: Colors.white,
  },
  sectionTitle: {
    fontSize: 14,
    fontFamily: Fonts.MontserratSemiBold,
    marginBottom: 10,
  },
  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  totalText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.black,
  },
  addressRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: Colors.lightGrey,
    alignItems: 'center',
  },
  deliveredText: {
    fontSize: 12,
    color: Colors.grey,
  },
  address: {
    fontSize: 14,
    fontFamily: Fonts.MontserratSemiBold,
    color: Colors.black,
  },
  editText: {
    fontSize: 12,
    color: Colors.primary,
  },
  checkoutBtn: {
    backgroundColor: Colors.primary,
    padding: 16,
    margin: 16,
    borderRadius: 24,
    alignItems: 'center',
  },
  checkoutText: {
    color: Colors.white,
    fontFamily: Fonts.MontserratSemiBold,
    fontSize: 14,
  },
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width,
    height: 60,
    backgroundColor: Colors.black,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  navItem: {
    alignItems: 'center',
  },
  navLabel: {
    fontSize: 10,
    color: Colors.white,
    marginTop: 2,
    fontFamily: Fonts.MontserratRegular,
  },
});
