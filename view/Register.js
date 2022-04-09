import axios from 'axios';
import React, {useState} from 'react';
// import Home from './view/Home';
// import Home2 from './view/Home2';

import {
  View,
  Text,
  ScrollView,
  Image,
  Button,
  Pressable,
  TextInput,
} from 'react-native';
import {styleSesuatu} from '../style/style'; // dipakai jika di style js exportnya di awal
// import styleSesuatu from './style/style'; // dipakai jika di style js exportnya di akhir

const submitRegister = async (email, username, password) => {
  //   konek ke API
  const response = await axios.post(
    'http://8110-175-176-163-195.ngrok.io/register',
    {
      email,
      username,
      password,
    },
  );
  if (response.data.status == 'ok') {
    //register berhasil
    console.log(response);
  }
};

const Register = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
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
          keyboardType="email-address"
          style={styleSesuatu.textInput}
          onChangeText={value => setEmail(value)}
          placeholder="Email"></TextInput>

        <TextInput
          style={styleSesuatu.textInput}
          onChangeText={value => setUsername(value)}
          placeholder="Username"></TextInput>

        <TextInput
          style={styleSesuatu.textInput}
          onChangeText={value => setPassword(value)}
          secureTextEntry={true}
          placeholder="Password"></TextInput>

        <View style={{alignItems: 'flex-end'}}>
          <Text style={styleSesuatu.textForgotPassword}>Forgot Password</Text>
        </View>

        <Pressable
          style={styleSesuatu.pressable}
          onPress={() => submitRegister(email, username, password)}>
          <Text style={styleSesuatu.textPressable}>Sign Up</Text>
        </Pressable>

        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <Text style={styleSesuatu.textDontHaveAccount}>Alredy a member?</Text>
          <Pressable onPress={() => navigation.navigate('Login')}>
            <Text style={styleSesuatu.textSignUp}> Login</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
};

export default Register;
