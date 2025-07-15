import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Picker } from '@react-native-picker/picker';
import Colors from '../constants/Color';
import Fonts from '../constants/Font';

const AddNewAddressScreen = ({ navigation }) => {
  const [name, setName] = useState('Shop');
  const [mobile, setMobile] = useState('+91 - 6549874665');
  const [area, setArea] = useState('Shyam Vatika');
  const [landmark, setLandmark] = useState('KD Public School');
  const [city, setCity] = useState('Jaipur');
  const [state, setState] = useState('Rajasthan');
  const [zip, setZip] = useState('302022');

  const handleSave = () => {
    const fullAddress = `${area}, ${landmark}, ${city}, ${state} - ${zip}`;
    navigation.navigate('MyAddressScreen', { selectedAddress: fullAddress });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back-outline" size={24} color={Colors.white} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Add New Address</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <Input label="Name of Address" value={name} onChangeText={setName} />
        <Input label="Mobile" value={mobile} onChangeText={setMobile} />
        <Input label="Address (Area and street)" value={area} onChangeText={setArea} />
        <Input label="Landmark" value={landmark} onChangeText={setLandmark} />
        <Input label="City" value={city} onChangeText={setCity} />

        <Text style={styles.label}>State</Text>
        <View style={styles.pickerWrapper}>
          <Picker
            selectedValue={state}
            onValueChange={(itemValue) => setState(itemValue)}
            style={styles.picker}
            dropdownIconColor={Colors.grey}
          >
            <Picker.Item label="Rajasthan" value="Rajasthan" />
            <Picker.Item label="Gujarat" value="Gujarat" />
            <Picker.Item label="Maharashtra" value="Maharashtra" />
          </Picker>
        </View>

        <Input label="Zip Code" value={zip} onChangeText={setZip} />

        <TouchableOpacity style={styles.button} onPress={handleSave}>
          <Text style={styles.buttonText}>SAVE ADDRESS</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const Input = ({ label, value, onChangeText }) => (
  <View style={{ marginBottom: 16 }}>
    <Text style={styles.label}>{label}</Text>
    <TextInput
      style={styles.input}
      value={value}
      onChangeText={onChangeText}
      placeholder={label}
      placeholderTextColor={Colors.grey}
    />
  </View>
);

export default AddNewAddressScreen;

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
    fontSize: 16,
    fontFamily: Fonts.bold,
  },
  content: {
    padding: 20,
    paddingBottom: 40,
  },
  label: {
    fontSize: 13,
    color: Colors.grey,
    fontFamily: Fonts.regular,
    marginBottom: 4,
  },
  input: {
    backgroundColor: Colors.white2,
    borderRadius: 50,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 15,
    fontFamily: Fonts.regular,
    color: Colors.black,
  },
  pickerWrapper: {
    backgroundColor: Colors.white2,
    borderRadius: 50,
    marginBottom: 16,
    overflow: 'hidden',
  },
  picker: {
    height: 50,
    width: '100%',
    color: Colors.black,
  },
  button: {
    marginTop: 20,
    backgroundColor: Colors.primary,
    borderRadius: 30,
    paddingVertical: 15,
    alignItems: 'center',
  },
  buttonText: {
    color: Colors.white,
    fontFamily: Fonts.bold,
    fontSize: 16,
  },
});
