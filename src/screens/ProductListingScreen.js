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



const ProductListingScreen = ({ navigation }) => {

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
    
  
});

export default ProductListingScreen;
