import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  ScrollView,
  ActivityIndicator,
} from 'react-native';

const Home2 = () => {
  return (
    // <View style={styles.container}>
    //   <Text style={styles.containerText}>Hello world!</Text>
    //   <Text style={styles.containerText2}>Hello world!</Text>
    //   <Text style={styles.containerText3}>Hello world!</Text>
    // </View>

    <ScrollView>
      <View style={styles.containerBiru}>
        <Text style={styles.containerText3}>Test 1</Text>
        <Text style={styles.containerText3}>Test 2</Text>
      </View>
      <View style={styles.containerAbu}>
        <Text style={styles.containerText3}>Test 3</Text>
        <Text style={styles.containerText3}>Test 4</Text>
      </View>
      <View>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.textInput}
          keyboardType="email-address"
          placeholder="Masukkan Email..."></TextInput>
      </View>
      <View>
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.textInput}
          secureTextEntry={true}
          maxLength={8}
          placeholder="Masukkan Password..."></TextInput>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#273e70',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  containerBiru: {
    backgroundColor: '#273e70',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerAbu: {
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerText: {
    padding: 5,
    fontSize: 30,
    color: 'white',
    textTransform: 'uppercase',
  },
  containerText2: {
    padding: 5,
    fontSize: 30,
    color: 'red',
    textTransform: 'uppercase',
  },
  containerText3: {
    padding: 5,
    fontSize: 30,
    color: 'white',
    textTransform: 'uppercase',
  },
  label: {
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 5,
  },
  textInput: {
    margin: 5,
    marginBottom: 15,
    fontSize: 20,
    borderWidth: 2,
    // borderLeftWidth: 3,
    // borderTopWidth: 3,
    // borderBottomWidth: 1,
    // borderRightWidth: 1,
    borderColor: 'grey',
    borderRadius: 10,
    padding: 10,
  },
});

export default Home2;
