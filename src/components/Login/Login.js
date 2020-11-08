/* eslint-disable prettier/prettier */

//import
import {Actions} from 'react-native-router-flux'; // para navegar nas rotas
import React, {useState, useEffect, Component} from 'react';
import {connect} from 'react-redux';

import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  Animated,
  Keyboard,
  YellowBox,
  LogBox,
  ImageBackground,
} from 'react-native';
import TextInputMask from 'react-native-text-input-mask';

//KeyboardAvoidingView usado keybord para evitar possível bug presente no IOS

//Import style
import {style} from './StyleLogin';
import { login } from '../../store/actions/userActions';


//Criar o component
class Login extends Component {
  state = {
    nome:'Anderson Teste',
    cpf: '',
    imagem: require('../../assets/foto.jpg'),
    password: '',
  };

  login = () => {
    this.props.onLogin({...this.state});
    Actions.home();
  };

  //useEffect(() => {
  //  YellowBox.ignoreWarnings(['Animated: `useNativeDriver`']);
  //  LogBox.ignoreAllLogs(); /*Ignorar worning do NativeDrive*/
    // eslint-disable-next-line no-undef
  //  keyboardDidShowListener = Keyboard.addListener(
  //    'keyboardDidShow',
  //    keyboardDidShow,
   // );

    // eslint-disable-next-line no-undef
  //  KeyboardDidHideListener = Keyboard.addListener(
  ///    'keyboardDidHide',
  //    keyboardDidHide,
  //  );
    // eslint-disable-next-line react-hooks/exhaustive-deps
 // }, []);
 // function keyboardDidShow() {
 //   Animated.parallel([
 ///     Animated.timing(logo.x, {
  //      toValue: 60,
  //      duration: 100,
  //    }),
   //   Animated.timing(logo.y, {
  //      toValue: 55,
   //     duration: 100,
   //   }),
   // ]).start();
  //}
 // function keyboardDidHide() {
  //  Animated.parallel([
   //   Animated.timing(logo.x, {
   //     toValue: 150,
   //     duration: 100,
   //   }),
   //   Animated.timing(logo.y, {
   //     toValue: 145,
   //     duration: 100,
   //   }),
   // ]).start();
  //}
render(){
  YellowBox.ignoreWarnings(['Animated: `useNativeDriver`']);
  LogBox.ignoreAllLogs(); /*Ignorar worning do NativeDrive*/
  return (
      <ImageBackground  source={require('../../assets/fundo.png')} style={style.image}>
      <View style={style.containerLogo}>
        <Animated.Image
          style={{width: 135, height: 130}}
          source={require('../../assets/teste.png')}
        />
      </View>

      <View style={style.container}>
        <Text style={style.textTitulo}>Carteira Digital de Vacinação</Text>
        <TextInputMask style={style.input} placeholder="CPF" mask={'[000] . [000] . [000] - [00]'} keyboardType="numeric"
        onChangeText={cpf => this.setState({ cpf })}/>
        <TextInput secureTextEntry ={true} style={style.input} placeholder="Senha"
        onChangeText={password => this.setState({ password })} />
      </View>

      <View style={style.buttons}>

        <TouchableOpacity style={style.btnSubmit} onPress={this.login} >
          <Text style={style.textSubmit}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={style.btnRegister} onPress = {() => Actions.cadastro()}>
          <Text style={style.textRegister}>Cadastrar-se</Text>
        </TouchableOpacity>

        <TouchableOpacity style={style.btnAlterPasswor} onPress = {() => Actions.senha()}>
          <Text style={style.textAlterPasswor}>Esqueci minha senha</Text>
        </TouchableOpacity>
      </View>
      </ImageBackground>
  );
}
}

const mapDispatchToProps = dispatch => {
  return {
      onLogin: user => dispatch(login(user)),
  };
};

export default connect(null,mapDispatchToProps)(Login);

