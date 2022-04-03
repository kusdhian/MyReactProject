import {StyleSheet} from 'react-native';

export const styleSesuatu = StyleSheet.create({
  // const styleSesuatu = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: 'white',
    marginHorizontal: 5,
  },
  text: {
    fontSize: 25,
    color: 'gold',
  },
  pressable: {
    width: '100%',
    backgroundColor: '#942525',
    alignItems: 'center',
    marginVertical: 20,
    padding: 10,
    borderRadius: 10,
  },
  textPressable: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  textInput: {
    // margin: 5,
    marginBottom: 15,
    // marginHorizontal: 10,
    fontSize: 15,
    borderWidth: 2,
    borderColor: 'grey',
    borderRadius: 10,
    padding: 10,
    width: '100%',
  },
  textForgotPassword: {
    color: '#942525',
  },
  textDontHaveAccount: {
    fontWeight: 'bold',
  },
  textSignUp: {
    color: '#942525',
  },
});

// export default styleSesuatu;
