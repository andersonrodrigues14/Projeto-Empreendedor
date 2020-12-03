/* eslint-disable prettier/prettier */
import {StyleSheet, Platform} from 'react-native';

export const style = StyleSheet.create({
  container: {
    flex: 2.5,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginTop: 10,
  },
  containerUser: {
    flex: 3.5,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  background: {
    //KeyboardAvoidingView
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 20 : 0,
  },
  scroll: {
    flex: 0.1,
    width: '100%',
  },
  image: {
    flex: 1,
    resizeMode: 'contain',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  containerLogo: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textTitulo: {
    color: '#28ABE3',
    fontSize: 20,
    justifyContent: 'center',
    marginBottom: 6,
    marginTop: 1,
  },

  btnRegister: {
    backgroundColor: '#35AAFF',
    width: '50%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    marginBottom: 90,
  },

  textRegister: {
    color: '#FFF',
    fontSize: 18,
  },
  containerAdministrador: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    borderRadius: 12,
    flexDirection: 'column',
    marginLeft: '5%',
  },
  containerUser1: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchIcon: {
    padding: 10,
    marginBottom: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  input: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#35AAFF',
    width: '100%',
    height: 40,
    marginBottom: 5,
    color: '#222',
    fontSize: 17,
    borderRadius: 7,
    paddingLeft: 10,
    flex: 1,
  },
});
