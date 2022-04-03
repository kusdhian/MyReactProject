import React, {useState} from 'react';
import {View, Text, Pressable} from 'react-native';

const CounterComp = props => {
  return (
    <View>
      <Text style={{fontSize: 70, textAlign: 'center', color: 'black'}}>
        {props.counter}
      </Text>
      <Pressable
        onPress={() => props.setCounter(props.counter + 1)}
        style={{
          backgroundColor: 'crimson',
          alignItems: 'center',
          marginBottom: 10,
        }}>
        <Text
          style={{
            fontSize: 30,
            color: 'white',
            fontWeight: 'bold',
            minHeight: 50,
          }}>
          Tambah
        </Text>
      </Pressable>
      <Pressable
        onPress={() => props.setCounter(props.counter - 1)}
        style={{
          backgroundColor: 'black',
          alignItems: 'center',
          marginBottom: 10,
        }}>
        <Text
          style={{
            fontSize: 30,
            color: 'white',
            fontWeight: 'bold',
            minHeight: 50,
          }}>
          Kurang
        </Text>
      </Pressable>
      <Pressable
        onPress={() => props.setCounter(0)}
        style={{
          backgroundColor: 'grey',
          alignItems: 'center',
          marginBottom: 10,
        }}>
        <Text
          style={{
            fontSize: 30,
            color: 'white',
            fontWeight: 'bold',
            minHeight: 50,
          }}>
          Reset
        </Text>
      </Pressable>
      <Pressable
        onPress={() => props.setCounter(props.counter * 2)}
        style={{
          backgroundColor: 'orange',
          alignItems: 'center',
          marginBottom: 10,
        }}>
        <Text
          style={{
            fontSize: 30,
            color: 'white',
            fontWeight: 'bold',
            minHeight: 50,
          }}>
          Dikali 2
        </Text>
      </Pressable>
    </View>
  );
};

export default CounterComp;
