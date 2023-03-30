import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import Welcome from '../screens/Welcome';
import SignIn from '../screens/SignIn';
import Home from '../screens/Home';

const Stack = createStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{...TransitionPresets.RevealFromBottomAndroid}}
      />
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{...TransitionPresets.RevealFromBottomAndroid}}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{...TransitionPresets.RevealFromBottomAndroid}}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
