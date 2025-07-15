import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import Colors from '../constants/Color';
import Fonts from '../constants/Font';
import Icon from 'react-native-vector-icons/Ionicons';

const { width } = Dimensions.get('window');

const TABS = ['In Process', 'Completed', 'Cancelled'];

const sampleOrders = [
  {
    id: '1',
    orderNo: Colors.blue,
    name: 'INDE ROSE RUG',
    size: '6x9 ft',
    qty: 1,
    image: require('../assets/rug1.png'),
    status: 'In Process',
    showRate: false,
  },
  {
    id: '2',
    orderNo: Colors.blue,
    name: 'INDE ROSE RUG',
    size: '6x9 ft',
    qty: 1,
    image: require('../assets/rug2.png'),
    status: 'In Process',
    showRate: true,
  },
  {
    id: '3',
    orderNo: Colors.blue,
    name: 'INDE ROSE RUG',
    size: '6x9 ft',
    qty: 1,
    image: require('../assets/rug3.png'),
    status: 'In Process',
    showRate: false,
  },
  {
    id: '4',
    orderNo: Colors.blue,
    name: 'INDE ROSE RUG',
    size: '6x9 ft',
    qty: 1,
    image: require('../assets/rug4.png'),
    status: 'In Process',
    showRate: true,
  },
  {
    id: '5',
    orderNo: Colors.blue,
    name: 'INDE ROSE RUG',
    size: '6x9 ft',
    qty: 1,
    image: require('../assets/rug5.png'),
    status: 'In Process',
    showRate: false,
  },
];

const MyOrdersScreen = ({ navigation }) => {
  const [selectedTab, setSelectedTab] = useState('In Process');

  const filteredOrders = sampleOrders.filter(order => order.status === selectedTab);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back-outline" size={24} color={Colors.white} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>My Orders</Text>
        <View style={{ width: 24 }} /> 
      </View>

      {/* Tabs */}
      <View style={styles.tabs}>
        {TABS.map(tab => (
          <TouchableOpacity
            key={tab}
            onPress={() => setSelectedTab(tab)}
            style={[
              styles.tabButton,
              selectedTab === tab && styles.tabButtonActive,
            ]}
          >
            <Text
              style={[
                styles.tabText,
                selectedTab === tab && styles.tabTextActive,
              ]}
            >
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <FlatList
        data={filteredOrders}
        keyExtractor={item => item.id}
        contentContainerStyle={{ paddingBottom: 20 }}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={item.image} style={styles.image} />
            <View style={styles.details}>
              <Text style={styles.orderNo}>{item.orderNo}</Text>
              <Text style={styles.title}>{item.name}</Text>
              <Text style={styles.meta}>Size: {item.size}   Qty: {item.qty}</Text>

              <View style={styles.buttonRow}>
                <TouchableOpacity style={styles.invoiceBtn}>
                  <Text style={styles.invoiceText}>ORDER INVOICE</Text>
                </TouchableOpacity>
                {item.showRate && (
                  <TouchableOpacity style={styles.rateBtn}>
                    <Text style={styles.rateText}>RATE</Text>
                  </TouchableOpacity>
                )}
              </View>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default MyOrdersScreen;

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
    paddingVertical: 50,
    paddingHorizontal: 20,
  },
  headerTitle: {
    color: Colors.white,
    fontSize: 18,
    fontFamily: Fonts.bold,
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: Colors.white,
    paddingVertical: 12,
  },
  tabButton: {
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 20,
    backgroundColor: Colors.white2,
  },
  tabButtonActive: {
    backgroundColor: Colors.black,
  },
  tabText: {
    color: Colors.grey,
    fontFamily: Fonts.regular,
  },
  tabTextActive: {
    color: Colors.white,
    fontFamily: Fonts.bold,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: Colors.white,
    borderBottomWidth: 1,
    borderBottomColor: Colors.white2,
    padding: 16,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 16,
  },
  details: {
    flex: 1,
    justifyContent: 'space-between',
  },
  orderNo: {
    fontSize: 12,
    color: Colors.grey,
    fontFamily: Fonts.regular,
  },
  title: {
    fontSize: 15,
    fontFamily: Fonts.bold,
    color: Colors.black,
    marginTop: 2,
  },
  meta: {
    fontSize: 12,
    fontFamily: Fonts.regular,
    color: Colors.grey,
    marginVertical: 4,
  },
  buttonRow: {
    flexDirection: 'row',
    gap: 10,
  },
  invoiceBtn: {
    backgroundColor: Colors.white2,
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
  invoiceText: {
    fontSize: 12,
    fontFamily: Fonts.bold,
    color: Colors.black,
  },
  rateBtn: {
    backgroundColor: Colors.primary,
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 20,
  },
  rateText: {
    color: Colors.white,
    fontSize: 12,
    fontFamily: Fonts.bold,
  },
});
