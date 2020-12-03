/* eslint-disable prettier/prettier */
import {StyleSheet, Platform} from 'react-native';

export const style = StyleSheet.create({
  container: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },

  containerUser1: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },

  scroll: {
    flex: 0.1,
    width: '100%',
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
    flex: 0.2,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
  },
  textTitulo: {
    color: '#28ABE3',
    fontSize: 20,
    justifyContent: 'center',
    paddingBottom: 5,
    marginTop: 1,
  },
  containerInfo: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    borderRadius: 12,
    flexDirection: 'column',
    marginLeft: '5%',
  },

  esconde: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    borderRadius: 12,
    flexDirection: 'column',
    marginLeft: '5%',
    flex: 0.2,
  },

  btnInsert: {
    backgroundColor: '#35AAFF',
    width: '70%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    flexDirection: 'row',
  },

  textInsert: {
    color: '#FFF',
    fontSize: 18,
    marginLeft: 10,
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
    color: '#222',
    fontSize: 17,
    borderRadius: 7,
    paddingLeft: 10,
    flex: 1,
  },

  InfoUser: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    borderRadius: 12,
    flexDirection: 'row',
    paddingHorizontal: 60,
    marginTop: 10,
  },
});
