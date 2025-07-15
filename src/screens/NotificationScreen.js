import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../constants/Color';
import Fonts from '../constants/Font';

const notifications = {
  new: [
    {
      id: '1',
      title: '50% OFF in Modern Rugs All Products!!',
      time: '09:35 AM',
      image: require('../assets/rug1.png'),
    },
    {
      id: '2',
      title: 'One step ahead with new stylish collections every week',
      time: '09:20 AM',
      image: require('../assets/rug2.png'),
    },
  ],
  earlier: [
    {
      id: '3',
      title: 'Package from your order #19547464 has arrived',
      time: 'Yesterday',
      image: require('../assets/rug3.png'),
    },
    {
      id: '4',
      title: 'Flash Sale starting tomorrow. Don’t forget to check it out.',
      time: '20 Apr',
      image: require('../assets/rug4.png'),
    },
    {
      id: '5',
      title: 'PROMO code BS5D6486# Don’t forgot to use',
      time: '19 Apr',
      image: require('../assets/rug5.png'),
    },
  ],
};

const NotificationScreen = ({ navigation }) => {
  const renderNotification = ({ item }) => (
    <View style={styles.notificationBox}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.textBox}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.time}>{item.time}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back-outline" size={24} color={Colors.white} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Notifications</Text>
        <View style={{ width: 24 }} />
      </View>

      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>New</Text>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{notifications.new.length}</Text>
          </View>
        </View>
        <FlatList
          data={notifications.new}
          keyExtractor={(item) => item.id}
          renderItem={renderNotification}
        />
      </View>

      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Earlier</Text>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{notifications.earlier.length}</Text>
          </View>
        </View>
        <FlatList
          data={notifications.earlier}
          keyExtractor={(item) => item.id}
          renderItem={renderNotification}
        />
      </View>
    </SafeAreaView>
  );
};

export default NotificationScreen;

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
    fontFamily: Fonts.bold,
    fontSize: Fonts.size.medium,
  },
  section: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  sectionTitle: {
    fontFamily: Fonts.bold,
    fontSize: Fonts.size.medium,
    color: Colors.black,
    marginRight: 10,
  },
  badge: {
    backgroundColor: Colors.primary,
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  badgeText: {
    color: Colors.white,
    fontFamily: Fonts.bold,
    fontSize: 12,
  },
  notificationBox: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  textBox: {
    flex: 1,
  },
  title: {
    fontFamily: Fonts.regular,
    fontSize: Fonts.size.small,
    color: Colors.black,
    marginBottom: 4,
  },
  time: {
    fontFamily: Fonts.regular,
    fontSize: 12,
    color: Colors.textGrey,
  },
});
