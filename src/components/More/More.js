/* eslint-disable prettier/prettier */
//import
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {logout} from '../../store/actions/userActions';
import {Actions} from 'react-native-router-flux'; // para navegar nas rotas
import {View, KeyboardAvoidingView, ScrollView, ImageBackground, Image, TouchableOpacity,Text} from 'react-native';
import {version} from '../../../package.json';

//Import Styles
import {style} from './StyleMore';
import Menu from '../Main/Main';
//Criar o component
class Mais extends Component {
  logout = () => {
    this.props.onLogout();
    Actions.login();
  }

  render() {
    return (
      <KeyboardAvoidingView style={style.background}>
      <ImageBackground
          source={require('../../assets/fundo.png')}
          style={style.image}>
      <ScrollView style={style.scroll}>
      <View style={style.containerLogo}>
        <Image source={require('../../assets/teste.png') } style={{width:100,height:95}}/>
        <Text style={style.textTitulo}>Carteira Digital de Vacinação</Text>
      </View>
      <View style={style.InfoUser}>
        <View style={style.editContainer}>
          <Image source={{uri:this.props.imagem}} style={style.imageUser} />
        </View>
    <Text style={style.textTitulo}>{this.props.nome}</Text>
        <TouchableOpacity onPress={this.logout} style={style.btnSair}>
            <Text style={style.textInsert}>Sair</Text>
        </TouchableOpacity>
    <Text style={style.textVersao}>Versão do App: {version}</Text>
      </View>
      </ScrollView>
      <View>
        <Menu/>
      </View>
      </ImageBackground>
      </KeyboardAvoidingView>
    );
  }
}
//retorna dados para a tela
const mapStateToProps = ({user}) => {
  return {
    nome: user.nome,
    imagem: user.imagem,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLogout: () => dispatch(logout()),
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(Mais);
