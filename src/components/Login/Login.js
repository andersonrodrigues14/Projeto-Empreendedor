/* eslint-disable prettier/prettier */
//import
import {Actions} from 'react-native-router-flux'; // para navegar nas rotas
import React, {Component} from 'react';
import {connect} from 'react-redux';

import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  Animated,
  YellowBox,
  LogBox,
  ImageBackground,
  Alert,
} from 'react-native';
import TextInputMask from 'react-native-text-input-mask';

//KeyboardAvoidingView usado keybord para evitar possível bug presente no IOS

//Import style
import {style} from './StyleLogin';
import {login} from '../../store/actions/userActions';

//Criar o component
class Login extends Component {
  state = {
    nome: '',
    email: '',
    senha: '',
  };

  componentDidUpdate = (prevProps) => {
    if (prevProps.isLoading && !this.props.isLoading) {
      Actions.home();
    }
  };

  login = () => {
    if (!this.state.email.trim()) {
      Alert.alert('Campo não preenchido !', 'Campo Email é obrigatório!');
    } else if (!this.state.senha.trim()) {
      Alert.alert('Campo não preenchido !', 'Campo Senha é obrigatório!');
    } else {
      this.props.onLogin({...this.state});
    }
  };

  render() {
    YellowBox.ignoreWarnings(['Animated: `useNativeDriver`']);
    LogBox.ignoreAllLogs(); /*Ignorar worning do NativeDrive*/
    return (
      <ImageBackground
        source={require('../../assets/fundo.png')}
        style={style.image}>
        <View style={style.containerLogo}>
          <Animated.Image
            style={{width: 135, height: 130}}
            source={require('../../assets/teste.png')}
          />
        </View>

        <View style={style.container}>
          <Text style={style.textTitulo}>Carteira Digital de Vacinação</Text>
          <TextInputMask
            style={style.input}
            keyboardType="email-address"
            placeholder="EMAIL"
            onChangeText={(email) => this.setState({email})}
            value={this.state.email}
          />
          <TextInput
            secureTextEntry={true}
            style={style.input}
            placeholder="Senha"
            onChangeText={(senha) => this.setState({senha})}
          />
        </View>

        <View style={style.buttons}>
          <TouchableOpacity style={style.btnSubmit} onPress={this.login}>
            <Text style={style.textSubmit}>Entrar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={style.btnRegister}
            onPress={() => Actions.cadastro()}>
            <Text style={style.textRegister}>Cadastrar-se</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}

const mapStateToProps = ({user}) => {
  return {
    isLoading: user.isLoading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLogin: (user) => dispatch(login(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
