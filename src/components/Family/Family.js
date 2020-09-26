/* eslint-disable prettier/prettier */

//import
import React from 'react';

import {
  KeyboardAvoidingView,
  Text,
  ImageBackground,
  View,
} from 'react-native';
import Menu from '../Main/Main';

//import Style
import {style} from './StyleFamily';

//KeyboardAvoidingView usado keybord para evitar possível bug presente no IOS

//Criar o component
export default function App() {

  return (
    <KeyboardAvoidingView style={style.background}>
      <ImageBackground  source={require('../../assets/fundo.png')} style={style.imagem}>
      <Text style={{flex:1, justifyContent:'center', alignItems:'center'}} />
        <Text style={{flex:1, justifyContent:'center', alignItems:'center'}}>Tela Familia</Text>
      <View>
        <Menu/>
      </View>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
}

