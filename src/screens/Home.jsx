import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {HomeHeader} from '../components';
import {COLORS} from '../constants';
import {Icon} from '@rneui/themed';

const Home = () => {
  const [delivery, setDelivery] = useState(true);
  return (
    <View style={styles.container}>
      <HomeHeader />
      <ScrollView stickyHeaderIndices={[0]} showsVerticalScrollIndicator={true}>
        <View>
          <View
            style={{
              marginTop: 20,
              flexDirection: 'row',
              justifyContent: 'space-evenly',
            }}>
            <TouchableOpacity
              onPress={() => {
                setDelivery(true);
              }}>
              <View
                style={{
                  ...styles.deliveryBtn,
                  backgroundColor: delivery ? COLORS.headerColor : COLORS.gray5,
                }}>
                <Text style={styles.deliverytext}>Delivery</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setDelivery(false);
              }}>
              <View
                style={{
                  ...styles.deliveryBtn,
                  backgroundColor: delivery ? COLORS.gray5 : COLORS.headerColor,
                }}>
                <Text style={styles.deliverytext}>Pick Up</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            marginHorizontal: 5,
            marginTop: 10,
          }}>
          <View
            style={{
              flexDirection: 'row',
              backgroundColor: COLORS.gray4,
              paddingVertical: 7,
              paddingHorizontal: 25,
              borderRadius: 15,
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginRight: 50,
              }}>
              <Icon
                type="material-community"
                name="map-marker"
                size={26}
                color={COLORS.gray1}
              />
              <Text style={{marginLeft: 5}}>22 Beessie Street</Text>
            </View>
            <View style={styles.clock}>
              <Icon
                type="material-community"
                name="clock-time-four"
                size={26}
                color={COLORS.gray1}
              />
              <Text style={{marginLeft: 5}}>Now</Text>
            </View>
          </View>
          <View>
            <Icon
              type="material-community"
              name="tune"
              size={26}
              color={COLORS.gray1}
            />
          </View>
        </View>
        <View style={styles.headerTextView}>
          <Text style={styles.headerText}>Categories</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  deliveryBtn: {
    paddingHorizontal: 15,
    borderRadius: 15,
    paddingVertical: 5,
  },
  deliverytext: {
    marginLeft: 5,
    fontSize: 16,
    fontFamily: 'Inter-Bold',
  },
  clock: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    borderRadius: 15,
    paddingHorizontal: 10,
  },
  headerText: {
    color: COLORS.gray2,
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'Inter-Bold',
    paddingLef: 10,
  },
  headerTextView: {
    backgroundColor: COLORS.gray5,
    paddingVertical: 3,
    marginTop: 10,
  },
});
