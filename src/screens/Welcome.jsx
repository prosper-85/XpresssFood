import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {COLORS} from '../constants';
import Swiper from 'react-native-swiper';
import {Button} from '../components';

const Welcome = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flex: 3,
          justifyContent: 'flex-start',
          alignItems: 'center',
          paddingTop: 15,
        }}>
        <Text
          style={{
            fontSize: 25,
            fontFamily: 'Inter-SemiBold',
            color: COLORS.headerColor,
            fontWeight: 'bold',
          }}>
          DESCOVER RESTAURANTS
        </Text>
        <Text
          style={{
            fontSize: 23,
            fontFamily: 'Inter-SemiBold',
            color: COLORS.headerColor,
            fontWeight: 'bold',
          }}>
          IN YOUR AREA
        </Text>
      </View>
      <View style={{flex: 4, justifyContent: 'center'}}>
        <Swiper autoplay={true}>
          <View style={styles.slide1}>
            <Image
              source={require('../assets/images/item-1.jpeg')}
              style={{height: '100%', width: '100%'}}
            />
          </View>
          <View style={styles.slide2}>
            <Image
              source={require('../assets/images/item-2.jpeg')}
              style={{height: '100%', width: '100%'}}
            />
          </View>
          <View style={styles.slide3}>
            <Image
              source={require('../assets/images/item-3.jpeg')}
              style={{height: '100%', width: '100%'}}
            />
          </View>
          <View style={styles.slide3}>
            <Image
              source={require('../assets/images/item-4.jpeg')}
              style={{height: '100%', width: '100%'}}
            />
          </View>
        </Swiper>
      </View>
      <View style={{flex: 4, justifyContent: 'flex-end', marginBottom: 20}}>
        <View style={{marginTop: 30, marginHorizontal: 20}}>
          <Button
            style={styles.button}
            onPress={() => {
              navigation.navigate('SignIn');
            }}>
            Sign In
          </Button>
          <Button style={styles.flat} mode="flat">
            Create your account
          </Button>
        </View>
      </View>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  slide1: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#92BBD9',
  },
  button: {
    minWidth: 1,
    backgroundColor: COLORS.headerColor,
    borderRadius: 12,
    marginVertical: 10,
  },
  flat: {
    marginVertical: 10,
  },
});
