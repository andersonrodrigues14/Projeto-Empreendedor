/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
  View,
  Image,
  KeyboardAvoidingView,
  ImageBackground,
  Text,
} from 'react-native';

import ProfileUser from './ProfileUser';
import {style} from './StyleListProfile';
import {ScrollView} from 'react-native-gesture-handler';
import Menu from '../Main/Main';

class ListUser extends Component {
  render() {
    return (
      <KeyboardAvoidingView style={style.background}>
        <ImageBackground
          source={require('../../assets/fundo.png')}
          style={style.image}>
          <ScrollView style={style.scroll}>
            <View style={style.containerLogo}>
              <Image
                source={require('../../assets/dados.png')}
                style={{width: 100, height: 95}}
              />
              <Text style={style.textTitulo}>Dados</Text>
            </View>
          </ScrollView>
          <View style={style.containerUser}>
            <ProfileUser profile={this.props.user} />
          </View>
          <View>
            <Menu />
          </View>
        </ImageBackground>
      </KeyboardAvoidingView>
    );
  }
}

//retorna dados para a tela
const mapStateToProps = ({user}) => {
  return {
    adm: user.adm,
    id: user.id,
    user: user.user,
  };
};

export default connect(mapStateToProps)(ListUser);
