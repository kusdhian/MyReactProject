import React from 'react';
import {View, Text, Pressable} from 'react-native';

// const Hello = props => {
//   return (
//     <View>
//       <Text style={{fontSize: 30, textAlign: 'center', color: 'black'}}>
//         Hello, {props.namaDepan} {props.namaBelakang}
//       </Text>
//       <Pressable
//         style={{
//           backgroundColor: props.buttonColor,
//           marginHorizontal: 20,
//           alignItems: 'center',
//           padding: 5,
//         }}>
//         <Text style={{fontSize: 25, color: 'white'}}>{props.buttonText}</Text>
//       </Pressable>
//     </View>
//   );
// };

// export default Hello;

// untuk hello 2
const Hello = props => {
  const {namaDepan, namaBelakang, buttonColor, buttonText} = props.data;
  return (
    <View style={{marginBottom: 10}}>
      <Text style={{fontSize: 30, textAlign: 'center', color: 'black'}}>
        Hello, {namaDepan} {namaBelakang}
      </Text>
      <Pressable
        style={{
          backgroundColor: buttonColor,
          marginHorizontal: 20,
          alignItems: 'center',
          padding: 5,
        }}>
        <Text style={{fontSize: 25, color: 'white'}}>{buttonText}</Text>
      </Pressable>
    </View>
  );
};

export default Hello;
