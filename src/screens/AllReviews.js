import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../constants/Color';
import Fonts from '../constants/Font';

const { width } = Dimensions.get('window');
const reviews = [
  {
    name: 'Savannah Nguyen',
    date: '25/06/2022',
    avatar: { uri: 'https://i.pravatar.cc/150?img=1' },
    comment:
      'Really convenient and the points system helps benefit loyalty. Some mild glitches here and there, but nothing too egregious. Obviously needs to roll out to more remote...',
  },
  {
    name: 'Kathryn Murphy',
    date: '25/06/2022',
    avatar: { uri: 'https://i.pravatar.cc/150?img=2' },
    comment:
      'Really convenient and the points system helps benefit loyalty. Some mild glitches here and there, but nothing too egregious. Obviously needs to roll out to more remote...',
  },
  {
    name: 'Darrell Steward',
    date: '25/06/2022',
    avatar: { uri: 'https://i.pravatar.cc/150?img=3' },
    comment:
      'Really convenient and the points system helps benefit loyalty. Some mild glitches here and there, but nothing too egregious. Obviously needs to roll out to more remote...',
  },
  {
    name: 'Annette Black',
    date: '25/06/2022',
    avatar: { uri: 'https://i.pravatar.cc/150?img=4' },
    comment:
      'Really convenient and the points system helps benefit loyalty. Some mild glitches here and there, but nothing too egregious. Obviously needs to roll out to more remote...',
  },
];


const AllReviews = ({ navigation }) => {
  return (
    <>
      <StatusBar backgroundColor={Colors.black} barStyle="light-content" />
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack('')}>
            <Icon name="arrow-back" size={24} color={Colors.white} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>All Reviews</Text>
        </View>

        <ScrollView contentContainerStyle={styles.scrollContainer}>
          {reviews.map((item, index) => (
            <View key={index} style={styles.card}>
              <View style={styles.userRow}>
                <Image source={item.avatar} style={styles.avatar} />
                <View style={{ marginLeft: 10 }}>
                  <Text style={styles.name}>{item.name}</Text>
                  <Text style={styles.date}>{item.date}</Text>
                </View>
              </View>
              <Text style={styles.comment}>{item.comment}</Text>
            </View>
          ))}
        </ScrollView>
      </SafeAreaView>
    </>
);
};

const styles = StyleSheet.create({
    safeArea: {
    flex: 1,
    backgroundColor: Colors.white, 
    top:35,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: Colors.black, 
  },
  headerTitle: {
    flex: 1,
    textAlign: 'center',
    fontFamily: Fonts.bold,
    fontSize: Fonts.size.medium,
    color: Colors.white,
    marginRight: 24,
  },
  scrollContainer: {
    padding: 16,
    backgroundColor: Colors.white, 
  },
  card: {
    backgroundColor: Colors.white,
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    
  },
  userRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  name: {
    fontFamily: Fonts.bold,
    fontSize: Fonts.size.small2,
    color: Colors.black,
  },
  date: {
    fontFamily: Fonts.regular,
    fontSize: Fonts.size.xsmall,
    color: Colors.subtitleGrey,
  },
  comment: {
    fontFamily: Fonts.regular,
    fontSize: Fonts.size.small,
    color: Colors.textGrey,
    lineHeight: 20,
  },
  
});

export default AllReviews;