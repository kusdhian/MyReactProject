import React, {useState} from 'react';
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
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <ScrollView style={styleSesuatu.container}>
      <View style={{margin: 10}}>
        <Text>tes</Text>
      </View>
    </ScrollView>
  );
};

export default App;
