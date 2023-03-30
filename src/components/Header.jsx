import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, SIZES} from '../constants';
import {Icon} from '@rneui/themed';
const Header = ({title, type}) => {
  return (
    <View style={styles.header}>
      <View style={{marginLeft: 20}}>
        <Icon onPress={() => {}} name={type} size={28} color={COLORS.white} />
      </View>
      <View>
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    backgroundColor: COLORS.headerColor,
    flexDirection: 'row',
    height: SIZES.headerHight,
  },
  headerText: {
    color: COLORS.white,
    fontSize: SIZES.extraLarge,
    fontWeight: 'bold',
    fontFamily: 'Inter-Bold',
    marginLeft: 90,
  },
});
