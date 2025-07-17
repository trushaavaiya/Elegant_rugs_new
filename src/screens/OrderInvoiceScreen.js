import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../constants/Color';
import Fonts from '../constants/Font';

const OrderInvoiceScreen = ({ navigation, route }) => {
  const { order } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back-outline" size={24} color={Colors.white} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Order Details</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.summaryCard}>
          <Text style={styles.sectionTitle}>Order Summary</Text>
          <View style={styles.itemRow}>
            <Image source={order.image} style={styles.productImage} />
            <View style={{ flex: 1 }}>
              <Text style={styles.productName}>{order.name}</Text>
              <Text style={styles.metaText}>Size: {order.size}    Qty: {order.qty}</Text>
              <Text style={styles.priceRow}>
                <Text style={styles.price}>₹ 8,990 </Text>
                <Text style={styles.discount}>40% Off</Text>
              </Text>
            </View>
          </View>

          <Text style={styles.metaText}>Placed on: 22 Jun. 2020</Text>
          <Text style={styles.metaText}>Order No: {order.orderNo}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Price Details:</Text>

          <View style={styles.row}>
            <Text style={styles.label}>Shopping Bag Total</Text>
            <Text style={styles.value}>$189.00</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>Promo Code Discount</Text>
            <Text style={styles.value}>- $18.90</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>Reward Points Discount</Text>
            <Text style={styles.value}>$7.50</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>Order Total</Text>
            <Text style={styles.value}>$162.60</Text>
          </View>

          <View style={[styles.row, { marginTop: 10 }]}>
            <Text style={styles.totalLabel}>Total</Text>
            <Text style={styles.totalValue}>$162.00</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Delivery Type: <Text style={{ fontWeight: 'normal' }}>Fast Delivery</Text></Text>
          <Text style={[styles.label, { marginTop: 10 }]}>Address:</Text>
          <Text style={styles.value}>HOME</Text>
          <Text style={styles.value}>+61-3215164581, 4261 Kembery Drive</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default OrderInvoiceScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.black,
    paddingVertical: 50,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },
  headerTitle: {
    fontSize: 18,
    fontFamily: Fonts.bold,
    color: Colors.white,
  },
  content: {
    padding: 20,
  },
  summaryCard: {
    backgroundColor: Colors.white,
    borderRadius: 8,
    padding: 16,
    borderColor: Colors.white2,
    borderWidth: 1,
    marginBottom: 20,
  },
  sectionTitle: {
    fontFamily: Fonts.bold,
    fontSize: 16,
    color: Colors.black,
    marginBottom: 12,
  },
  itemRow: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 12,
  },
  productImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  productName: {
    fontSize: 15,
    fontFamily: Fonts.bold,
    color: Colors.black,
  },
  metaText: {
    fontSize: 13,
    color: Colors.grey,
    fontFamily: Fonts.regular,
    marginTop: 4,
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
  },
  price: {
    fontSize: 15,
    fontFamily: Fonts.bold,
    color: Colors.black,
  },
  discount: {
    fontSize: 13,
    fontFamily: Fonts.regular,
    color: 'red',
  },
  section: {
    marginBottom: 20,
    padding: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 6,
  },
  label: {
    fontSize: 14,
    color: Colors.grey,
    fontFamily: Fonts.regular,
  },
  value: {
    fontSize: 14,
    color: Colors.black,
    fontFamily: Fonts.regular,
  },
  totalLabel: {
    fontSize: 16,
    color: Colors.black,
    fontFamily: Fonts.bold,
  },
  totalValue: {
    fontSize: 16,
    color: Colors.black,
    fontFamily: Fonts.bold,
  },
});
