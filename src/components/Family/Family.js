/* eslint-disable prettier/prettier */

//import
import React from 'react';

import {
  KeyboardAvoidingView,
  Text,
  ImageBackground,
} from 'react-native';

//import Style
import {style} from './StyleFamily';

//KeyboardAvoidingView usado keybord para evitar possível bug presente no IOS

//Criar o component
export default function App() {

  return (
    <KeyboardAvoidingView style={style.background}>
      <ImageBackground  source={require('../../assets/fundo.png')} style={style.imagem}>
      <Text>Tela Familia</Text>
      </ImageBackground>

    </KeyboardAvoidingView>
  );
}

