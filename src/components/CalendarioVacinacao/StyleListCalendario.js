/* eslint-disable prettier/prettier */
import {StyleSheet, Platform} from 'react-native';

export const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  background: {
    //KeyboardAvoidingView
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 20 : 0,
  },
  image: {
    flex: 1,
    resizeMode: 'contain',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  containerLogo: {
    //View logo
    flex: 0.1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 35,
    paddingBottom: 30,
    marginTop: 15,
  },
  textTitulo: {
    color: '#28ABE3',
    fontSize: 20,
    justifyContent: 'center',
    marginBottom: 6,
    marginTop: 1,
  },
  containerInfo: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    borderRadius: 12,
    flexDirection: 'column',
    paddingTop: 10,
  },

  btnInsert: {
    backgroundColor: '#35AAFF',
    width: '70%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    marginBottom: 10,
    flexDirection: 'row',
  },

  btnFilter: {
    backgroundColor: '#F2F2F2',
    width: '70%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    marginBottom: 10,
    flexDirection: 'row',
  },

  textInsert: {
    color: '#FFF',
    fontSize: 18,
    marginLeft: 10,
  },

  textFilter: {
    color: '#000',
    fontSize: 18,
    marginLeft: 10,
    marginRight: 10,
  },
});
