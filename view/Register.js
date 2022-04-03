import React from 'react';
import Home from './view/Home';
import Home2 from './view/Home2';

import {
  View,
  Text,
  ScrollView,
  Image,
  Button,
  Pressable,
  TextInput,
} from 'react-native';
import {styleSesuatu} from './style/style'; // dipakai jika di style js exportnya di awal
// import styleSesuatu from './style/style'; // dipakai jika di style js exportnya di akhir

const Register = () => {
  return (
    <ScrollView style={styleSesuatu.container}>
      <View style={{margin: 10}}>
        <View style={{alignItems: 'center'}}>
          <Image
            source={{
              uri: 'https://i.ibb.co/sWXCRNC/nukamari-logo.png',
              width: 300,
              height: 300,
            }}></Image>
        </View>

        <TextInput
          style={styleSesuatu.textInput}
          placeholder="Email"></TextInput>

        <TextInput
          style={styleSesuatu.textInput}
          placeholder="Username"></TextInput>

        <TextInput
          style={styleSesuatu.textInput}
          secureTextEntry={true}
          placeholder="Password"></TextInput>

        <View style={{alignItems: 'flex-end'}}>
          <Text style={styleSesuatu.textForgotPassword}>Forgot Password</Text>
        </View>

        <Pressable
          style={styleSesuatu.pressable}
          onPress={() => {
            console.log('Login ditekan');
          }}>
          <Text style={styleSesuatu.textPressable}>Sign Up</Text>
        </Pressable>

        <Text style={styleSesuatu.textDontHaveAccount}>
          Already a member? <Text style={styleSesuatu.textSignUp}>Log In</Text>
        </Text>
      </View>
    </ScrollView>
  );
};

export default Register;
