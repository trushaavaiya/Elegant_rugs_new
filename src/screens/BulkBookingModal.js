import React, { useState } from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  ImageBackground,
} from 'react-native';
import Colors from '../constants/Color';
import Fonts from '../constants/Font';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window')
const quantityOptions = ['10-15', '16-20', '21-25', '26-30', '31-35', 'More Than'];
;


const BulkBookingModal = ({ visible, onClose }) => {
  const navigation = useNavigation();
  const [selectedQuantity, setSelectedQuantity] = useState('10-15');
 

  return (
    <Modal 
    animationType="slide"
      transparent
      visible={visible}
      onRequestClose={onClose}
      >

        <ImageBackground
        source={require('../assets/modalTopBg.png')} 
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <View style={styles.overlay}>
          <View style={styles.modalContainer}>

            <TouchableOpacity style={styles.closeButton} onPress={onClose}>
              <Icon name="close" size={20} color={Colors.white} />
            </TouchableOpacity>

            <Text style={styles.title}>NEED BULK BOOKING</Text>

            <View style={styles.row}>
              <Text style={styles.label}>Price</Text>
              <Text style={styles.price}>₹ 8,990</Text>
            </View>

            <Text style={styles.label}>Select Quantity</Text>
            <View style={styles.optionsContainer}>
              {quantityOptions.map((option) => (
                <TouchableOpacity
                  key={option}
                  style={[
                    styles.optionButton,
                    selectedQuantity === option && styles.selectedOption,
                  ]}
                  onPress={() => setSelectedQuantity(option)}
                >
                  <Text
                    style={[
                      styles.optionText,
                      selectedQuantity === option && styles.selectedOptionText,
                    ]}
                  >
                    {option}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            <View style={styles.actionRow}>
              <TouchableOpacity style={styles.cancelButton} onPress={() => navigation.goBack('')}>
                <Text style={styles.cancelText}>CANCEL</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.submitButton} onPress={() => navigation.navigate('ThankYouScreen')}>
                <Text style={styles.submitText}>SUBMIT</Text>
              </TouchableOpacity>
            </View>

          </View>
        </View>
      </ImageBackground>

    </Modal>
    
);
};

export default BulkBookingModal;

const styles = StyleSheet.create({
  backgroundImage: {
    width: width,
    height: height,
    justifyContent: 'flex-end',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    justifyContent: 'flex-end',
  },
  modalContainer: {
    backgroundColor: Colors.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    paddingBottom: 40,
  },
  closeButton: {
    alignSelf: 'center',
    backgroundColor: Colors.black,
    borderRadius: 20,
    padding: 5,
    marginBottom: 10,
  },
  title: {
    fontFamily: Fonts.bold,
    fontSize: 14,
    textAlign: 'center',
    color: Colors.black,
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  label: {
    fontFamily: Fonts.regular ,
    fontSize: 12,
    color: Colors.grey,
    marginBottom: 10,
  },
  price: {
    fontFamily: Fonts.bold ,
    fontSize: 16,
    color: Colors.black,
  },
  optionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginBottom: 20,
  },
  optionButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    backgroundColor: Colors.white2 ,
    borderWidth: 1,
    borderColor: Colors.white2,
    marginRight: 10,
    marginBottom: 10,
  },
  selectedOption: {
    backgroundColor: Colors.black,
  },
  optionText: {
    fontSize: 12,
    fontFamily: Fonts.regular,
    color: Colors.grey,
  },
  selectedOptionText: {
    color: Colors.white,
  },
  actionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  cancelButton: {
    backgroundColor: Colors.black,
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 30,
    flex: 1,
    marginRight: 10,
    borderWidth: 1,
    borderColor: Colors.black,
  },
  cancelText: {
    color: Colors.white,
    fontFamily: Fonts.regular,
    textAlign: 'center',
  },
  submitButton: {
    backgroundColor: Colors.primary,
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 30,
    flex: 1,
  },
  submitText: {
    color: Colors.white,
    fontFamily: Fonts.regular,
    textAlign: 'center',
  },
  
});
