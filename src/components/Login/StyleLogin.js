/* eslint-disable prettier/prettier */

import {StyleSheet,Platform} from 'react-native';

export const style = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: 'contain',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },

  background: {
    //KeyboardAvoidingView
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 20 : 0,
  },

  containerLogo: {
    //View logo
    flex: 1,
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
    paddingBottom: 30,
    marginBottom:20,
  },

  container: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    marginBottom: 30,
    borderRadius: 12,
  },

  buttons:{
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    marginTop: 15,
    borderRadius: 12,
  },

  input: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor:'#35AAFF',
    width: '90%',
    marginBottom: 5,
    color: '#222',
    fontSize: 17,
    borderRadius: 7,
    padding: 10,
  },

  btnSubmit: {
    backgroundColor: '#11811C',
    width: '90%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    marginTop: 50,
  },

  textSubmit: {
    color: '#FFF',
    fontSize: 18,
  },

  btnRegister: {
    marginTop: 10,
    backgroundColor: '#35AAFF',
    width: '90%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },

  textRegister: {
    color: '#FFF',
    fontSize: 18,
  },

  btnAlterPasswor: {
    marginTop: 5,
    marginBottom: 5 ,
  },

  textAlterPasswor: {
    color: '#28ABE3',
    paddingBottom: 15,
  },

  textTitulo: {
    color: '#28ABE3',
    fontSize: 20,
    justifyContent: 'center',
    marginBottom:6,
    marginTop:30,
  },
});
