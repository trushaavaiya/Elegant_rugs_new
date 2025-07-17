import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ScrollView,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import * as ImagePicker from 'react-native-image-picker';
import Colors from '../constants/Color';
import Fonts from '../constants/Font';

const { width } = Dimensions.get('window');

const RateReviewScreen = ({ navigation }) => {
  const [rating, setRating] = useState(4);
  const [review, setReview] = useState('');
  const [imageUri, setImageUri] = useState(null);

  const selectImage = () => {
    ImagePicker.launchImageLibrary(
      { mediaType: 'photo', quality: 0.5 },
      response => {
        if (!response.didCancel && !response.errorCode && response.assets?.length) {
          setImageUri(response.assets[0].uri);
        }
      }
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back-outline" size={24} color={Colors.white} />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.card}>
        <Text style={styles.headerTitle}>Rate & Review</Text>

        <View style={styles.stars}>
          {[1, 2, 3, 4, 5].map(star => (
            <TouchableOpacity key={star} onPress={() => setRating(star)}>
              <FontAwesome
                name={star <= rating ? 'star' : 'star-o'}
                size={28}
                color={Colors.starcolor}
                style={styles.star}
              />
            </TouchableOpacity>
          ))}
        </View>

        <Text style={styles.label}>Write Your Review</Text>
        <TextInput
          style={styles.textArea}
          placeholder="Please write your experience's"
          placeholderTextColor={Colors.textGrey}
          multiline
          maxLength={400}
          value={review}
          onChangeText={setReview}
        />
        <Text style={styles.charCount}>{review.length}/400</Text>

        <TouchableOpacity style={styles.uploadBox} onPress={selectImage}>
          {imageUri ? (
            <Image source={{ uri: imageUri }} style={styles.uploadedImage} />
          ) : (
            <>
              <Icon name="image-outline" size={24} color={Colors.textGrey} />
              <Text style={styles.uploadText}>Upload Image</Text>
            </>
          )}
        </TouchableOpacity>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.cancelBtn} onPress={() => navigation.goBack()}>
          <Text style={styles.cancelText}>CANCEL</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.submitBtn}>
          <Text style={styles.submitText}>SUBMIT</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default RateReviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black,
  },
  topBar: {
    padding: 30,
    backgroundColor: Colors.black,
  },
  card: {
    backgroundColor: Colors.white,
    padding: 20,
    paddingBottom: 150,
    minHeight: '100%',
  },
  headerTitle: {
    fontFamily: Fonts.bold,
    fontSize: Fonts.size.medium,
    color: Colors.black,
    textAlign: 'center',
    marginBottom: 16,
  },
  stars: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 24,
  },
  star: {
    marginHorizontal: 5,
  },
  label: {
    fontSize: Fonts.size.small,
    fontFamily: Fonts.bold,
    color: Colors.black,
    marginBottom: 8,
  },
  textArea: {
    backgroundColor: Colors.white2,
    borderRadius: 12,
    padding: 12,
    fontFamily: Fonts.regular,
    fontSize: Fonts.size.small,
    height: 120,
    textAlignVertical: 'top',
  },
  charCount: {
    textAlign: 'right',
    marginTop: 4,
    fontSize: Fonts.size.xsmall,
    color: Colors.textGrey,
  },
  uploadBox: {
    backgroundColor: Colors.white2,
    borderRadius: 12,
    height: 100,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  uploadText: {
    color: Colors.textGrey,
    fontFamily: Fonts.regular,
    marginTop: 6,
  },
  uploadedImage: {
    width: '100%',
    height: '100%',
    borderRadius: 12,
    resizeMode: 'cover',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: Colors.black,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  cancelBtn: {
    borderColor: Colors.white,
    borderWidth: 1,
    borderRadius: 30,
    paddingVertical: 12,
    paddingHorizontal: 30,
  },
  cancelText: {
    color: Colors.white,
    fontFamily: Fonts.bold,
  },
  submitBtn: {
    backgroundColor: Colors.primary,
    borderRadius: 30,
    paddingVertical: 12,
    paddingHorizontal: 30,
  },
  submitText: {
    color: Colors.white,
    fontFamily: Fonts.bold,
  },
});
