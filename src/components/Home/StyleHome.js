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
    paddingTop: 35,
    paddingBottom: 60,
    marginTop: 10,
  },

  textTitulo: {
    color: '#28ABE3',
    fontSize: 20,
    justifyContent: 'center',
    marginBottom:6,
    marginTop:1,
  },

  InfoUser: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    borderRadius: 12,
  },

  container: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '90%',
    borderRadius: 12,
    flexDirection: 'row',
  },

  buttons:{
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    marginTop: 15,
    borderRadius: 12,
  },


  btnContainer: {
    width: '45%',
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
    marginTop: 5,
  },

  imageButton:{
    marginTop: 6,
    width: 120,
  },


});
