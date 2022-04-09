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
  ActivityIndicator,
  Alert,
} from 'react-native';
import {styleSesuatu} from '../style/style'; // dipakai jika di style js exportnya di awal
// import Hello from './view/Hello';
// import CounterComp from './view/CounterComp';
// import styleSesuatu from './style/style'; // dipakai jika di style js exportnya di akhir
import axios from 'axios';

const Login = ({navigation}) => {
  const submitLogin = async (username, password) => {
    //   konek ke API
    const response = await axios.post(
      'http://8110-175-176-163-195.ngrok.io/login',
      {
        username,
        password,
      },
    );
    if (response.data.status == 'ok') {
      console.log(response);
    }

    // setLoading(true);
    setTxtLogin(
      <ActivityIndicator size="large" color="white"></ActivityIndicator>,
      //   'Please wait...',
    );
    if (username === '' || password === '') {
      alert('username atau pasword kosong');
      setTxtLogin('Login');
    }
    setTimeout(() => {
      //   setLoading(false);
      setTxtLogin('Login');
      navigation.navigate('Props');
    }, 1000);
  };
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [txtLogin, setTxtLogin] = useState('Login');
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
          onChangeText={value => setUsername(value)}
          placeholder="Username"></TextInput>

        <TextInput
          style={styleSesuatu.textInput}
          secureTextEntry={true}
          onChangeText={value => setPassword(value)}
          placeholder="Password"></TextInput>

        <Pressable
          onPress={() => {
            console.log('forgot password ditekan');
          }}>
          <View style={{alignItems: 'flex-end'}}>
            <Text style={styleSesuatu.textForgotPassword}>Forgot Password</Text>
          </View>
        </Pressable>

        <Pressable
          style={styleSesuatu.pressable}
          //   onPress={() => {
          //     // console.log('login ditekan');
          //     // alert(username + password);
          //     // console.log(username, password);
          //     // if (username == '' && password == '') {
          //     //   Alert.alert('username dan password wajib diisi');
          //     // } else {
          //     //   navigation.navigate('Props');
          //     // }
          //   }}
          //   onPress={submitLogin}
          onPress={() => submitLogin(username, password)}>
          <Text style={styleSesuatu.textPressable}>{txtLogin}</Text>
        </Pressable>

        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <Text style={styleSesuatu.textDontHaveAccount}>
            Don't have an account?
          </Text>
          <Pressable
            // onPress={() => {
            //   console.log('sign up password ditekan');
            // }}
            onPress={() => navigation.navigate('Register')}>
            <Text style={styleSesuatu.textSignUp}> Sign Up</Text>
          </Pressable>
        </View>
        {loading && <ActivityIndicator size="large" color="crimson" />}
      </View>
    </ScrollView>
  );
};

export default Login;
