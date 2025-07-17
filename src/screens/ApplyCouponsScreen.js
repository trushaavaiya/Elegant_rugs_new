import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  FlatList,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../constants/Color';
import Fonts from '../constants/Font';

const { width } = Dimensions.get('window');

const coupons = [
  {
    id: '1',
    code: 'FREEDELPTM',
    description: 'GET UNLIMITED FREE DELIVERY',
    detail: 'Use code FREEDELPTM & get free delivery on all orders above ₹ 1,000',
  },
  {
    id: '2',
    code: 'PPFERDEL',
    description: 'GET UNLIMITED FREE DELIVERY',
    detail: 'Use code FREEDELPTM & get free delivery on all orders above ₹ 1,000',
  },
  {
    id: '3',
    code: 'PPFERDEL',
    description: 'GET UNLIMITED FREE DELIVERY',
    detail: 'Use code FREEDELPTM & get free delivery on all orders above ₹ 1,000',
  },
];

const ApplyCouponsScreen = ({ navigation }) => {
  const [couponCode, setCouponCode] = useState('');

  const renderCoupon = ({ item }) => (
    <View style={styles.couponContainer}>
      <View style={styles.rowBetween}>
        <Text style={styles.codeBox}>{item.code}</Text>
        <TouchableOpacity>
          <Text style={styles.applyText}>APPLY</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.description}>{item.description}</Text>
      <Text style={styles.detail}>{item.detail}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color={Colors.white} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Apply Coupons</Text>
        <View style={{ width: 24 }} />
      </View>

      <View style={styles.inputRow}>
        <TextInput
          placeholder="Enter Coupon Code"
          style={styles.input}
          value={couponCode}
          onChangeText={setCouponCode}
          placeholderTextColor={Colors.grey}
        />
        <TouchableOpacity style={styles.inputButton}>
          <Icon name="arrow-forward" size={20} color={Colors.white} />
        </TouchableOpacity>
      </View>

      <FlatList
        data={coupons}
        keyExtractor={(item) => item.id}
        renderItem={renderCoupon}
        contentContainerStyle={{ paddingBottom: 30 }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  header: {
    
    backgroundColor: Colors.black,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 40,
  },
  headerTitle: {
    fontSize: 16,
    fontFamily: Fonts.bold,
    color: Colors.white,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white2,
    margin: 16,
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 8,
    elevation: 2,
  },
  input: {
    flex: 1,
    fontSize: 16,
    fontFamily: Fonts.medium,
    color: Colors.black,
  },
  inputButton: {
    backgroundColor: Colors.primary,
    borderRadius: 20,
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  couponContainer: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.lightGrey,
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  codeBox: {
    borderColor: Colors.primary,
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 8,
    paddingVertical: 4,
    fontFamily: Fonts.medium,
    fontSize: 20,
    color: Colors.primary,
  },
  applyText: {
    fontSize: 12,
    color: Colors.primary,
    fontFamily: Fonts.medium,
  },
  description: {
    fontFamily: Fonts.semiBold,
    fontSize: 18,
    marginTop: 6,
    color: Colors.black,
  },
  detail: {
    fontFamily: Fonts.regular,
    fontSize: 16,
    color: Colors.grey,
    marginTop: 2,
  },
});

export default ApplyCouponsScreen;
