import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, SIZES} from '../constants';
import {Icon, withBadge} from '@rneui/themed';
const HomeHeader = () => {
  const BadgeIcon = withBadge(0)(Icon);
  return (
    <View style={styles.header}>
      <View
        style={{
          marginLeft: 15,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Icon
          onPress={() => {}}
          name="menu"
          size={32}
          type="material-community"
          color={COLORS.white}
        />
      </View>
      <View>
        <Text style={styles.headerText}>XpressFood</Text>
      </View>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginRight: 15,
        }}>
        <BadgeIcon
          type="material-community"
          name="cart"
          size={35}
          color={COLORS.white}
        />
      </View>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  header: {
    backgroundColor: COLORS.headerColor,
    flexDirection: 'row',
    height: SIZES.headerHight,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerText: {
    color: COLORS.white,
    fontSize: SIZES.extraLarge,
    fontWeight: 'bold',
    fontFamily: 'Inter-Bold',
  },
});
