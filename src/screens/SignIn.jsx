import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useRef, useState} from 'react';
import {Button, Header} from '../components';
import {COLORS, SIZES} from '../constants';
import * as Animatable from 'react-native-animatable';
import {Icon, SocialIcon} from 'react-native-elements';

const SignIn = ({navigation}) => {
  const [isfocused, setIsfocused] = useState(false);
  const ref1 = useRef(1);
  const ref2 = useRef(2);

  return (
    <View style={styles.container}>
      <Header title="MY ACCOUNT" type="arrow-back" />
      <View style={{marginTop: 10, marginLeft: 20}}>
        <Text style={styles.title}>SingIn</Text>
      </View>
      <View style={{marginTop: 10, alignItems: 'center'}}>
        <Text style={styles.text}>Please enter the email and password</Text>
        <Text style={styles.text}>registered with your account</Text>
      </View>
      <View style={{marginTop: 20}}>
        <View>
          <TextInput style={styles.textInput} placeholder="Email" ref={ref1} />
        </View>
        <View style={styles.textInput1}>
          <Animatable.View
            animation={isfocused ? '' : 'fadeInLeft'}
            duration={400}>
            <Icon name="lock" type="material" style={{width: '100%'}} />
          </Animatable.View>
          <TextInput
            placeholder="Passwod"
            ref={ref2}
            style={{width: '80%'}}
            onFocus={() => {
              setIsfocused(false);
            }}
            onBlur={() => {
              setIsfocused(true);
            }}
          />
          <Animatable.View
            animation={isfocused ? '' : 'fadeInRight'}
            duration={400}>
            <Icon
              name="visibility-off"
              type="material"
              style={{marginRight: 10}}
            />
          </Animatable.View>
        </View>
      </View>
      <View>
        <Button
          style={styles.button}
          onPress={() => navigation.navigate('Home')}>
          Sign In
        </Button>
      </View>
      <View style={{alignItems: 'center', marginTop: 10}}>
        <Text style={{...styles.text, textDecorationLine: 'underline'}}>
          Forgot Password ?
        </Text>
      </View>
      <View style={{alignItems: 'center', marginTop: 10}}>
        <Text
          style={{
            fontSize: 20,
            fontFamily: 'Inter-Bold',
            fontWeight: 'bold',
          }}>
          OR
        </Text>
      </View>
      <View style={{marginHorizontal: 20, marginVertical: 5}}>
        <SocialIcon
          title="Sign In With Facebook"
          button
          type="facebook"
          style={styles.social}
          onPress={() => {}}
        />
      </View>
      <View style={{marginHorizontal: 20}}>
        <SocialIcon
          title="Sign In With Google"
          button
          type="google"
          style={styles.social}
          onPress={() => {}}
        />
      </View>
      <View style={{marginLeft: 30, marginTop: 15}}>
        <Text style={{...styles.text, fontSize: 17}}>Now on Delivery ?</Text>
      </View>
      <View style={{alignItems: 'flex-end', marginRight: 25}}>
        <Button mode="flat">Create an account</Button>
      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {flex: 1},
  text: {
    color: COLORS.gray3,
    fontSize: SIZES.medium,
    fontFamily: 'Inter-Medium',
  },
  title: {
    fontSize: SIZES.extraLarge,
    color: COLORS.headerColor,
    fontFamily: 'Inter-SemiBold',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#86939e',
    marginHorizontal: 20,
    borderRadius: 12,
    marginBottom: 15,
    paddingLeft: 15,
  },
  textInput1: {
    borderWidth: 1,
    borderColor: '#86939e',
    marginHorizontal: 20,
    borderRadius: 12,
    marginBottom: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'center',
    paddingLeft: 15,
  },
  button: {
    minWidth: 1,
    marginHorizontal: 20,
    backgroundColor: COLORS.headerColor,
    borderRadius: 12,
    marginVertical: 5,
  },
  social: {
    borderRadius: 12,
    height: 50,
  },
});
