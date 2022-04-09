import axios from 'axios';
import React, {useEffect, useState} from 'react';

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
import Hello from './Hello';

const Props = () => {
  //   const data = [
  //     {
  //       namaDepan: 'Kusdhian',
  //       namaBelakang: 'Herlambang',
  //       buttonText: 'OK',
  //       buttonColor: 'crimson',
  //     },
  //     {
  //       namaDepan: 'Fabien',
  //       namaBelakang: 'Barthez',
  //       buttonText: 'Cancel',
  //       buttonColor: 'blue',
  //     },
  //     {
  //       namaDepan: 'Paul',
  //       namaBelakang: 'Scholes',
  //       buttonText: 'Approve',
  //       buttonColor: 'black',
  //     },
  //   ];

  const [data, setData] = useState([]);
  const initData = async () => {
    const response = await axios.get(
      'http://8110-175-176-163-195.ngrok.io/data',
    );
    setData(response.data);
  };

  useEffect(() => {
    initData();
  });

  return (
    <ScrollView style={styleSesuatu.container}>
      <View style={{margin: 10}}>
        {data.map((value, i) => (
          <Hello data={value} key={i} />
        ))}
      </View>
    </ScrollView>
  );
};

export default Props;
