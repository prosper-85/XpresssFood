import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS} from './constants';
import RootNav from './navigation/RootNav';

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={COLORS.headerColor}
      />
      <RootNav />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {flex: 1},
});
