import React, {useState, useEffect} from 'react';
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
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import axios from 'axios';
import Hello from './view/Hello';
import Login from './view/Login';
import Register from './view/Register';
import Props from './view/Props';

// const getData = async () => {
//   const response = await axios.get('https://eo63elaswea21nk.m.pipedream.net');
//   console.log(response.data);
//   return response.data;
// };

const Stack = createNativeStackNavigator();

const App = () => {
  //   const [data, setData] = useState([]);

  //   useEffect(() => {
  //     setData(getData());
  //   }, []);

  //   if (data.length == 0) {
  //     return (
  //       <View>
  //         <Text style={{fontSize: 50, textAlign: 'center'}}>Data Kosong</Text>
  //       </View>
  //     );
  //   }

  //   return (
  //     <ScrollView style={styleSesuatu.container}>
  //       <View style={{margin: 10}}>
  //         {data.map((value, i) => (
  //           <Hello data={value} key={i} />
  //         ))}
  //       </View>
  //     </ScrollView>
  //   );

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login}></Stack.Screen>
        <Stack.Screen name="Register" component={Register}></Stack.Screen>
        <Stack.Screen name="Props" component={Props}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
