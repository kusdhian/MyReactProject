import React, {useState} from 'react';
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
import Hello from './view/Hello';
import CounterComp from './view/CounterComp';
// import styleSesuatu from './style/style'; // dipakai jika di style js exportnya di akhir

const App = () => {
  // const dataKus = {
  //   namaDepan: 'Kusdhian',
  //   namaBelakang: 'Herlambang',
  //   buttonText: 'OK',
  //   buttonColor: 'crimson',
  // };

  // const dataKiper = {
  //   namaDepan: 'Fabien',
  //   namaBelakang: 'Barthez',
  //   buttonText: 'Cancel',
  //   buttonColor: 'blue',
  // };

  // const dataGelandang = {
  //   namaDepan: 'Paul',
  //   namaBelakang: 'Scholes',
  //   buttonText: 'Approve',
  //   buttonColor: 'black',
  // };

  // const data = [
  //   {
  //     namaDepan: 'Kusdhian',
  //     namaBelakang: 'Herlambang',
  //     buttonText: 'OK',
  //     buttonColor: 'crimson',
  //   },
  //   {
  //     namaDepan: 'Fabien',
  //     namaBelakang: 'Barthez',
  //     buttonText: 'Cancel',
  //     buttonColor: 'blue',
  //   },
  //   {
  //     namaDepan: 'Paul',
  //     namaBelakang: 'Scholes',
  //     buttonText: 'Approve',
  //     buttonColor: 'black',
  //   },
  // ];

  const [counter, setCounter] = useState(0);

  return (
    <ScrollView style={styleSesuatu.container}>
      {/* <View style={{margin: 10}}>
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
          placeholder="Username"></TextInput>

        <TextInput
          style={styleSesuatu.textInput}
          secureTextEntry={true}
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
          onPress={() => {
            console.log('login ditekan');
          }}>
          <Text style={styleSesuatu.textPressable}>Log In</Text>
        </Pressable>

        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <Text style={styleSesuatu.textDontHaveAccount}>
            Don't have an account?
          </Text>
          <Pressable
            onPress={() => {
              console.log('sign up password ditekan');
            }}>
            <Text style={styleSesuatu.textSignUp}> Sign Up</Text>
          </Pressable>
        </View>
      </View> */}
      {/* menampilkan props text */}
      {/* <Hello
        namaDepan="Kusdhian"
        namaBelakang="Herlambang"
        buttonText="OK"
        buttonColor="crimson"
      />
      <Hello
        namaDepan="Fabien"
        namaBelakang="Barthez"
        buttonText="Cancel"
        buttonColor="blue"
      />
      <Hello
        namaDepan="Paul"
        namaBelakang="Scholes"
        buttonText="Approve"
        buttonColor="black"
      /> */}
      {/* untuk hello 2*/}
      {/* <Hello data={dataKus} />
      <Hello data={dataKiper} />
      <Hello data={dataGelandang} /> */}
      {/* {data.map((value, i) => (
        <Hello data={value} key={i} />
      ))} */}

      {/* untuk props */}
      <CounterComp counter={counter} setCounter={setCounter}></CounterComp>

      {/* untuk button dan pressable */}
      {/* <Text style={styleSesuatu.text}>Hello my friend!</Text>
      <View style={{width: '50%'}}>
        <Button
          onPress={() => {
            console.log('button ditekan');
          }}
          color="grey"
          title="Klik"
        />
      </View>
      <Pressable
        style={styleSesuatu.pressable}
        onPress={() => {
          console.log('pressable ditekan');
        }}
        onLongPress={() => {
          console.log('onlongpress pressable ditekan');
        }}
        onPressOut={() => {
          console.log('onpress out');
        }}>
        <Image
          source={require('./images/songoku.png')}
          style={{width: '100%', height: 100, alignItems: 'center'}}
          resizeMode="cover"></Image>
        <Text style={styleSesuatu.textPressable}>Klik disini</Text>
      </Pressable> */}
    </ScrollView>
  );
};

export default App;
