import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Modal,
} from 'react-native';
import Slider from '@react-native-community/slider';
import { BlurView } from '@react-native-community/blur';
import Colors from '../constants/Color';
import Fonts from '../constants/Font';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const categories = ['Modern', 'Florel', 'Abstract', 'Transitional', 'Classis', 'Geometric'];
const colors = Colors.filterPalette;
const sortingOptions = ['Best Selling', 'Price–Low To High', 'Price–High To Low', 'All Price'];

const FilterModal = ({ onClose}) => {
const navigation = useNavigation(); 

  const [selectedCategory, setSelectedCategory] = useState('Modern');
  const [minPrice, setMinPrice] = useState(1500);
  const [maxPrice, setMaxPrice] = useState(5000);
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [selectedSort, setSelectedSort] = useState('Best Selling');
  

  return (
    <Modal animationType="fade" transparent={true} visible={true}>
      <View style={styles.overlay}>
        <BlurView
          style={StyleSheet.absoluteFill}
          blurType="light"
          blurAmount={10}
          reducedTransparencyFallbackColor="white"
        />

        <View style={styles.container}>
          <View style={styles.modal}>
            <TouchableOpacity style={styles.closeButton} onPress={()=>onClose()}>
              <Icon name="close" size={20} color={Colors.white} />
            </TouchableOpacity>

            <Text style={styles.heading}>FILTERS</Text>

            <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
              <Text style={styles.label}>Categories</Text>
              <View style={styles.chipGroup}>
                {categories.map((cat) => (
                  <TouchableOpacity
                    key={cat}
                    style={[styles.chip, selectedCategory === cat && styles.chipSelected]}
                    onPress={() => setSelectedCategory(cat)}
                  >
                    <Text
                      style={[styles.chipText, selectedCategory === cat && styles.chipTextSelected]}
                    >
                      {cat}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>

              <Text style={styles.label}>Price Range</Text>
              <View style={styles.sliderRow}>
                <Slider
                  style={{ flex: 1 }}
                  minimumValue={1500}
                  maximumValue={5000}
                  minimumTrackTintColor={Colors.primary}
                  maximumTrackTintColor={Colors.borderGrey}
                  thumbTintColor={Colors.primary}
                  value={maxPrice}
                  onValueChange={(value) => setMaxPrice(Math.round(value))}
                />
              </View>
              <View style={styles.priceTextRow}>
                <Text style={styles.price}>₹ 1,500</Text>
                <Text style={styles.price}>₹ {maxPrice}</Text>
              </View>

              <Text style={styles.label}>Colors</Text>
              <View style={styles.colorRow}>
                {colors.map((color) => (
                  <TouchableOpacity
                    key={color}
                    style={[
                      styles.colorCircle,
                      { backgroundColor: color },
                      selectedColor === color && styles.selectedColorCircle,
                    ]}
                    onPress={() => setSelectedColor(color)}
                  >
                    {selectedColor === color && <View style={styles.checkmark} />}
                  </TouchableOpacity>
                ))}
              </View>

              <Text style={styles.label}>Sorting By</Text>
              <View style={styles.chipGroup}>
                {sortingOptions.map((opt) => (
                  <TouchableOpacity
                    key={opt}
                    style={[styles.chip, selectedSort === opt && styles.chipSelected]}
                    onPress={() => setSelectedSort(opt)}
                  >
                    <Text
                      style={[styles.chipText, selectedSort === opt && styles.chipTextSelected]}
                    >
                      {opt}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </ScrollView>

            <View style={styles.footer}>
              <TouchableOpacity style={styles.resetButton}>
                <Text style={styles.resetText}>RESET</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.applyButton} onPress={() => navigation.navigate('ProductDetails')}>
                <Text style={styles.applyText}>APPLY</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'transparent',
  },
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  modal: {
    backgroundColor: Colors.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    maxHeight: height * 0.9,
  },
  closeButton: {
    backgroundColor: Colors.black,
    alignSelf: 'center',
    marginTop: -18,
    zIndex: 1,
    borderRadius: 16,
    padding: 8,
  },
  heading: {
    textAlign: 'center',
    fontFamily: Fonts.bold,
    fontSize: Fonts.size.medium,
    color: Colors.black,
    marginTop: 4,
  },
  scrollContent: {
    padding: 16,
  },
  label: {
    fontFamily: Fonts.bold,
    fontSize: Fonts.size.small2,
    color: Colors.black,
    marginBottom: 8,
    marginTop: 20,
  },
  chipGroup: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  chip: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    backgroundColor: Colors.lightGrey,
    marginBottom: 8,
  },
  chipSelected: {
    backgroundColor: Colors.black,
  },
  chipText: {
    fontFamily: Fonts.regular,
    fontSize: Fonts.size.small,
    color: Colors.textGrey,
  },
  chipTextSelected: {
    color: Colors.white,
  },
  sliderRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  priceTextRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  price: {
    fontFamily: Fonts.regular,
    fontSize: Fonts.size.small,
    color: Colors.black,
  },
  colorRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    marginTop: 8,
  },
  colorCircle: {
    width: 28,
    height: 28,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedColorCircle: {
    borderWidth: 2,
    borderColor: Colors.primary,
  },
  checkmark: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: Colors.white,
  },
  footer: {
    flexDirection: 'row',
    backgroundColor: Colors.background,
    padding: 16,
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderTopColor: Colors.lightGrey,
  },
  resetButton: {
    flex: 1,
    backgroundColor: Colors.black,
    paddingVertical: 12,
    borderRadius: 30,
    marginRight: 8,
  },
  resetText: {
    color: Colors.white,
    fontFamily: Fonts.bold,
    fontSize: Fonts.size.small2,
    textAlign: 'center',
  },
  applyButton: {
    flex: 1,
    backgroundColor: Colors.primary,
    paddingVertical: 12,
    borderRadius: 30,
    marginLeft: 8,
  },
  applyText: {
    color: Colors.white,
    fontFamily: Fonts.bold,
    fontSize: Fonts.size.small2,
    textAlign: 'center',
  },
});

export default FilterModal;
