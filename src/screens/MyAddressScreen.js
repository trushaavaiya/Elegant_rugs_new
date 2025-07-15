import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../constants/Color';
import Fonts from '../constants/Font';

const addressData = [
  {
    id: '1',
    type: 'HOME',
    phone: '+61-3215164581',
    address: '4261 Kembery Drive, Chicago, LSA',
  },
  {
    id: '2',
    type: 'OFFICE',
    phone: '+61-3215164581',
    address: '4261 Kembery Drive, Chicago, LSA',
  },
];

const MyAddressScreen = ({ navigation, route }) => {
  const onSelectAddress = (item) => {
    if (route.params?.onSelect) {
      route.params.onSelect(item.address);
    }
    navigation.goBack();
  };

  const renderAddressCard = ({ item }) => (
    <TouchableOpacity
      style={[styles.card, item.type === 'HOME' && styles.selectedCard]}
      onPress={() => onSelectAddress(item)}
    >
      <View style={styles.cardHeader}>
        <Image
          source={require('../assets/Avtar.png')} 
          style={styles.iconImage}
        />
        <Text style={styles.cardTitle}>{item.type}</Text>

        <View style={styles.actionIcons}>
          <TouchableOpacity>
            <Icon name="pencil-outline" size={18} color={Colors.primary} />
          </TouchableOpacity>
          <TouchableOpacity style={{ marginLeft: 12 }}>
            <Icon name="trash-outline" size={18} color={Colors.primary} />
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.cardPhone}>{item.phone}</Text>
      <Text style={styles.cardAddress}>{item.address}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back-outline" size={24} color={Colors.white} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>My Address</Text>
        <View style={{ width: 24 }} /> 
      </View>

      <View style={styles.content}>
        <Text style={styles.savedLabel}>Saved addresses</Text>
        <FlatList
          data={addressData}
          keyExtractor={(item) => item.id}
          renderItem={renderAddressCard}
          contentContainerStyle={{ paddingBottom: 20 }}
        />

        <TouchableOpacity style={styles.addButton} onPress={()=> navigation.navigate('AddNewAddressScreen')}>
          <Text style={styles.addButtonText}>+ ADD NEW ADDRESS</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default MyAddressScreen;

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
    paddingHorizontal: 30,
    justifyContent: 'space-between',
  },
  headerTitle: {
    color: Colors.white,
    fontSize: Fonts.size.medium,
    fontFamily: Fonts.bold,
  },
  content: {
    paddingHorizontal: 20,
    flex: 1,
  },
  savedLabel: {
    fontFamily: Fonts.bold,
    fontSize: 14,
    color: Colors.black,
    marginBottom: 10,
    marginTop: 20,
  },
  card: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.white2,
    padding: 15,
    marginBottom: 15,
    backgroundColor: Colors.white2,
  },
  selectedCard: {
    borderColor: Colors.primary,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconImage: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  cardTitle: {
    fontFamily: Fonts.bold,
    fontSize: 14,
    color: Colors.black,
    flex: 1,
  },
  actionIcons: {
    flexDirection: 'row',
  },
  cardPhone: {
    fontFamily: Fonts.regular,
    fontSize: 13,
    color: Colors.black,
    marginTop: 6,
  },
  cardAddress: {
    fontFamily: Fonts.regular,
    fontSize: 13,
    color: Colors.grey,
    marginTop: 2,
  },
  addButton: {
    backgroundColor: Colors.primary,
    borderRadius: 30,
    paddingVertical: 15,
    alignItems: 'center',
    marginTop: 10,
  },
  addButtonText: {
    color: Colors.white,
    fontFamily: Fonts.bold,
    fontSize: 15,
  },
});
