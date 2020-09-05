/* eslint-disable prettier/prettier */

//import
import React from 'react';

import {
  KeyboardAvoidingView,
  Text,
  StyleSheet,
  ImageBackground,
} from 'react-native';

//KeyboardAvoidingView usado keybord para evitar possível bug presente no IOS

//Import Styles
import {style} from './StyleMore';

//Criar o component
export default function App() {

  return (
    <KeyboardAvoidingView style={style.background}>
      <ImageBackground  source={require('../../assets/fundo.png')} style={style.image}>
      <Text>Tela Mais</Text>
      </ImageBackground>

    </KeyboardAvoidingView>
  );
}

