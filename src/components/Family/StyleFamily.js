/* eslint-disable prettier/prettier */
import {StyleSheet,Platform} from 'react-native';

export const style =  StyleSheet.create({
  imagem:{
    flex: 1,
    resizeMode: 'contain',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },

  background:{
    //KeyboardAvoidingView
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 20 : 0,
  },

});

export const Background = StyleSheet.create({
    //KeyboardAvoidingView
    flex: 1,
});

